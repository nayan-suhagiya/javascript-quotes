let finalData;
let text1;
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
   text1 = singleQuote.text;
   quote.innerText = singleQuote.text;
   singleQuote.author !== null
      ? (author.innerText = singleQuote.author)
      : (author.innerText = 'Unknown');

   return singleQuote;
};

function share() {
   console.log(text1);
   window.open(`whatsapp://send?text=${text1}`);
}

getQuoteButton.addEventListener('click', function () {
   getSingleQuote();
});

getQuotes()
   .then((res) => {
      finalData = res;
      getSingleQuote();
   })
   .catch((err) => {
      console.log(err);
   });
