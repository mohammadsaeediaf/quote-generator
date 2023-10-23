const button = document.querySelector(".generate-btn");

button.addEventListener("click", addquotes);

function addquotes() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {});
}
