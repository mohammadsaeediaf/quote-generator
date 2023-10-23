const button = document.querySelector(".generate-btn");

button.addEventListener("click", addquotes);

function addquotes() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[Math.floor(Math.random(0) * 6)].text);
      console.log();
      const text = document.querySelector(".quote");
      text.innerHTML = data[Math.floor(Math.random(0) * 6)].text;
      const author = document.querySelector(".author");
      author.innerHTML = data[Math.floor(Math.random(0) * 6)].author.replace(
        ", type.fit",
        " "
      );
    });
}
