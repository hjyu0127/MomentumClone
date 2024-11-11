const quotes = [
    {
        quote: "Frogs are also human",
        author: "ND"
    },
    {
        quote: "So it goes",
        author: "Kurt Vonnegut",
    },
    {
        quote: "A first sign of the beginning of understanding is the wish to die.",
        author: "Franz Kafka",
    },
    {
        quote: "I have the true felling of myself only when I am unbearably unhappy",
        author: "Franz Kafka",
    },
    {
        quote: "God cannot alter the past, though historians can",
        author: "Samuel Butler",
    },
    {
        quote: "Heaven in Hell's despair",
        author: "William Blake",
    },
    {
        quote: "Extinction is the rule. Survival is the exception",
        author: "Karl Sagan",
    },
    {
        quote: "We are always the same age inside",
        author: "Gerturde Stein",
    },
    {
        quote: "Ergo sum.",
        author: "Rene Descartes",
    },
    {
        quote: "All men are equal before fish",
        author: "Herbert Hoover",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;