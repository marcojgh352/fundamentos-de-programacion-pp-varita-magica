//1
const links = document.querySelectorAll("a");

for (const neg of links) {
  neg.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("¡NO! ¡NO! ¡NO!");
    neg.innerText = "¡NO! ¡NO! ¡NO!";
    neg.style.color = getRandom(coloresRandom);
  });
}
//2.1
const img = document.querySelectorAll("img");

for (const change of img) {
  change.addEventListener("click", () => {
    change.src = getRandom(gifRandom);
  });
}
//2.2
const parr = document.getElementsByTagName("p");
for (const color of parr) {
  color.addEventListener("click", () => {
    color.style.backgroundColor = getRandom(coloresRandom);
    color.style.color = getRandom(coloresRandom);
  });
}
//2.3
const art = document.getElementsByTagName("article");
for (const color of art) {
  color.addEventListener("click", () => {
    color.style.backgroundColor = getRandom(coloresRandom);
  });
}
const sect = document.getElementsByTagName("section");
for (const color of sect) {
  color.addEventListener("click", () => {
    color.style.backgroundColor = getRandom(coloresRandom);
  });
}

//3.1

const imghov = document.querySelectorAll("img");
for (let i = 0; i < imghov.length; i++) {
  let original = imghov[i].src;

  imghov[i].addEventListener("mouseover", () => {
    imghov[i].src = getRandom(gifRandom);
  });

  imghov[i].addEventListener("mouseout", () => {
    imghov[i].src = original;
  });
}

//3.2

const parrhov = document.querySelectorAll("p");
for (const parrcol of parrhov) {
  parrcol.addEventListener("mouseover", () => {
    parrcol.style.backgroundColor = getRandom(coloresRandom);
    parrcol.style.color = getRandom(coloresRandom);
  });
  parrcol.addEventListener("mouseout", () => {
    parrcol.style.backgroundColor = "";
    parrcol.style.color = "";
  });
}

//3.3

const arr = document.getElementsByTagName("article");
for (const arrcol of arr) {
  arrcol.addEventListener("mouseover", () => {
    arrcol.style.backgroundColor = getRandom(coloresRandom);
  });
  arrcol.addEventListener("mouseout", () => {
    arrcol.style.backgroundColor = "";
  });
}

const seect = document.getElementsByTagName("section");
for (const scol of seect) {
  scol.addEventListener("mouseover", () => {
    scol.style.backgroundColor = getRandom(coloresRandom);
  });
  scol.addEventListener("mouseout", () => {
    scol.style.backgroundColor = "";
  });
}

//4
const coloresRandom = [
  "#669bbcff",
  "#003049ff",
  "#fdf0d5ff",
  "#c1121fff",
  "#780000ff",
];

function getRandom(array) {
  let numAleatorio = Math.floor(Math.random() * array.length);
  return array[numAleatorio];
}

// 5 Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.
// LISTO

// 6 Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.

const gifRandom = [
  "./assets/abracadabra.gif",
  "./assets/magic-1.gif",
  "./assets/magic-2.gif",
  "./assets/magic-3.gif",
  "/assets/magic-4.gif",
  "./assets/magic-5.gif",
  "./assets/magic-6.gif",
];
