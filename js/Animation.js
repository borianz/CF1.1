/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-16
 * Time: 下午11:22
 * To change this template use File | Settings | File Templates.
 */
function VelocityCollide(tank, vx, vy) {
    var K = tank >= 0 ? Math.atan(tank) : Math.PI + Math.atan(tank);
    var tan0=(tank-vy/vx)/(1+tank*vy/vx);
    var O= tan0>=0? Math.atan(tan0):Math.atan(tan0)+Math.PI;
    var vm = Math.sqrt(vx * vx + vy * vy);
    var Vcx =vm* Math.cos(O);
    var Vcy = -vm*Math.sin(O);
    var p = {
        Vx: Vcx * Math.cos(K) + Vcy * Math.sin(K),
        Vy:Vcx * Math.sin(K)-Vcy * Math.cos(K)
    }
return p;
}
function standardClock(name) {
    this.now=Date.now();
    this.stop = function () {
        this.isStop = true;
        this.stopTime = Date.now();
    }
    this.name = name;
    this.start = function () {
        this.isStop = false;
    }
    // Return current tick count
    this.ticks = function () {
        return this.now;
    }
    this.move=function(){
        if(!this.isStop)
          this.now=Date.now();
        else
          this.now=this.stopTime;
    }
    // Return number of ticks per second
    this.ticksPerSecond = function () {
        return 1000;
    }
    return this;
}
function boundary(inUpLeft, fun) {
    this.calculate = fun;
    if (inUpLeft)
        this.isOut = function (x, y) {
            return y >= this.calculate(x)
        };
    else
        this.isOut = function (x, y) {
            return y <= this.calculate(x)
        };
    this.revise = VelocityCollide;
    return this;
}
function linerBoundary(inUpLeft, x1, y1, x2, y2) {
    this.k = (y1 - y2) / (x1 - x2);
    this.b = y1 - this.k * x1;
    this.calculate = function (x) {
        return this.k * x + this.b;
    }
    this.r=inUpLeft;
    if (inUpLeft)
        this.isOut = function (x, y) {
            return y >= this.calculate(x)
        };
    else
        this.isOut = function (x, y) {
            return y <= this.calculate(x)
        };
    this.revise = VelocityCollide;
    return this;
}
function rectFloatAniamtion(x,y,Vx,Vy,isCmdClock,maxX,maxY,minX,minY)
{
    this.Vx = Vx;
    this.Vy = Vy;
    this.x = x;
    this.y = y;
    this.maxX = maxX;
    this.maxY = maxY;
    this.minY = minY;
    this.minX = minX;
    this.isRunning = false;
    this.timeProvider = isCmdClock ? window.cmdStdClock : window.backStdClock;
    this.start = function () {
        this.isRunning = true;
        this.lastTime = this.timeProvider.ticks();
    };
    this.stop = function () {
        this.isRunning = false;
    };
    this.update = function () {
        if (this.isRunning ) {
            var now = this.timeProvider.ticks();
            if (this.lastTime != now) {
                var elapsed = (now - this.lastTime) / this.timeProvider.ticksPerSecond();
                this.x += this.Vx * elapsed;
                this.y += this.Vy * elapsed;
                if (this.y > this.maxY) {
                    this.Vy = -this.Vy;
                    this.y = this.maxY;
                }else if (this.y < this.minY) {
                    this.Vy = -this.Vy;
                    this.y = this.minY;
                }
                if (this.x > this.maxX) {
                    this.Vx = -this.Vx;
                    this.x = this.maxX;
                }
                else if (this.x < this.minX) {
                    this.Vx = -this.Vx;
                    this.x = this.minX;
                }
            }
            this.lastTime = now;
        }
    }

}
function floatAnimation(x, y, Vx, Vy, boundariesFun, isCmdClock, maxX, maxY, minX, minY) {
    this.boundaries = boundariesFun;
    this.Vx = Vx;
    this.Vy = Vy;
    this.x = x;
    this.y = y;
    this.maxX = maxX;
    this.maxY = maxY;
    this.minY = minY;
    this.minX = minX;
    this.isRunning = false;
    this.timeProvider = isCmdClock ? window.cmdStdClock : window.backStdClock;
    this.start = function () {
        this.isRunning = true;
        this.lastTime = this.timeProvider.ticks();
    };
    this.stop = function () {
        this.isRunning = false;
    };
    this.update = function () {
        if (this.isRunning ) {
            var now = this.timeProvider.ticks();
            if (this.lastTime != now) {
                var elapsed = (now - this.lastTime) / this.timeProvider.ticksPerSecond();
                this.x += this.Vx * elapsed;
                this.y += this.Vy * elapsed;
                if (this.maxY && this.y > this.maxY) {
                    this.Vy = -this.Vy;
                    this.y = this.maxY;
                }
                else if (this.maxX && this.x > this.maxX) {
                    this.Vx = -this.Vx;
                    this.x = this.maxX;
                }
                else if (this.minX && this.x < this.minX) {
                    this.Vx = -this.Vx;
                    this.x = this.minX;
                }
                else if (this.minY && this.y < this.minY) {
                    this.Vy = -this.Vy;
                    this.y = this.minY;
                }
                else
                    for (var i = 0, item = this.boundaries[i]; item; item = this.boundaries[++i]) {
                        if (item.isOut(this.x, this.y)) {
                            this.y = item.calculate(this.x);
                            var dy = item.calculate(this.x + 0.01) - this.y;
                            var p = item.revise(item.r?dy / 0.01: -dy/0.01, this.Vx, this.Vy);

                            this.Vx = p.Vx;
                            this.Vy = p.Vy;
                            break;
                        }
                    }
            }
            this.lastTime = now;
        }
    }

}
function simpleClock(duration,direction,timingFunction,range,offset,isCmdClock,infinite)
{
    this.timeProvider = isCmdClock ? window.cmdStdClock : window.backStdClock;
    this.duration = duration;
    this.direction = direction;
    this.timingFunction = timingFunction?  timingFunction:linear;
    this.multiplier=range;
    this.offset=offset;
    this.onend=infinite? function(){this.toggle();}:function(){}
    this.onreverse=infinite? function(){this.toggle();}:function(){}
    this.startTime = 0;
    this.d = this.direction;
    this.t = (this.d== 1 ? 0.0 : 1.0);
    this.isFinished = true;
    this.value =this.offset;
    this.start = function () {
        if (this.t==0) {
            this.startTime = this.timeProvider.ticks();
            this.d= this.direction;
            this.t = (this.d== 1 ? 0.0 : 1.0);
            this.isFinished=false;
        }
    };
    this.restart=function(){
        this.startTime = this.timeProvider.ticks();
        this.d= this.direction;
        this.t = (this.d== 1 ? 0.0 : 1.0);
        this.isFinished=false;
    };
    this.reverse=function()
     {
         if(this.t==1) {
         this.isFinished = false;
         this.d= -this.direction;
         this.t = (this.d== 1 ? 0.0 : 1.0);
         this.startTime = this.timeProvider.ticks();
         }
     };
    this.update=function()
    {
        if(!this.isFinished){
            var dur=(this.timeProvider.ticks()-this.startTime)/this.timeProvider.ticksPerSecond();
            if(dur>0)
            {
                this.t=this.d==1? dur/this.duration:1-dur/this.duration;
                if(this.t>1){
                    this.t=1;
                    this.isFinished=true;
                    this.onend();
                }
                else if(this.t<0)
                {
                    this.t=0;
                    this.isFinished=true;
                    this.onreverse();
                }
                this.value = (this.timingFunction(this.t) * this.multiplier) + this.offset;
            }
        }
    };
    this.toggle=function()
    {
       if(this.t==0)
       this.start();
      else if(this.t==1)
       this.reverse();
    };

}
function elasticClock(duration,range,offset,isCmdClock,mode,amplitude,period,infinite)
{
    this.timeProvider = isCmdClock ? window.cmdStdClock : window.backStdClock;
    this.duration = duration;
    this.direction = 1;
    this.mode=mode? mode:0; //-1 in,0 InAndOut,1 out
    this.a=amplitude? amplitude*range:range;
    this.p=period? period*duration:duration*0.3;
    this.multiplier=range;
    this.offset=offset;
    this.onend=infinite? function(){this.toggle();}:function(){}
    this.onreverse=infinite? function(){this.toggle();}:function(){}
    this.startTime = 0;
    this.d = this.direction;
    this.t = (this.d== 1 ? 0.0 : 1.0);
    this.isFinished = true;
    this.value =this.offset;
    this.start = function () {
        if (this.t==0) {
            this.startTime = this.timeProvider.ticks();
            this.d= this.direction;
            this.t = (this.d== 1 ? 0.0 : 1.0);
            this.isFinished=false;
        }
    }
    this.reverse=function()
    {
        if(this.t==1) {
            this.isFinished = false;
            this.d= -this.direction;
            this.t = (this.d== 1 ? 0.0 : 1.0);
            this.startTime = this.timeProvider.ticks();
        }
    }
    this.update=function()
    {
        if(!this.isFinished){
            var t=this.d==1?(this.timeProvider.ticks()-this.startTime)/this.timeProvider.ticksPerSecond():this.duration-(this.timeProvider.ticks()-this.startTime)/this.timeProvider.ticksPerSecond();
            if(t>0)
            {
                this.t= t/this.duration;
                if(this.t>=1){
                    this.t=1;
                    this.value = (this.t * this.multiplier) + this.offset;
                    this.isFinished=true;
                    this.onend();
                }
                else
                {
                    switch (this.mode)
                    {
                        case -1:
                            var s = this.p/(2*Math.PI) * Math.asin (this.multiplier/this.a);
                            this.value= -(this.a*Math.pow(2,10*(t-=1)) * Math.sin( (t*this.duration-s)*(2*Math.PI)/this.p )) + this.offset;
                            break;
                        case 0:
                            var s = this.p/(2*Math.PI) * Math.asin (this.multiplier/this.a) ;
                            if (t < 1)
                                this.value= -.5*(this.a*Math.pow(2,10*(t-=1)) * Math.sin( (t*this.duration-s)*(2*Math.PI)/this.p )) + this.offset;
                            else
                                this.value=this.a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*this.duration-s)*(2*Math.PI)/this.p )*.5 + this.multiplier + this.offset;
                            break;
                        case 1:
                            var s = this.p/(2*Math.PI) * Math.asin (this.multiplier/this.a);
                            this.value=this.a*Math.pow(2,-10*t) * Math.sin( (t*this.duration-s)*(2*Math.PI)/this.p ) + this.multiplier + this.offset;

                    }
                }
            }
            else
            {
                this.t=0;
                this.value=(this.t * this.multiplier) + this.offset;
                this.isFinished=true;
                this.onreverse();
            }
        }
    }
    this.toggle=function()
    {
        if(this.t==0)
            this.start();
        else if(this.t==1)
            this.reverse();
    }
    return this;
}
function clock(duration, delay, direction, reverses, iterations, timingFunction, range, multiplier, offset, isCmdClock) {

    // Initialize
    this.timeProvider = isCmdClock ? window.cmdStdClock : window.backStdClock;          // Time provider
    this.duration = duration;                         // Duration (in seconds)
    this.delay = delay;                               // Initial delay (in seconds)
    this.direction = direction;                       // Direction (-1 = backward, 1 = forward)
    this.reverses = reverses;                         // Does this reverse? (true/false)
    this.iterations = iterations;                     // Number of iterations (0 = infinite)
    this.timingFunction = timingFunction;             // Timing function
    this.multiplier = (range * multiplier);           // Value multiplier (after timing function)
    this.offset = (range * offset);                   // Value offset (after multiplier)

    this.reset = function () {
        this.startTime = 0;                             // Start time reference
        this.stopTime = 0;                              // Stop time reference
        this.lastTime = 0;                              // Last time reference
        this.baseDirection = this.direction;            // Base direction
        this.d = this.baseDirection;                    // Current direction
        this.t = (this.baseDirection == 1 ? 0.0 : 1.0); // Current clock time (0.0 - 1.0)
        this.i = 0;                                     // Current iteration
        this.isRunning = false;                         // Is this running?
        this.isFinished = false;                        // Is the entire clock run finished?
        this.value = 0.0;                               // Current computed clock value
    }
    this.reset();
    this.started = new customEvent("started");
    this.stopped = new customEvent("stopped");
    this.iterated = new customEvent("iterated");
    this.finished = new customEvent("finished");

    // Start the clock
    this.start = function () {
        if (!this.isRunning && !this.isFinished) {
            this.startTime = this.timeProvider.ticks() - (this.stopTime - this.startTime);
            this.isRunning = true;
            this.started.fire(null, { message: this.started.eventName });
        }
    }

    // Re-start the clock (reset and start)
    this.restart = function () {
        this.reset();
        this.start();
    }

    // Stop the clock
    this.stop = function () {
        if (this.isRunning && !this.isFinished) {
            this.stopTime = this.timeProvider.ticks();
            this.isRunning = false;
            this.stopped.fire(null, { message: this.stopped.eventName });
        }
    }

    // Toggle the clock
    this.toggle = function () {
        if (!this.isFinished)
            if (this.isRunning)
                this.stop();
            else
                this.start();
    }

    // Rewind the clock
    this.rewind = function () {

        // Only rewind if the clock is running and it hasn't finished
        if (this.isRunning && !this.isFinished)
            this.jumpTo(this.i);

    }

    // Fast-forward the clock
    this.fastForward = function () {

        // Only fast-forward if the clock is running and it hasn't finished
        if (this.isRunning && !this.isFinished)
            this.jumpTo(this.i + 1);

    }

    // Reverse the clock
    this.reverse = function () {

        // Only reverse if the clock is running and it hasn't finished
        if (this.isRunning && !this.isFinished) {

            // Reverse the clock direction
            this.baseDirection = -this.baseDirection;

            // Jump to the same position, but in reverse
            var position = this.i + (this.d == -1.0 ? this.t : (1.0 - this.t));
            this.jumpTo(position);
        }
        else {
            this.isFinished = false;
            this.baseDirection = -this.baseDirection;
            var position = this.i + (this.d == -1.0 ? this.t : (1.0 - this.t));
            this.jumpTo(position);
            this.isRunning = true;

            this.lastTime = this.timeProvider.ticks();
            this.startTime = this.timeProvider.ticks();
        }

    }
    // Jump to iteration
    this.jumpTo = function (iteration) {

        // Determine iteration time
        var now = this.timeProvider.ticks();
        var ticksPerSecond = this.timeProvider.ticksPerSecond();
        var iterationTime = (this.delay * ticksPerSecond) +
            ((iteration * this.duration) * ticksPerSecond);
        this.startTime = (now - iterationTime);
    }

    // Update function
    this.update = updateClock;

    // Set initial value
    this.value = (this.timingFunction(this.t) * this.multiplier) + this.offset;


    // Add to clocks array
    return this;
}
function updateClock() {

    // Is clock running?
    if (this.isRunning && !this.isFinished) {

        // Capture the current time
        var now = this.timeProvider.ticks();

        // Has the time changed?
        if (now != this.lastTime) {

            // How many seconds have elapsed since the clock started?
            var elapsed = (now - this.startTime) / this.timeProvider.ticksPerSecond();

            // How many possible iterations?
            var iterations = (elapsed - this.delay) / this.duration;

            // Need to wait more?
            if (iterations < 0.0) {

                // Reset to 0
                iterations = 0.0;
            }

            // Capture current iteration
            var currentIteration = Math.floor(iterations);

            // Iteration changed?
            if (currentIteration != this.i) {

                // Iterated event
                this.iterated.fire(null, { message: this.iterated.eventName });
            }

            // How far "into" the iteration?
            this.t = iterations - currentIteration;

            // Is this finite?
            if (this.iterations != 0) {

                // Reached the limit?
                if (currentIteration >= this.iterations) {

                    // Set to end of final iteration
                    currentIteration = this.iterations - 1;
                    this.t = 1.0;

                    // Stop clock
                    this.stop();

                    // This clock has finished
                    this.isFinished = true;

                    // Finished event
                    this.finished.fire(null, { message: this.finished.eventName });
                }
            }

            // Track current iteration
            this.i = currentIteration;

            // Does direction ever change?
            if (this.reverses) {

                // Is this an even iteration? (0 is considered even)
                if ((Math.floor(this.i) % 2) == 0) {

                    // Original direction
                    this.d = this.baseDirection;
                }
                else {

                    // Alternate direction
                    this.d = -this.baseDirection;
                }
            }
            else {

                // Direction doesn't change
                this.d = this.baseDirection;
            }

            // Moving "backwards"?
            if (this.d == -1) {

                // Adjust "t"
                this.t = (1.0 - this.t);
            }

            // Update current computed clock value
            this.value = (this.timingFunction(this.t) * this.multiplier) + this.offset;

            // Remember last time
            this.lastTime = now;
        }
    }
}
function customEvent() {

    // Name of the event
    this.eventName = arguments[0];

    // Subscribers to notify on event fire
    this.subscribers = new Array();

    // Subscribe a function to the event
    this.subscribe = function (fn) {

        // Only add if the function doesn't already exist
        if (this.subscribers.indexOf(fn) == -1) {

            // Add the function
            this.subscribers.push(fn);
        }
    };
    this.unSubscribe = function (f) {
        if (this.subscribers.indexOf(f) != -1)
            this.subscribers.splice(this.subscribers.indexOf(f), 1);

    }
    // Fire the event
    this.fire = function (sender, eventArgs) {

        // Any subscribers?
        if (this.subscribers.length > 0) {

            // Loop through all subscribers
            for (var i = 0; i < this.subscribers.length; i++) {

                // Notify subscriber
                this.subscribers[i](sender, eventArgs);
            }
        }
    };
    return this;
}
function updatePath() {

    // Reference the animation path clock
    var clock = this.pathClock;

    // Where is T in the linear animation?
    var t = clock.value;

    // Has the clock value changed?
    if (t != this.lastValue) {

        // Limit t
        if (t < 0.0 || t > (this.linear.length - 1)) {

            t = (t < 0.0) ? 0.0 : (this.linear.length - 1);
        }
        var tIndex = Math.floor(t);

        // Distance between index points
        var d = (t - tIndex);

        // Get segment indices
        var segment1Index = this.linear[tIndex][0];
        var segment2Index = segment1Index;

        // U values to interpolate between
        var u1 = this.linear[tIndex][1];
        var u2 = u1;

        // Get T values
        var t1 = this.linear[tIndex][2];
        var t2 = t1;

        // If in bounds, grab second segment
        if ((tIndex + 1) < (this.linear.length)) {
            var segment2Index = this.linear[(tIndex + 1)][0];
            var u2 = this.linear[(tIndex + 1)][1];
            var t2 = this.linear[(tIndex + 1)][2];
        }

        // Segment index and U value
        var segmentIndex = segment1Index;
        var u = 0.0;

        // Interpolate

        // Same segment?
        if (segment1Index == segment2Index) {
            // Interpolate U value
            u = (d * (u2 - u1)) + u1;
        }
        else {

            // Difference in T
            var deltaT = t2 - t1;

            // Based on distance, how "far" are we along T?
            var tDistance = d * deltaT;

            // How much segment 1 T?
            var segment1T = (this.segmentT[segment1Index] - t1);

            // Part of the first segment (before the anchor point)?
            if ((t1 + tDistance) < this.segmentT[segment1Index]) {

                // How far along?
                var p = (segment1T == 0 ? 0 : tDistance / segment1T);

                // Compute U
                u = ((1.0 - u1) * p) + u1;
            }
            else {
                // Beginning of second segment
                segmentIndex = segment2Index;

                // How much segment 2 T?
                var segment2T = (t2 - this.segmentT[segment1Index]);

                // How much T remains in this segment?
                var tRemaining = tDistance - segment1T;

                // How far along?
                var p = (segment2T == 0 ? 0 : tRemaining / segment2T);

                // Compute U
                u = p * u2;
            }
        }

        // Calculate bezier curve position
        this.x = bezier(u,
            this.points[segmentIndex][0][0],
            this.points[segmentIndex][1][0],
            this.points[segmentIndex][2][0],
            this.points[segmentIndex][3][0]);

        this.y = bezier(u,
            this.points[segmentIndex][0][1],
            this.points[segmentIndex][1][1],
            this.points[segmentIndex][2][1],
            this.points[segmentIndex][3][1]);

        // Determine follow orientation
        var qx = 0.0;
        var qy = 0.0;

        // At a 0.0 or 1.0 boundary?
        if (u == 0.0) {

            // Use control point
            qx = this.points[segmentIndex][1][0];
            qy = this.points[segmentIndex][1][1];

            this.orientation = followOrientation(this.x, this.y, qx, qy, clock.d);
        }
        else if (u == 1.0) {

            // Use control point
            qx = this.points[segmentIndex][1][0];
            qy = this.points[segmentIndex][1][1];

            this.orientation = followOrientation(qx, qy, this.x, this.y, clock.d);
        }
        else {

            // Calculate quadratic curve position
            qx = quadratic(u,
                this.points[segmentIndex][0][0],
                this.points[segmentIndex][1][0],
                this.points[segmentIndex][2][0]);

            qy = quadratic(u,
                this.points[segmentIndex][0][1],
                this.points[segmentIndex][1][1],
                this.points[segmentIndex][2][1]);

            this.orientation = followOrientation(qx, qy, this.x, this.y, clock.d);
        }

        // Remember this clock value
        this.lastValue = t;
    }

    // Update clock
    clock.update();
}

