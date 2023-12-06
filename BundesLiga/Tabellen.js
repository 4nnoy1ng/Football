function loadTable() {
  fetch("https://api.openligadb.de/getbltable/öbl1/2023").then((res) =>
    res.json().then((result) => {
      insertTable(result);
    })
  );
}

function insertTable(data) {
  console.log("data", data);
  const element = document.getElementById("table");

  let output = "";
  data.forEach((team) => {
    output += `<div class="SecondHeader">
                <div class="VereinRB">${team.teamName}</div>
                <div class="GamesRB">${team.matches}</div>
                <div class="SiegRB">${team.won}</div>
                <div class="UnentschiedenRB">${team.draw}</div>
                <div class="NiederlageRB">${team.lost}</div>
                <div class="ToreRB">${team.goals}</div>
                <div class="PunkteRB">${team.points}</div>
              </div>`;
  });

  element.innerHTML = output;
}

const data = loadTable();
