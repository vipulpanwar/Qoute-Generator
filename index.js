var quotes = [
    {
        quote: "The true ENTREPRENEUR is a risk taker, not an excuse maker.",
        author:"VDEXTERS"
    }, 
    {
        quote: "Website without visitors is like a ship lost in the horizon.",
        author: "Dr. Christopher Dayagdag"
    }, 
    {
        quote: "Code is read more than it is written.",
        author: "Daniel Roy Greenfeld"
    },
    {
        quote: "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
        author: "Milton Glaser"
    },
    {
        quote: "Make things as simple as possible, but not simpler.",
        author: "Albert Einstein"
    },
    {
        quote:"Responsive Web Design always plays important role whenever going to promote your website.",
        author: "Josh Wilson"
    }
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length );
    var quote = document.getElementById('quote');
    var author = document.getElementById('author')
    quote.innerHTML = quotes[randomNumber].quote;
    author.innerHTML = "By. " + quotes[randomNumber].author;

    quote.style.padding = "10px";
    author.style.padding = "10px";

}