// Returns follow orientation
function followOrientation(x1, y1, x2, y2, direction) {

    // Forward?
    if (direction == 1) {

        return slope(x1, y1, x2, y2);
    }
    else {

        return slope(x2, y2, x1, y1);
    }
}

// Returns a position along a cubic Bezier curve
function bezier(u, p0, p1, p2, p3) {

    return Math.pow(u, 3) * (p3 + 3 * (p1 - p2) - p0)
        + 3 * Math.pow(u, 2) * (p0 - 2 * p1 + p2)
        + 3 * u * (p1 - p0) + p0;
}

// Returns a position along a quadratic curve
function quadratic(u, p0, p1, p2) {

    u = Math.max(Math.min(1.0, u), 0.0);

    return Math.pow((1.0 - u), 2) * p0 +
        2 * u * (1.0 - u) * p1 +
        u * u * p2;
}

// Returns the slope between two points
function slope(x1, y1, x2, y2) {

    var dx = (x2 - x1);
    var dy = (y2 - y1);

    return Math.atan2(dy, dx);
}
{
function linear(t) {
    return t;
}

function sineEaseIn(t) {
    return -Math.cos(t * (Math.PI / 2)) + 1;
}

function sineEaseOut(t) {
    return Math.sin(t * (Math.PI / 2));
}

function sineEaseInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}

