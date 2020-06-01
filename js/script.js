/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * Array of quotes objects with quote, source, citation, year properties
 */
var quotesArr = [
  {
    quote: 'Like I told my last wife, I says, Honey, I never drive faster than I can see. Besides that, it’s all in the reflexes.',
    source: 'Jack Burton',
    citation: 'Big Trouble in Little China',
    year: 1986
  },
  {
    quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
    source: 'Winston Churchill',
  },
  {
    quote: 'Courage is grace under pressure.',
    source: 'Ernest Hemingway',
    year: 1929
  },
  {
    quote: 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.',
    source: 'Albert Einstein',
  },
  {
    quote: 'It does not matter how slowly you go, so long as you do not stop.',
    source: 'Confucius',
  },
  {
    quote: 'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.',
    source: 'Charles Darwin',
  }
]

/**
 * Returns a random quote.
 * @param {number} arr - Array of quote objects.
 * @return {number} A random quote object.
 */
function getRandomQuote(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}


/***
 * Prints random quote with all properties
***/
function printQuote() {
  var randomQuote = getRandomQuote(quotesArr);
  var quote = '<p class="quote">' + randomQuote.quote + '</p>';
  quote += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation) {
    quote += '<span class="citation">'  + randomQuote.citation + '</span>';
  }

  if (randomQuote.year) {
    quote += '<span class="citaiton">, ' + randomQuote.year + '</span>';
  }
  quote += '</p>';

  document.getElementById('quote-box').innerHTML = quote;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);