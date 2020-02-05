### https://jboyle1.github.io/test-stopwatch/

## Name of Project: Test Stopwatch

This project was a technical test for an interview. It was a front end task focusing on HTML, javascript and CSS. The task was to create a stopwatch using HTML and vanilla Javascript.

I initially created ID elements in the HTML that I could target in the Javascript inside variables using the browser object model (BOM) ‘document.’ and the getElementByID method. Then create a function that has an ‘if’ statement that iterates through milliseconds, seconds, minutes and hours. 

After I had this in place I needed to outsource for some help. I used www.stackoverflow.com to get some advice and what I had was pretty close. I was advised to add ternary operators to the function. Using h1.textContent property to target HTML h1 tag contents.

I then created an onclick event handler for the start button called ‘start’ that invokes a function called timer() which then sets the t variable to setTimeout(add, 10). This starts the add() function.

Then another onclick event handler for the stop button which invokes an anonymous function that uses the clearTimeout() method that clears a timer set with the setTimeout() method.

Lastly one last onclick event handler for the clear button which invokes an anonymous function that resets the h1.textContent to ‘0’ also sets all the variables back to zero.

I styled the stopwatch program using vanilla css (no framework). I simply used HTML tags to center the DRO and buttons and used a linear gradient for the background colour. I used a hover pseudo class to add a hover effect to the buttons when the mouse hovers over it.  

Although I needed some help to get this script to operate I feel that I learned along the way and feel that my Javascript skills increased. I needed to aim to spendapproximately 2 hours on this task. It took about three hours including a bit of planning out.