function quintEaseIn(t) {
    return t * t * t * t * t;
}

function quintEaseOut(t) {
    t--;
    return t * t * t * t * t + 1;
}

function quintEaseInOut(t) {
    t /= 0.5;
    if (t < 1) {
        return 0.5 * t * t * t * t * t;
    }
    t -= 2;
    return 0.5 * (t * t * t * t * t + 2);
}

function quartEaseIn(t) {
    return t * t * t * t;
}

function quartEaseOut(t) {
    t--;
    return -(t * t * t * t - 1);
}

function quartEaseInOut(t) {
    t /= 0.5;
    if (t < 1) {
        return 0.5 * t * t * t * t;
    }
    t -= 2;
    return -0.5 * (t * t * t * t - 2);
}

function circEaseIn(t) {
    return -(Math.sqrt(1 - (t * t)) - 1);
}

function circEaseOut(t) {
    t--;
    return Math.sqrt(1 - (t * t));
}

function circEaseInOut(t) {
    t /= 0.5;
    if (t < 1) {
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
    }
    t -= 2;
    return 0.5 * (Math.sqrt(1 - t * t) + 1);
}

function quadEaseIn(t) {
    return t * t;
}

function quadEaseOut(t) {
    return -1.0 * t * (t - 2.0);
}

function quadEaseInOut(t) {
    t /= 0.5;
    if (t < 1.0) {
        return 0.5 * t * t;
    }
    t--;
    return -0.5 * (t * (t - 2.0) - 1);
}

