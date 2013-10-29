function Scale2(oriImgData, scaleImgData) {
    var oldArray = oriImgData.data;
    var newArray = scaleImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var dw = scaleImgData.width;
    var e0, e1, e2, e3;
    for (var y = 0; y < sh; y++)
        for (var x = 0; x < sw; x++)
            for (var i = 0; i < 4; i++) {
                if (x == 0 || y == 0 || x == sh - 1 || y == sw - 1)
                    var e = get9Neighbors(oldArray, sw, sh, (sw * y + x) * 4 + i);
                else
                    var e = dirGet9Neighbors(oldArray, sw, (sw * y + x) * 4 + i);
                if (e.u != e.d && e.l != e.r) {
                    e0 = e.l == e.u ? e.l : e.c;
                    e1 = e.u == e.r ? e.r : e.c;
                    e2 = e.l == e.d ? e.l : e.c;
                    e3 = e.d == e.r ? e.r : e.c;
                }
                else
                    e0 = e2 = e1 = e3 = e.c;
                newArray[(dw * y * 2 + x * 2) * 4 + i] = e0;
                newArray[(dw * y * 2 + x * 2 + 1) * 4 + i] = e1;
                newArray[(dw * (2 * y + 1) + x * 2) * 4 + i] = e2;
                newArray[(dw * (2 * y + 1) + x * 2 + 1) * 4 + i] = e3;
            }
}
function Scale2Plus(oriImgData, scaleImgData) {
    var oldArray = oriImgData.data;
    var newArray = scaleImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var dw = scaleImgData.width;
    var A, B, C, D, O = 0;
    for (var y = 0; y < sh; y++)
        for (var x = 0; x < sw; x++) {
            O = (sw * y + x) * 4;
            A = (dw * y * 2 + x * 2) * 4;
            B = (dw * y * 2 + x * 2 + 1) * 4;
            C = (dw * (2 * y + 1) + x * 2) * 4;
            D = (dw * (2 * y + 1) + x * 2 + 1) * 4;
            for (var i = 0; i < 4; i++) {
                if (x == 0 || y == 0 || x == sh - 1 || y == sw - 1)
                    var e = get9Neighbors(oldArray, sw, sh, O + i);
                else
                    var e = dirGet9Neighbors(oldArray, sw, O + i);
                newArray[A + i] = DetermineY(e.ul, e.l, e.u, e.c);
                newArray[B + i] = DetermineY(e.ur, e.r, e.u, e.c);
                newArray[C + i] = DetermineY(e.dl, e.l, e.d, e.c);
                newArray[D + i] = DetermineY(e.dr, e.r, e.d, e.c);
            }
        }
}
function DetermineY(x1, x2, x4, x5) {
    var d1 = Math.abs(x5 - x2);
    var d2 = Math.abs(x5 - x4);
    var d3 = Math.abs(x5 - x1);
    var d4 = Math.abs(x5 - (x2 + x4) / 2);
    var d = Math.min(d1, d2, d3, d4);
    var y;
    if (d == d1)  y = (x5 + x2) / 2;
    else if (d == d2) y = (x5 + x4) / 2;
    else if (d == d3) y = (x5 + x1) / 2;
    else y = x5 / 2 + x2 / 4 + x4 / 4;
    return y;
}
function TwirlFromCenter(angle, radius, oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var newArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var cx = sw / 2;
    var cy = sh / 2;
    var a, cos, sin, x1, y1, xl, yu, w, u, p, A, B, C, D, O = 0;
    for (var y = 0; y < sh; y++)
        for (var x = 0; x < sw; x++) {
            a = (1 - (Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2))) / radius) * angle;
            O = (sw * y + x) * 4;
            if (a < 0)
                for (var i = 0; i < 4; i++)
                    newArray[O + i] = oldArray[O + i];
            else {
                cos = Math.cos(a);
                sin = Math.sin(a);
                x1 = cos * x + sin * y + (1 - cos) * cx - sin * cy;
                y1 = -sin * x + cos * y + (1 - cos) * cy + sin * cx;
                xl = Math.floor(x1);
                yu = Math.floor(y1);
                u = x1 - xl;
                w = y1 - yu;
                A = (sw * yu + xl) * 4;
                B = (sw * (yu + 1) + xl) * 4;
                D = A + 4;
                C = B + 4;
                for (var i = 0; i < 4; i++)
                    newArray[O + i] = (1 - u) * (1 - w) * oldArray[A + i] + (1 - u) * w * oldArray[B + i] + u * w * oldArray[C + i] + u * (1 - w) * oldArray[D + i];
            }
        }

}
function WaveHorizontal (a, t, oriImgData, neoImgData)
{
    var oldArray = oriImgData.data;
    var newArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var maxh = sh - 1;
    var x, y, A, B, xu, u, O, d = 0;
    for (var y1 = 0; y1 < sh; y1++)
    {
        y = y1;
        d=a * Math.sin(Math.PI * 2 / t * y);
        for (var x1 = 0; x1 < sw; x1++)  {
            x = x1 - d;
            if (x < 0)x = 0;
            else if (x >= maxh)x = sh - 2;
            xu = Math.floor(x);
            u = x - xu;
            A = (sw * y + xu) * 4;
            B = A+4;
            O = (sw * y1 + x1)*4;
            for (var i = 0; i < 4; i++)
                newArray[O + i] = oldArray[B + i] * u + (1 - u) * oldArray[A + i];
        }   }
    return true;
}
function WaveBoth(a, t, oriImgData, neoImgData)
{
    var oldArray = oriImgData.data;
    var newArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var maxh = sh - 1;   var maxw=  sw-1;
    var x, y, A, B,C , D, xu,yw, u,w, O, d = 0;
    for (var y1 = 0; y1 < sh; y1++)
        for (var x1 = 0; x1 < sw; x1++)  {
            x=x1 -a * Math.sin(Math.PI * 2 / t * y1);
            y=y1- a * Math.sin(Math.PI * 2 / t * x1);
            if (y < 0)y = 0;
            else if (y >= maxh)y = sh - 2;
            if (x < 0)x = 0;
            else if (x >= maxw)x = sw - 2;
            xu = Math.floor(x);
            yw=Math.floor(y);
            u = x- xu;
            w = y- yw;
            A = (sw * yw + xu) * 4;
            B = (sw * (yw+1) + xu + 1) * 4;
            C=A+4;
            D=B+4;
            O = (sw * y1 + x1)*4;
            for (var i = 0; i < 4; i++)
                newArray[O + i] = oldArray[A + i] *(1-u)*(1-w) +  (1-u)*w * oldArray[B + i]+u*(1-w)*oldArray[C+i]+u*w*oldArray[D+i];
         }
    return true;
}
function WaveVertical(a, t, oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var newArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var maxh = sh - 1;

    var x, y, A, B, yu, u, O, d = 0;
    for (var x1 = 0; x1 < sw; x1++)
    {
        x = x1;
        d=a * Math.sin(Math.PI * 2 / t * x);
        for (var y1 = 0; y1 < sh; y1++) {
            y = y1 - d;
            if (y < 0)y = 0;
            else if (y >= maxh)y = sh - 2;
            yu = Math.floor(y);
            u = y - yu;
            A = (sw * yu + x) * 4;
            B = (sw * (yu + 1) + x) * 4;
            O = (sw * y1 + x1)*4;
            for (var i = 0; i < 4; i++)
                newArray[O + i] = oldArray[B + i] * u + (1 - u) * oldArray[A+ i];
        }   }
    return true;
}
function Spherize(cx, cy, p, r, oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var newArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var maxw = sw - 1;
    var maxh = sh - 1;
    var d, O, a, x1, y1, xl, yu, w, u, A, B, C, D = 0;
    for (var y = 0; y < sh; y++)
        for (var x = 0; x < sw; x++) {
            d = (Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2)));
            O = (sw * y + x) * 4;
            if (d < r) {
                a = p * (r - d) / r;
                x1 = x + a * (x - cx) / d;
                y1 = y + a * (y - cy) / d;
                if (x1 < 0) x1 = 0;
                else if (x1 >= maxw) x1 = sw - 2;
                if (y1 >= maxh) y1 = sh - 2;
                else if (y1 < 0) y1 = 0;
                xl = Math.floor(x1);
                yu = Math.floor(y1);
                u = x1 - xl;
                w = y1 - yu;
                A = (sw * yu + xl) * 4;
                B = (sw * (yu + 1) + xl) * 4;
                D = A + 4;
                C = B + 4;
                for (var i = 0; i < 4; i++)
                    newArray[O + i] = (1 - u) * (1 - w) * oldArray[A + i] + (1 - u) * w * oldArray[B + i] + u * w * oldArray[C + i] + u * (1 - w) * oldArray[D + i];
            }
            else
                for (var i = 0; i < 4; i++)
                    newArray[O + i] = oldArray[O + i];

        }
}
function AvgDither(r, oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var neoArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var t = 0;
    for (var i = 0; i < oldArray.length; i++) {
        t = r + (1 - 2 * r / 255) * avg9Neighbors(oldArray, sw, sh, i);
        neoArray[i] = oldArray[i] >= t ? 255 : 0;
    }
}
function DiffuseDirther(level, oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var neoArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var e, A = 0;
    var hl = level / 2;
    for (var i = 0; i < neoArray.length; i++)
        neoArray[i] = oldArray[i];
    for (var y = 0; y < sh - 1; y++)
        for (var x = 1; x < sw - 1; x++)
            for (var i = 0; i < 3; i++) {
                A = neoArray[(sw * y + x) * 4 + i];
                if (A > 255)
                    neoArray[(sw * y + x) * 4 + i] = 255;
                else if (A < 0)
                    neoArray[(sw * y + x) * 4 + i] = 0;
                else {
                    e = A % level;
                    e = e > hl ? e : -e;
                    neoArray[(sw * y + x) * 4 + i] += e;
                    e = e / 16;
                    neoArray[(sw * y + x + 1) * 4 + i] += e * 7;
                    neoArray[(sw * (y + 1) + x + 1) * 4 + i] += e;
                    neoArray[(sw * (y + 1) + x) * 4 + i] += e * 5;
                    neoArray[(sw * (y + 1) + x - 1) * 4 + i] += e * 3;
                }
            }
    return true;
}
function Stip(base, oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var neoArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var r, g = 0;
    for (var y = 0; y < sh; y++)
        for (var x = 0; x < sw; x++) {
            g = (oldArray[(sw * y + x) * 4] + oldArray[(sw * y + x) * 4 + 1] + oldArray[(sw * y + x) * 4 + 2]) / 3;
            r = base + Math.random() * (255 - base);
            if (g > r)g = 255;
            else if (g < base)g = 0;
            neoArray[(sw * y + x) * 4] = neoArray[(sw * y + x) * 4 + 1] = neoArray[(sw * y + x) * 4 + 2] = g;
            neoArray[(sw * y + x) * 4 + 3] = oldArray[(sw * y + x) * 4 + 3];
        }
    return true;
}
function Blur(oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var neoArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var a, b, c = 0;
    for (var y = 1; y < sh - 1; y++)
        for (var x = 1; x < sw - 1; x++) {
            a = (sw * (y - 1) + x - 1) * 4;
            b = (sw * y + x - 1) * 4;
            c = (sw * (y + 1) + x - 1) * 4;
            for (var i = 0; i < 3; i++)
                neoArray[b + 4 + i] = (oldArray[a + i] + oldArray[a + 4 + i] + oldArray[a + 8 + i] +
                    oldArray[b + i] + oldArray[b + 4 + i] * 2 + oldArray[b + 8 + i] +
                    oldArray[c + i] + oldArray[c + 4 + i] + oldArray[c + 8 + i]) / 10;
            neoArray[b + 7] = oldArray[b + 7];
        }
    return true;
}
function Sharpen(s, oriImgData, neoImgData) {
    var oldArray = oriImgData.data;
    var neoArray = neoImgData.data;
    var sw = oriImgData.width;
    var sh = oriImgData.height;
    var a, b, c = 0;
    var wc = 4 * s + 1;
    for (var y = 1; y < sh - 1; y++)
        for (var x = 1; x < sw - 1; x++) {
            a = (sw * (y - 1) + x) * 4;
            b = (sw * y + x) * 4;
            c = (sw * (y + 1) + x) * 4;
            for (var i = 0; i < 3; i++)
                neoArray[b + 4 + i] = oldArray[b + i] * wc - s * (oldArray[a + i] + oldArray[b - 4 + i] + oldArray[b + 4 + i] + oldArray[c + i]);
            neoArray[b + 7] = oldArray[b + 7];
        }
    return true;
}
function inRange(i, width, height) {
    return ((i >= 0) && (i < width * height * 4));
}
function dirGet9Neighbors(Data, width, i) {
    var v = Data[i];
    return{
        ul: Data[i - width * 4 - 4], u: Data[i - width * 4], ur: Data[i - width * 4 + 4],
        l: Data[i - 4], c: v, r: Data[i + 4],
        dl: Data[i + width * 4 - 4], d: Data[i + width * 4], dr: Data[i + width * 4 + 4]
    }
}
function get9Neighbors(Data, width, height, i) {
    var v = Data[i];
    return{
        ul: inRange(i - width * 4 - 4, width, height) ? Data[i - width * 4 - 4] : v, u: inRange(i - width * 4, width, height) ? Data[i - width * 4] : v, ur: inRange(i - width * 4 + 4, width, height) ? Data[i - width * 4 + 4] : v, l: inRange(i - 4, width, height) ? Data[i - 4] : v, c: v, r: inRange(i + 4, width, height) ? Data[i + 4] : v, dl: inRange(i + width * 4 - 4, width, height) ? Data[i + width * 4 - 4] : v, d: inRange(i + width * 4, width, height) ? Data[i + width * 4] : v, dr: inRange(i + width * 4 + 4, width, height) ? Data[i + width * 4 + 4] : v
    };
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