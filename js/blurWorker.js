/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-10
 * Time: 上午11:08
 * To change this template use File | Settings | File Templates.
 */
function inRange(i, width, height) {
    return ((i >= 0) && (i < width * height * 4));
}
function avg9Neighbors(Data, width, height, i) {
    var v = Data[i];
    var n = inRange(i - width * 4, width, height) ? Data[i - width * 4] : v;
    var s = inRange(i + width * 4, width, height) ? Data[i + width * 4] : v;
    var w = inRange(i - 4, width, height) ? Data[i - 4] : v;
    var e = inRange(i + 4, width, height) ? Data[i + 4] : v;
    var ne = inRange(i - width * 4 + 4, width, height) ? Data[i - width * 4 + 4] : v;
    var nw = inRange(i - width * 4 - 4, width, height) ? Data[i - width * 4 - 4] : v;
    var se = inRange(i + width * 4 + 4, width, height) ? Data[i + width * 4 + 4] : v;
    var sw = inRange(i + width * 4 - 4, width, height) ? Data[i + width * 4 - 4] : v;
    var newVal = Math.floor((n + s + w + e + ne + nw + se + sw + v) / 9);
    return newVal;
}
function avg4Neighbors(Data, width, height, i) {
    var v = Data[i];
    var n = inRange(i - width * 4, width, height) ? Data[i - width * 4] : v;
    var s = inRange(i + width * 4, width, height) ? Data[i + width * 4] : v;
    var w = inRange(i - 4, width, height) ? Data[i - 4] : v;
    var e = inRange(i + 4, width, height) ? Data[i + 4] : v;
    var newVal = Math.floor((n + s + w + e + v) / 5);
    return newVal;
}
function blurImageData(imageData, isNine) {
    var w = imageData.width;
    var h = imageData.height;
    var data = imageData.data;
    if (isNine)
        for (var i = 0; i < data.length; i += 4) {
            data[i] = avg9Neighbors(data, w, h, i);
            data[i + 1] = avg9Neighbors(data, w, h, i + 1);
            data[i + 2] = avg9Neighbors(data, w, h, i + 2);
            data[i + 3] = Math.floor(data[i + 3] * 0.8);
        }
    else
        for (var i = 0; i < data.length; i += 4) {
            data[i] = avg4Neighbors(data, w, h, i);
            data[i + 1] = avg4Neighbors(data, w, h, i + 1);
            data[i + 2] = avg4Neighbors(data, w, h, i + 2);

        }
}
function aliase(imageData, isAverage) {
    var w = imageData.width;
    var h = imageData.height;
    if (!isAverage) {
        for (var y = 0; y < h; y += 2)
            for (var x = 0; x < w; x += 2)
                for (var i = 0; i <= 3; i++) {
                    imageData.data[((w * y) + x + 1) * 4 + i] = imageData.data[((w * y) + x) * 4 + i];
                    imageData.data[((w * (y + 1)) + x) * 4 + i] = imageData.data[((w * y) + x) * 4 + i];
                    imageData.data[((w * (y + 1)) + x + 1) * 4 + i] = imageData.data[((w * y) + x) * 4 + i];
                }
    }
    else {
        var sum, avg;
        for (var y = 0; y < h; y += 2)
            for (var x = 0; x < w; x += 2)
                for (var i = 0; i <= 3; i++) {
                    sum = imageData.data[((w * y) + x) * 4 + i];
                    sum += imageData.data[((w * y) + x + 1) * 4 + i];
                    sum += imageData.data[((w * (y + 1)) + x) * 4 + i];
                    sum += imageData.data[((w * (y + 1)) + x + 1) * 4 + i];
                    avg = Math.floor(sum / 4);
                    imageData.data[((w * y) + x) * 4 + i] = avg;
                    imageData.data[((w * y) + x + 1) * 4 + i] = avg;
                    imageData.data[((w * (y + 1)) + x) * 4 + i] = avg;
                    imageData.data[((w * (y + 1)) + x + 1) * 4 + i] = avg;
                }
    }
}
onmessage = function (e) {
    var imgData = e.data;
    blurImageData(imgData, true);
    blurImageData(imgData, false);
    aliase(imgData, true);
    postMessage(imgData);
}