function cubicEaseIn(t) {
    return t * t * t;
}

function cubicEaseOut(t) {
    t--;
    return t * t * t + 1;
}

function cubicEaseInOut(t) {
    t /= 0.5;
    if (t < 1) {
        return 0.5 * t * t * t;
    }
    t -= 2;
    return 0.5 * (t * t * t + 2);
}

function bounceEaseOut(t) {
    if (t < (1.0 / 2.75)) {
        return (7.5625 * t * t);
    } else if (t < (2 / 2.75)) {
        t -= (1.5 / 2.75);
        return (7.5625 * t * t + 0.75);
    } else if (t < (2.5 / 2.75)) {
        t -= (2.25 / 2.75);
        return (7.5625 * t * t + 0.9375);
    } else {
        t -= (2.625 / 2.75);
        return (7.5625 * t * t + 0.984375);
    }
}

function bounceEaseIn(t) {
    return 1.0 - bounceEaseOut(1.0 - t);
}

function bounceEaseInOut(t) {
    if (t < 0.5) {
        return bounceEaseIn(t * 2.0) * 0.5;
    } else {
        return bounceEaseOut(t * 2.0 - 1.0) * 0.5 + 0.5;
    }
}

function expoEaseIn(t) {
    return (t == 0.0) ? 0.0 : Math.pow(2.0, 10.0 * (t - 1));
}

