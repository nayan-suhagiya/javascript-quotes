let finalData;
let getQuoteButton = document.getElementById('getQuoteButton');
let shareWhatsapp = document.getElementById('shareWhatsapp');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

const getQuotes = async () => {
   const url = `https://type.fit/api/quotes`;

   try {
      const data = await fetch(url);
      const readableData = await data.json();

      return readableData;
   } catch (err) {}
};

const getSingleQuote = async () => {
   const randomQuoteIndex = Math.floor(Math.random() * 1643);
   // console.log(finalData);
   let singleQuote = finalData[randomQuoteIndex];
   quote.innerText = singleQuote.text;
   singleQuote.author !== null
      ? (author.innerText = singleQuote.author)
      : (author.innerText = 'Unknown');

   return singleQuote;
};

getQuoteButton.addEventListener('click', function () {
   getSingleQuote();
});

shareWhatsapp.addEventListener('click', function () {
   getSingleQuote()
      .then((res) => {
         let text = res.text;
         window.open(`whatsapp://send?text=${text}`);
      })
      .catch((err) => {
         console.log(err);
      });
});

getQuotes()
   .then((res) => {
      finalData = res;
      getSingleQuote();
   })
   .catch((err) => {
      console.log(err);
   });
