/* Wrote out variables to target HTML elements by ID using the document browser object model and getElementById() method (using getElementsById to be unambiguous). Variables include: h1, Start, stop, clear. I also added variables for add() function, these include milli, seconds, minutes and hours. */

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    milli = 0, seconds = 0, minutes = 0, hours = 0,
    t;

/* Created add() function with if statement to Iterate and elapse time in milliseconds, seconds , minutes and hours. */

function add() { 
    milli += 10;
    if (milli >= 1000) {
        milli = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }  
        /* Needed to outsource for assistence at this piont */
    }
    /* After I had this in place I needed to outsource for some help. I used www.stackoverflow.com to get some advice. What I had was pretty close. I was advised to add ternary operators to the function. Using h1.textContent property to target HTML h1 tag contents. */
   
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + "." + (milli > 90 ? milli : "0" + milli);

    timer();
}

/* I then created an onclick event handler for the start button called ‘start’ that invokes a function called timer() which then sets the t variable to setTimeout(add, 10). This starts the add() function. Again I needed a bit of help to figure this out. */

function timer() {
    t = setTimeout(add, 10);
}
    
/* Start button */
start.onclick = timer;

/* Then another onclick event handler for the stop button which invokes an anonymous function that uses the clearTimeout() method that clears a timer set with the setTimeout() method. */

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}



