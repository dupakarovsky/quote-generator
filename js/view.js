class View {
   _data;
   _parent;
   hideParent() {
      this._parent.hidden = true;
   }
   revealParent() {
      this._parent.hidden = false;
   }
}
const view = new View();

class LoaderView extends View {
   _parent = document.querySelector("#loader");
}
export const loaderView = new LoaderView();

class QuoteView extends View {
   _parent = document.querySelector("#quote-container");
   // Render quote and author to HTML
   render(quoteObj) {
      this._data = quoteObj;
      this._checkQuoteLength();
      this._insertInnerText();
   }
   // Adds the long-quote class if necessary.
   _checkQuoteLength() {
      if (this._data.text.length > 85) {
         this._parent.querySelector(".quote-text").classList.add("long-quote");
      }
   }
   // Insert the text and quote author into their SPAN elements
   _insertInnerText() {
      let { author, text } = this._data;
      this._parent.querySelector("#quote").innerText = text;
      if (!author) author = "Unknown";
      this._parent.querySelector("#author").innerText = author;
   }
}
export const quoteView = new QuoteView();

class TweetBtnView extends View {
   _parent = document.querySelector("#twitter");

   // attach click event listener to parent
   addHandlerTwitter(handlerFunction) {
      this._parent.addEventListener("click", handlerFunction);
   }

   // Open Twiter
   tweetQuote(quoteObj) {
      this._data = quoteObj;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${this._data.text} - ${this._data.author}`;
      window.open(twitterUrl, "_blank");
   }
}
export const tweetBtnView = new TweetBtnView();

class NewQuoteBtnView extends View {
   _parent = document.querySelector("#new-quote");

   addHanderlNewQuote(handlerFunction) {
      this._parent.addEventListener("click", handlerFunction);
   }
}
export const newQuoteBtnView = new NewQuoteBtnView();
