const quotes = {
  "-Steve Jobs":
    "I believe life is an intelligent thing: that things aren't random.",
  "-Mihaly Csikszentmihalyi": "Goals transform a random walk into a chase.",
  "-Albert Camus":
    "It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.",
  "-Sam Harris":
    "Human well-being is not a random phenomenon. It depends on many factors - ranging from genetics and neurobiology to sociology and economics. But, clearly, there are scientific truths to be known about how we can flourish in this world. Wherever we can have an impact on the well-being of others, questions of morality apply.",
};

const authors = Object.keys(quotes);
const length = authors[Math.floor(Math.random() * authors.length)];
const quote = quotes[length];

document.querySelector(".quote").innerHTML = quote;
