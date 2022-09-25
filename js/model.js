import { AJAX, random } from "./helper.js";

// state object
export const state = {
   quotes: [],
};

// uses the AJAX helper function to get a quote from API. Then populates the state.
export const getQuote = async function () {
   try {
      const allQuotes = await AJAX("https://type.fit/api/quotes");
      const index = random(allQuotes);
      state.quotes = allQuotes[index];
   } catch (err) {
      throw err;
   }
};
