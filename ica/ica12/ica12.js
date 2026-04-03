const nqButton = document.querySelector("#js-new-quote");
const atButton = document.querySelector("#js-tweet");
const quote1 = document.getElementById("js-quote-text");
const answer1 = document.getElementById("js-answer-text");
const APIend = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
let answer = "";
nqButton.addEventListener("click", getQuote);
atButton.addEventListener("click", getAnswer);
function displayQuote(data) {
    console.log(data);
    console.log(data.question);
    quote1.textContent = data.question;
}
async function getQuote() {
  try {
    const response = await fetch(APIend);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    displayQuote(data);
    answer = data.answer;
    answer1.textContent = "";
  } catch (error) {
    console.error('Fetch error:', error);
    window.alert('Fetch error:' + error);
  }
}


async function getAnswer() {
    answer1.textContent = answer;
}
