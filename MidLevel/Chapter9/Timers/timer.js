/* Timers:
    * 1. setTimeout --> executes a function, once, after waiting a specified number of milliseconds
    * 2. setInterval --> same as setTimeout, but repeats the execution of the function continuously
    * 3. clearTimeout --> cancels a timeout function
    * 4. clearInterval --> cancels an interval function
    * 5. setImmediate --> executes a function on the next cycle of the event loop
    * 6. clearImmediate --> cancels an immediate function
    * 7. process.nextTick --> executes a callback function immediately after the current event loop ends
    * 8. unref --> unref a timer
    * 9. ref --> ref a timer
*/

// setTimeout
setTimeout(function () {
    console.log('timeout completed');
}, 4000);

// setInterval
var count = 0;
var interval = setInterval(function () {
    count++;
    console.log(`interval completed ${count}`);
    if (count == 3) {
        clearInterval(interval);
    }
}, 2000);

// clearTimeout
var timeout2 = setTimeout(function () {
    console.log('timeout completed timeout 2');
}, 4000);
clearTimeout(timeout2);