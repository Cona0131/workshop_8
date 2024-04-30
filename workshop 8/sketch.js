let ip;
let ip_api = 'https://api.ipify.org?format=json';
let intro, punchline;
let joke_api = 'https://v2.jokeapi.dev/joke/Any';
let name, category;
let emojis_api = 'https://emojihub.yurace.pro/api/random'

async function getIP(){
  let data = await fetch(ip_api);
  let j_data = await data.json();
  ip = j_data.ip;
}

async function getJoke(){
  let data = await fetch(joke_api);
  let j_data = await data.json();
  intro = j_data.setup;
  punchline = j_data.delivery;
}
async function getEmojis(){
  let data = await fetch(emojis_api);
  let j_data = await data.json();
  name = j_data.name;
  category = j_data.category;
}


function setup() {
  createCanvas(400, 400);
  getIP();
  getEmojis();
  setInterval(getJoke, 3000);
  setInterval(getEmojis, 2000);
}

function draw() {
  background(220);
  text(ip, 20, 100);
  text(intro, 20, 200);
  text(punchline, 20, 220);
  text(name, 200, 150);
  text(category, 200, 120);

  if(category == 0){
    fill(0);
  } else {
    fill(25, 30, 20);
  }
  ellipse(300, 50, 40, 40);
}
