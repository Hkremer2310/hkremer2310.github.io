# CodeLou_FrontEnd

## Description
```
I created a simple random coding/programming quote generator using random number generator JavaScript.    

```



## Custom CSS Classes
```
The class(es) I created are:

1. .header.  It creates the background color, padding, width and text alignment of the header.

2. .topnav.  It sets the background color of the navigation bar.

3. .topnav a. It places the navigation links to the left, sets the color and padding, and centers the text.

4.  .topnav a:hover.  Changes the color when you hover over the navigation links.  

5. .profile.  Sets the border, border-radius, display, margin-left and margin-right of the profile photo.

6.  .author.  Sets the text color, display, width, text-alignment and margin of the span class in the quotes with authors on the JavaScript page.  It separates the authors name from the quote they said.

7.  .button.  Sets the display, padding, font-size, font color, background color, and sets the box-shadow, as well turns the cursor to a pointer of the button title New Quote.

8.  .button:hover.  Changes color when you hover over the New Quote button.  

9.  .button:active. Changes the button color when you click the New Quote button.

10.  .footer.  Sets the fixed position, width and height, padding, background color, text alignment and font size of the footer.  

```  
The ID I created is:

1. #quoteDisplay.  It sets the background color, width, min-height, border, border-radius, padding, margin and text color of the quotes to display on the index.html, as well as the About and Contact pages.

```
Media Query created:

1. @media sets the breaking point at 500px and makes the columns stack on top of each other when viewed on mobile devices.  

```

## Custom JavaScript Functions
```
The javascript function I created is:

1. function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
... it computes a random number which pulls a quote to display in the quoteDisplay class on the index page.  

```
