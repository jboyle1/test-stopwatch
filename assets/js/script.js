var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    milli = 0, seconds = 0, minutes = 0, hours = 0,
    t;

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
            }  /* Needed to outsource for assistence at this piont */
        }
    }

