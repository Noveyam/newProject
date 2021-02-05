var quote = [
    "I hope you have a good day at work.",
    "What day is it?",
    "Did you get your 10,000 steps in today?",
    "Mental health day"
]


function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quote.length));
}

console.log(newQuote);