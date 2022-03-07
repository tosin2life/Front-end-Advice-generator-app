const diceRoll = document.querySelector(".dice");
const adviceBox = document.querySelector(".advice-entry");
window.onload = newAdvice;

diceRoll.addEventListener("click", (e) => {
  e.preventDefault();
  newAdvice();
});

async function newAdvice() {
  const response = await axios.get("https://api.adviceslip.com/advice");
  info = await response.data.slip;
  genrateHTML(info);
  console.log(info);
}

function genrateHTML(advice) {
  let generatedHTML = `
<div class="advice-entry">
        <div class="title">
          <p>Advice <span class="id"> #${advice.id}</span></p>
        </div>
        <div class="text">
          <p>
           ${advice.advice}
          </p>
        </div>
      </div>
`;
  adviceBox.innerHTML = generatedHTML;
}
