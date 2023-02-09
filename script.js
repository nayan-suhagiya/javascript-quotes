$(document).ready(function () {
   $('#toggleNav').click(() => {
      $('#navbarNav').slideToggle();
   });
});

let finalData;
let text1;
let text2;
let getQuoteButton = document.getElementById('getQuoteButton');
let shareWhatsapp = document.getElementById('shareWhatsapp');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let loader = document.getElementById('loader');

const getQuotes = async () => {
   const url = `https://type.fit/api/quotes`;

   try {
      loader.innerHTML = 'Loading...';
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
   text2 = singleQuote.author;
   quote.innerText = '"' + singleQuote.text + '"';
   singleQuote.author !== null
      ? (author.innerText = 'By. ' + singleQuote.author)
      : (author.innerText = 'By. ' + 'Unknown');

   return singleQuote;
};

function share() {
   // console.log(text1);
   window.open(`whatsapp://send?text=${text1}-${text2}`);
}

getQuoteButton.addEventListener('click', function () {
   getSingleQuote();
});

getQuotes()
   .then((res) => {
      finalData = res;
      loader.innerHTML = '';
      getSingleQuote();
   })
   .catch((err) => {
      console.log(err);
   });
