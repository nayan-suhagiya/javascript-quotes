$(document).ready(function () {
  $("#toggleNav").click(() => {
    $("#navbarNav").slideToggle();
  });
});

let finalData;
let text1;
let text2;
let getQuoteButton = document.getElementById("getQuoteButton");
let shareWhatsapp = document.getElementById("shareWhatsapp");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let loader = document.getElementById("loader");

const getQuotes = async () => {
  const url = `https://type.fit/api/quotes`;

  try {
    loader.innerHTML = "Loading...";
    const data = await fetch(url);
    const readableData = await data.json();

    return readableData;
  } catch (err) {}
};

const getSingleQuote = async () => {
  const randomQuoteIndex = Math.floor(Math.random() * 16);
  // console.log(finalData);
  //   console.log(finalData);
  let singleQuote = finalData[randomQuoteIndex];
  //   console.log(singleQuote);
  text1 = singleQuote.text;
  text2 = singleQuote.author;
  quote.innerText = '"' + singleQuote.text + '"';
  singleQuote.author !== null
    ? (author.innerText = "By. " + singleQuote.author)
    : (author.innerText = "By. " + "Unknown");

  return singleQuote;
};

const getRandomQuote = async () => {
  const url = "https://dummyjson.com/quotes/random";

  try {
    loader.innerHTML = "Loading...";
    const data = await fetch(url);
    const readableData = await data.json();

    return readableData;
  } catch (error) {}
};

function share() {
  // console.log(text1);
  window.open(`whatsapp://send?text=${text1}-${text2}`);
}

getQuoteButton.addEventListener("click", function () {
  handleRandomQuoteUpdate();
});

// getQuotes()
//   .then((res) => {
//     finalData = res;
//     loader.innerHTML = "";
//     getSingleQuote();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function handleRandomQuoteUpdate() {
  getRandomQuote()
    .then((res) => {
      loader.innerHTML = "";
      text1 = res.quote;
      text2 = res.author;
      quote.innerText = '"' + res.quote + '"';
      res.author !== null
        ? (author.innerText = "By. " + res.author)
        : (author.innerText = "By. " + "Unknown");
    })
    .catch((err) => {
      console.log(err);
    });
}

handleRandomQuoteUpdate();
