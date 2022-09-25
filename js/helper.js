// timeout helper function
export const timeout = function (time) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         reject(new Error(`API took too long to responde. Timed out after ${time} seconds`));
      }, time * 1000);
   });
};

// Select a single element from an array
export const random = function (arr) {
   return Math.floor(Math.random() * arr.length);
};

// get quotes from api
export const AJAX = async function (url) {
   try {
      const fetchPromise = await fetch(url);
      const response = await Promise.race([fetchPromise, timeout(5000)]);
      const data = await response.json();
      if (!response.ok) throw new Error(`${data.message} ${data.status}`);
      return data;
   } catch (err) {
      throw err;
   }
};
