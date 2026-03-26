// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

let names = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let places = ["the soup kitchen", "Disneyland", "the White House"];

let acts = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"];

// Partial return random string function

function returnRandomStoryString() {
  let randomName = randomValueFromArray(names);
  let randomPlace = randomValueFromArray(places);
  let randomAct = randomValueFromArray(acts);

  let storyText = `It was 94 Fahrenheit outside, so ${randomName} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomAct}. Bob saw the whole thing, but was not surprised — ${randomName} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
    let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature = `${Math.round((94-32)* (5/9))} Celcius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  // placeholder text: "hat alakazam aaaaaaaaaaaaaaaaaaaa hat alakazam aaaaaaaaaaaaaaaaaaaahat alakazam aaaaaaaaaaaaaaaaaaaa";
  story.style.visibility = "visible";
}