import "./style.scss";
import { quoteView, tweetBtnView, newQuoteBtnView, loaderView } from "./js/view.js";
import * as model from "./js/model.js";
document.querySelector("#app");
/////////////////////////////////////////////////////////////////

const controlLoadQuotes = async function () {
   try {
      // Commands the view to hide the quote-container
      quoteView.hideParent();
      // Commands the view to display the loading spinner
      loaderView.revealParent();
      // Commands the model to retrieve a quote from the API
      await model.getQuote();
      // Commands the view to hide the loading spinner
      loaderView.hideParent();
      // Commands the view to show the quote-container
      quoteView.revealParent();
      // Commands the view to render a quote
      quoteView.render(model.state.quotes);
   } catch (err) {
      console.error(err);
   }
};

const controlTweetQuote = function () {
   // Commands the view to open a blank new page and tweet the quote
   tweetBtnView.tweetQuote(model.state.quotes);
};

const controlNewQuote = function () {
   // Commands the view to generate a new quote;
   controlLoadQuotes();
};

// Initalize on page load
const init = function () {
   controlLoadQuotes();
   tweetBtnView.addHandlerTwitter(controlTweetQuote);
   newQuoteBtnView.addHanderlNewQuote(controlNewQuote);
};
init();
