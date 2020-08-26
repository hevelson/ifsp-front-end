if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  });
}

const changePlayerLife = (player, operation, amount) => {
  let playerLifeInput = document.getElementById(`player-${player}-life`);
  const life = parseInt(playerLifeInput.value);
  switch (operation) {
    case "plus":
      playerLifeInput.value = life + amount;
      break;
    case "minus":
      playerLifeInput.value = life - amount;
      break;
    default:
      playerLifeInput.value = 20;
      break;
  }
}

const btnPlusLife = document.querySelectorAll('.update-life');

for (const button of btnPlusLife) {
  button.addEventListener('click', function(event) {
    const { player, operation } = button.dataset;
    changePlayerLife(player, operation, 1);
  });
}
