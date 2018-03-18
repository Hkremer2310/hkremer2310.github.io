var quotes = [

  // Quotes with authors

        "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning. <span class='author'>	-- Rick Cook </span>",

        "Lisp isn't a language, it's a building material. <span class='author'> -- Alan Kay </span>",

        "Walking on water and developing software from a specification are easy if both are frozen. <span class='author'> -- Edward V Berard </span'>",

        "A programming language is low level when its programs require attention to the irrelevant. <span class='author'> -- Alan J. Perlis </span>",

        "A C program is like a fast dance on a newly waxed dance floor by people carrying razors. <span class='author'> -- Waldi Ravens </span>",

        "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone. <span class='author'> -- Bjarne Stroustrup </span>",

        "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. <span class='author'> -- Eric S. Raymond </span>",

        "Don't worry if it doesn't work right. If everything did, you'd be out of a job. <span class='author'> -- Mosher's Law of Software Engineering </span>",

        "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like. <span class='author'> -- pixadel </span>",

        "The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense. <span class='author'> -- E.W. Dijkstra  </span>",

        "In the one and only true way. The object-oriented version of 'Spaghetti code' is, of course, 'Lasagna code'. (Too many layers). <span class='author'> -- Roberto Waltman </span>",

        "For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match. <span class='author'> -- Bill Bryson </span>",

        "In My Egotistical Opinion, most people's C programs should be indented six feet downward and covered with dirt. <span class='author'> -- Blair P. Houghton </span>",

        "The evolution of languages: FORTRAN is a non-typed language. C is a weakly typed language. Ada is a strongly typed language. C++ is a strongly hyped language. <span class='author'> -- Ron Sercely </span>",

        "Good design adds value faster than it adds cost. <span class='author'> -- Thomas C. Gale </span>",

        "Python's a drop-in replacement for BASIC in the sense that Optimus Prime is a drop-in replacement for a truck. <span class='author'> -- Cory Dodt </span>",

        "Talk is cheap. Show me the code. <span class='author'> -- Linus Torvalds </span>",

        "Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away. <span class='author'> -- Antoine de Saint-Exupery </span>",

        "C is quirky, flawed, and an enormous success. <span class='author'> -- Dennis M Ritchie </span>",

        "In theory, theory and practice are the same. In practice, they're not. <span class='author'> -- Yoggi Berra </span>",

        "You can't have great software without a great team, and most software teams behave like dysfunctional families. <span class='author'> -- Jim McCarthy </span>",

        "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals. <span class='author'> -- Jon Ribbens </span>",

        "Programming is like kicking yourself in the face, sooner or later your nose will bleed. <span class='author'> -- Kyle Woodbury </span>",

        "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. <span class='author'> -- Christopher Thompson </span>",

// quotes without authors

        "Some things Man was never meant to know. For everything else, there's Google.",

        "Failure is not an option -- it comes bundled with Windows.",

        "Computer games don't affect kids; I mean if Pac-Man affected us as kids, we'd all be running around in darkened rooms, munching magic pills and listening to repetitive electronic music.",

        "Artificial Intelligence usually beats natural stupidity.",

        "To err is human... to really foul up requires the root password.",

        "Like car accidents, most hardware problems are due to driver error.",

        "If at first you don't succeed; call it version 1.0",

        "Programmers are tools for converting caffeine into code.",

        "Why do we want intelligent terminals when there are so many stupid users?",

        "SUPERCOMPUTER: what it sounded like before you bought it.",

        "The more I C, the less I see.",

        "Life would be so much easier if we only had the source code.",

        "I'm not anti-social; I'm just not user friendly",

        "Better to be a geek than an idiot.",

        "Difference between a virus and windows? Viruses rarely fail.",

        "Computer dating is fine, if you're a computer.",

        "Any fool can use a computer. Many do.",

        "Computer language design is just like a stroll in the park. Jurassic Park, that is."
]
// random number generator to pull quotes to quoteDisplay

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
