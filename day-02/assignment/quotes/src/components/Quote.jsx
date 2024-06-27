import { useState } from 'react'
import quotes from '../quotes.js'

const Quote = () => {

  const [quote, setQuote] = useState(null);
  const [previousQuoteIndex, setPreviousQuoteIndex] = useState(null);
  const [buttonText, setButtonText] = useState('Get Quote');

  const getNewQuoteIndex = () => {
    let index = Math.floor(Math.random() * quotes.length);
    // console.log({previousQuoteIndex})
    // console.log({index})

    // if the new quote index is the same as the previous quote index,
    // get a new quote index
    if (index === previousQuoteIndex) {
      return getNewQuoteIndex();
    }

    return index;
  }

  const getRandomQuote = () => {
    // get a random quote from the quotes array
    // by generating a random index
    let newQuoteIndex = getNewQuoteIndex();
    const randomQuote = quotes[newQuoteIndex];

    // update the state values
    setQuote(randomQuote);
    setPreviousQuoteIndex(newQuoteIndex);
    setButtonText('Get Another Quote');
  }

  return (
    <div>
      {/*
        when the button is clicked, the initial paragrap
        should be removed
      */}
      {!quote && <p>Click the button to get a quote.</p>}
      <button onClick={getRandomQuote}>{buttonText}</button>

      {quote && (
        <blockquote>
          <p>{quote.quote}</p>
          <footer>{quote.author}</footer>
        </blockquote>
      )}

      <div id="quote"></div>
    </div>
  )
}

export default Quote
