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
    let aside = `<img src="../Assets/Derecha.png" alt="Derecha" id="derecha" class="controls">
                 <img src="../Assets/Izquierda.png" alt="Izquierda" id="izquierda" class="controls">`
    let contenedor = document.createElement("aside");
    contenedor.innerHTML = aside;
    body.appendChild(contenedor);
    contenedor = document.createElement("main");
    let section = `<section>`;
    for (let i = 0; i < books.length; i++) {
        section += `
                    <article>
                      <p><b>Title: ${books[i].title}</b></p>
                      <a href= ${books[i].link} target="_blank"><img src= ${books[i].imageLink} alt="book's image"></a>
                      <p><b>Author:</b> ${books[i].author}</p>
                      <p><b>Country:</b> ${books[i].country}</p>
                      <p><b>Language:</b> ${books[i].language}</p>
                      <p><b>Pages:</b> ${books[i].pages}</p>
                      <p><b>Year:</b> ${books[i].year}</p>
                      </article>`;   
    } 
    section += `
                </section>`;
    contenedor.innerHTML = section;
    body.appendChild(contenedor);
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

