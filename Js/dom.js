const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "../Assets/Things.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "../Assets/Fairy.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "../Assets/Divine.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "../Assets/Epic.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "../Assets/Job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]

let body = document.querySelector("body");
let aside = document.createElement("aside");
let imageright = document.createElement("img");
imageright.id = "derecha";
imageright.classList.add("controls");
imageright.alt = "derecha";
imageright.src = "../Assets/Derecha.png";
aside.appendChild(imageright);
let imageleft = document.createElement("img")
imageleft.id = "izquierda";
imageleft.classList.add("controls");
imageleft.alt = "izquierda";
imageleft.src = "../Assets/Izquierda.png";
aside.appendChild(imageleft);
body.appendChild(aside);


let main = document.createElement("main");
main.id = "main";
let seccion = document.createElement("section");
seccion.id = "section";
for (let i = 0; i < books.length; i++) {
    let article = document.createElement("article");
    let parrafo = document.createElement("p");
    let texto;
    let bloque = document.createElement("p");
    parrafo.textContent = `Title: ${books[i].title}`;
    parrafo.style.fontWeight = "bold";
    article.appendChild(parrafo);
    let aimg = document.createElement("a");
    aimg.href = `${books[i].link}`;
    aimg.target = "_blank";
    let image = document.createElement("img");
    image.src = `${books[i].imageLink}`
    image.alt = "book's image";
    image.classList.add("image");
    aimg.appendChild(image);
    article.appendChild(aimg);
    let span = document.createElement("span");
    span.style.fontWeight = "bold";
    span.textContent = `Author: `;
    bloque.appendChild(span);
    texto = document.createTextNode(`${books[i].author}`);
    bloque.appendChild(texto);
    article.appendChild(bloque);
    let span1 = document.createElement("span");
    span1.style.fontWeight = "bold"
    let bloque1 = document.createElement("p");
    span1.textContent = `Country: `;
    bloque1.appendChild(span1);
    texto = document.createTextNode(`${books[i].country}`);
    bloque1.appendChild(texto);
    article.appendChild(bloque1);
    let span2 = document.createElement("span");
    span2.style.fontWeight = "bold"
    let bloque2 = document.createElement("p");
    span2.textContent = `Language: `;
    bloque2.appendChild(span2);
    texto = document.createTextNode(`${books[i].language}`);
    bloque2.appendChild(texto);
    article.appendChild(bloque2);
    let span3 = document.createElement("span");
    span3.style.fontWeight = "bold"
    let bloque3 = document.createElement("p");
    span3.textContent = `Pages: `;
    bloque3.appendChild(span3);
    texto = document.createTextNode(`${books[i].pages}`);
    bloque3.appendChild(texto);
    article.appendChild(bloque3);
    let span4 = document.createElement("span");
    span4.style.fontWeight = "bold"
    let bloque4 = document.createElement("p");
    span4.textContent = `Year: `;
    bloque4.appendChild(span4);
    texto = document.createTextNode(`${books[i].year}`);
    bloque4.appendChild(texto);
    article.appendChild(bloque4);
    seccion.appendChild(article);
}
main.appendChild(seccion);
body.appendChild(main);

var elemento = 0;
let articles = document.querySelectorAll("article");
if (window.innerWidth < 750) {
  for (i = elemento; i < elemento +5; i++) {
    if (i == elemento && articles[i%5].classList.contains("hide")) {
      articles[i%5].classList.remove("hide");
    } else if (i > elemento && !articles[i%5].classList.contains("hide")){
      articles[i%5].classList.add("hide");
    } 
  }
} else if (window.innerWidth < 1200) {
  for (i = elemento; i < elemento +5; i++) {
    if (i <= elemento + 1 && articles[i%5].classList.contains("hide")) {
      articles[i%5].classList.remove("hide");
    } else if (i > elemento + 1 && !articles[i%5].classList.contains("hide")){
      articles[i%5].classList.add("hide");
    } 
  }
} else {
  for (i = elemento; i < elemento +5; i++) {
    if (i <= elemento + 2 && articles[i%5].classList.contains("hide")) {
      articles[i%5].classList.remove("hide");
    } else if (i > elemento + 2 && !articles[i%5].classList.contains("hide")){
      articles[i%5].classList.add("hide");
    } 
  }
}
function redimensionar() {
  if (window.innerWidth < 750) {
    for (i = elemento; i < elemento +5; i++) {
      if (i == elemento && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      } 
    }
  } else if (window.innerWidth < 1200) {
    for (i = elemento; i < elemento +5; i++) {
      if (i <= elemento + 1 && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento + 1 && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      } 
    }
  } else {
    for (i = elemento; i < elemento +5; i++) {
      if (i <= elemento + 2 && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento + 2 && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      } 
    }
  }
}
window.addEventListener("resize", redimensionar);

let derecha = document.getElementById("derecha");
derecha.addEventListener("click", function() {
  elemento = (elemento + 1) % 5;
  let contador = 0;
  if (window.innerWidth < 750) {
    for (i = elemento; i < elemento +5; i++) {
      if (i == elemento && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      }
      articles[i%5].style.order = `${contador}`;
      contador += 1;
    }
  } else if (window.innerWidth < 1200) {
    for (i = elemento; i < elemento +5; i++) {
      if (i <= elemento + 1 && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento + 1 && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      } 
      articles[i%5].style.order = `${contador}`;
      contador += 1;
    }
  } else {
    for (i = elemento; i < elemento +5; i++) {
      if (i <= elemento + 2 && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento + 2 && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      } 
      articles[i%5].style.order = `${contador}`;
      contador += 1;
    }
  }
});

let izquierda = document.getElementById("izquierda");
izquierda.addEventListener("click", function() {
  if (elemento == 0) { elemento = 4
  } else {elemento = (elemento - 1) % 5};
  let contador = 0;
  if (window.innerWidth < 750) {
    for (i = elemento; i < elemento +5; i++) {
      if (i == elemento && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      }
      articles[i%5].style.order = `${contador}`;
      contador += 1;
    }
  } else if (window.innerWidth < 1200) {
    for (i = elemento; i < elemento +5; i++) {
      if (i <= elemento + 1 && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento + 1 && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      } 
      articles[i%5].style.order = `${contador}`;
      contador += 1;
    }
  } else {
    for (i = elemento; i < elemento +5; i++) {
      if (i <= elemento + 2 && articles[i%5].classList.contains("hide")) {
        articles[i%5].classList.remove("hide");
      } else if (i > elemento + 2 && !articles[i%5].classList.contains("hide")){
        articles[i%5].classList.add("hide");
      } 
      articles[i%5].style.order = `${contador}`;
      contador += 1;
    }
  }
})