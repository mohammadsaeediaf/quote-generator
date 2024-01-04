const quoteBtn = document.querySelector(".generate-btn");
const soundBtn = document.querySelector(".fa-volume-up");
const copyBtn = document.querySelector(".fa-copy");
const twitterBtn = document.querySelector(".fa-twitter");
const btn = document.querySelector(".generate-btn");
const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");

//// add eventListener
quoteBtn.addEventListener("click", addquotes);
copyBtn.addEventListener("click", copy);
twitterBtn.addEventListener("click", twitte);

/////// functions

function addquotes() {
  btn.innerHTML = "Loading Quote...";
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let counter = Math.floor(Math.random(1) * 16);
      const text = data[counter].text;
      const authorName = data[counter].author;
      const author = authorName.replace(", type.fit", " ");
      document.querySelector(".quote").innerHTML = text;
      document.querySelector(".author").innerHTML = author;
      btn.innerHTML = "New Quote";
    });
}

function sound() {
  let soundOn = new SpeechSynthesisUtterance();
  soundOn.voice = speechSynthesis.getVoices()[4];
  soundOn.text = `${quoteText.innerHTML} by ${author.innerHTML}`;
  soundOn.volume = 0.5;
  speechSynthesis.speak(soundOn);
  console.log(soundOn);
}
soundBtn.addEventListener("click", sound);

function copy() {
  navigator.clipboard.writeText(quoteText.innerHTML);
}

function twitte() {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
  window.open(tweetUrl, "_blank");
}
