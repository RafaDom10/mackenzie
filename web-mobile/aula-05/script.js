const BASE_URL = 'https://superheroapi.com/api.php/581140836551388/'

window.onload = () => {
  getAndShowHero(getRandom(), 'card1', 'idName1');
  getAndShowHero(getRandom(), 'card2', 'idName2');
}

function callAPI(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(xhr.status, xhr.response);
    } else {
      alert('Problemas ao se conectar com sevidor')
    }
  }

  xhr.send();
}

function getRandom() {
  return Math.floor(Math.random() * 731) + 1;
}

function getAndShowHero(id, idSum, idName) {
  const url = `${BASE_URL}${id}`;

  callAPI(url, (status, data) => {
    const info = {
      name: data.name,
      intelligence: data.powerstats.intelligence,
      strength: data.powerstats.strength,
      speed: data.powerstats.speed,
      durability: data.powerstats.durability,
      power: data.powerstats.power,
      combat: data.powerstats.combat,
      image: data.image.url,
    };

    const powerStats = [];

    const obj = data.powerstats;

    for (var [key, value] of Object.entries(obj)) {
      powerStats.push(Number(value));
    }
    const sum = powerStats.reduce((acc, curr) => acc + curr, 0);

    document.getElementById("content").innerHTML +=
      "<article> <img src='" + info.image + "' />" +
      `<h1 id=${idName} >` + info.name + "</h1>" +
      "<p>Intelligence: <span style='width:" + info.intelligence + "%; background: #F9B32F'></span></p>" +
      "<p>Strength: <span style='width:" + info.strength + "%; background: #FF7C6C'></span></p>" +
      "<p>Speed: <span style='width:" + info.speed + "%; background: #22A7F0'></span></p>" +
      "<p>Durability: <span style='width:" + info.durability + "%; background: #3EDC81'></span></p>" +
      "<p>Power: <span style='width:" + info.power + "%; background: #AB69C6'></span></p>" +
      "<p>Combat: <span style='width:" + info.combat + "%; background: #9CAAB9'></span></p>" +
      `<input id=${idSum} value=${sum} style="display: none"/>` +
      "</article>";

    const card1 = document.querySelector('#card1').value;
    const idName1 = document.querySelector('#idName1').textContent;
    const card2 = document.querySelector('#card2').value;
    const idName2 = document.querySelector('#idName2').textContent;

    const result = document.querySelector('#winner');

    card1 > card2 ?
      (result.innerHTML += `<h1>O Vencedor é ${idName1}.</h1>` ) :
      (result.innerHTML += `<h1>O Vencedor é ${idName2}.</h1>` );

  });

}
