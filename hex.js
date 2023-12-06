const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorSpan = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let hashtag = "#";
  
  for(let i = 0; i < 6; i++) {
    hashtag += hex[getRandomNumber()];
  }

  colorSpan.textContent = hashtag;
  document.body.style.backgroundColor = hashtag;
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
}

