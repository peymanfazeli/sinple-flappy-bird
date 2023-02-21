var pillar = document.getElementById("pillar");
var scape = document.getElementById("scape");
var character = document.getElementById("character");
var scoreText = document.querySelector("#scoreText");
var jumping = 0;
var counter = 0;

scape.addEventListener("animationiteration", () => {
  var random = -(Math.random() * 300 + 150);
  scape.style.top = random + "px";
  scoreText.innerHTML = counter;
  counter++;
});
setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping == 0) {
    character.style.top = characterTop + 3 + "px";
  }
  var pillarLeft = parseInt(
    window.getComputedStyle(pillar).getPropertyValue("left")
  );
  var scapeTop = parseInt(
    window.getComputedStyle(scape).getPropertyValue("top")
  );
  var cTop = -(500 - characterTop);
  if (
    characterTop > 480 ||
    (pillarLeft < 20 &&
      pillarLeft > -50 &&
      (cTop < scapeTop || cTop > scapeTop + 130))
  ) {
    alert(`Game over. Score: ${counter - 1}`);
    scoreText.innerHTML = "";
    character.style.top = 100 + "px";
    counter = 0;
  }
}, 10);

function jump() {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function () {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
