const colors = ["Green", "Red", "Yellow", "Orange", "Blue", "Black", "White", "Purple"];
const colorSpan = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  colorSpan.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}