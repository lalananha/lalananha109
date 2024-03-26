const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const coáaaBtn = document.querySelector(".coáaa-btn");
const khumBtn = document.querySelector(".khum-btn");

khumBtn.addEventListener("click", () => {
  question.innerHTML = "tàn ác";
  gif.src =
    "https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif";
});

coáaaBtn.addEventListener("mouseover", () => {
  const coáaaBtnRect = coáaaBtn.getBoundingClientRect();
  const maxX = window.innerWidth - coáaaBtnRect.width;
  const maxY = window.innerHeight - coáaaBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  coáaaBtn.style.left = randomX + "px";
  coáaaBtn.style.top = randomY + "px";
});