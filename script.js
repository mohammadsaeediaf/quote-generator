const button = document.querySelector(".generate-btn");

button.addEventListener("click", addquotes);
soundBtn.addEventListener("click", sound);

function addquotes() {
  btn.innerHTML = "Loading Quote...";
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let counter = Math.floor(Math.random(1) * 16);
      const text = data[counter].text;
      const author = data[counter].author;
      document.querySelector(".quote").innerHTML = text;
      document.querySelector(".author").innerHTML = author;
      btn.innerHTML = "New Quote";
    });
}
function sound() {
  let soundOn = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${author.innerHTML}`
  );
  speechSynthesis.speak(soundOn);
}