function expoEaseOut(t) {
    return (t == 1.0) ? 1.0 : -Math.pow(2.0, -10.0 * t) + 1.0;
}

function expoEaseInOut(t) {
    if (t == 0) {
        return 0.0;
    } else if (t == 1.0) {
        return 1.0;
    } else if ((t / 0.5) < 1.0) {
        t /= 0.5;
        return 0.5 * Math.pow(2.0, 10.0 * (t - 1));
    } else {
        t /= 0.5;
        return 0.5 * (-Math.pow(2.0, -10.0 * (t - 1)) + 2);
    }
}

// Other timing functions

function zeroStep(t) {
    return (t <= 0.0 ? 0.0 : 1.0);

}

function halfStep(t) {
    return (t < 0.5 ? 0.0 : 1.0);

}

function oneStep(t) {
    return (t >= 1.0 ? 1.0 : 0.0);
}

function random(t) {
    return Math.random();
}

function randomLimit(t) {
    return Math.random() * t;
}

function clockTick(t) {
    var steps = 60.0;
    return Math.floor(t * steps) / steps;
}
}

function Vector(x, y)  {
    this.x = x;
    this.y = y;
    return this;
};
Vector.prototype = {
    getMagnitude: function () {
        return Math.sqrt(Math.pow(this.x,
            2) +
            Math.pow(this.y, 2));
    },
    add: function (vector) {
        var v = new Vector();
        v.x = this.x + vector.x;
        v.y = this.y + vector.y;
        return v;
    },
    subtract: function (vector) {
        var v = new Vector();
        v.x = this.x - vector.x;
        v.y = this.y - vector.y;
        return v;
    },
    dotProduct: function (vector) {
        return this.x * vector.x +
            this.y * vector.y;
    },
    edge: function (vector) { return
        this.subtract(vector);
    },
    perpendicular: function () {
        var v = new Vector();
        v.x = this.y;
        v.y = 0-this.x;
        return v;},
    normalize: function () {
        var v = new Vector(0, 0),
            m = this.getMagnitude();
        if (m != 0) {
            v.x = this.x / m;
            v.y = this.y / m;
        }
        return v;
    },
    normal: function () {
        var p = this.perpendicular();
        return p.normalize();
    }
};
function Projection(min, max) {
    this.min = min;
    this.max = max;
    this.overlaps=function(projection) {
        return this.max > projection.min && projection.max > this.min;
    };
    return this;
};
