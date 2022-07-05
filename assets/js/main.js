function getScreenSize() {
  var height = $(window).height();
  height = height;
  $("#div1").height(height);
  height = height / 2;
  $("#div2").height(height);
  $("#div3").height(height);
}
function fillApp(arrayDef, type, img, tit) {
  for (let index = 0; index < arrayDef.length; index++) {
    const url = `http://www.omdbapi.com/?apikey=ad24807e&t=${arrayDef[index]}&type=${type}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.Poster);
        // console.log(data.Title);
        img[index].src = data.Poster;
        tit[index].textContent = data.Title;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
function findMovie() {
  let movie = document.getElementById("finder");

  let div2 = document.getElementById("div2");
  let div3 = document.getElementById("div3");
  let ree = document.getElementById("reemplazo");
  let ree2 = document.getElementById("reemplazo2");
  let title = document.getElementById("title");

  const image = document.createElement("img");
  const newTitle = document.createElement("h5");
  const newParr = document.createElement("p");

  console.log(movie.value);
  const url = `http://www.omdbapi.com/?apikey=ad24807e&t=${movie.value}&type=movie`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      title.textContent = "Resultados de la búsqueda:";
      div2.textContent = ""; //vacío los dos divs para la segunda búsqueda
      div3.textContent = "";

      newTitle.textContent = data.Title;
      div2.appendChild(newTitle);
      newTitle.classList.add("text-center");

      image.src = data.Poster;
      div2.appendChild(image);
      image.classList.add("js-image");

      newParr.textContent = "Resumen: " + data.Plot;
      div2.appendChild(newParr);
      newParr.classList.add("js-p");

      newParr.innerHTML += "<br> Nominaciones y premios: " + data.Awards;
      newParr.innerHTML += "<br>Actores: " + data.Actors;
      newParr.innerHTML += "<br>Director: " + data.Director;
      newParr.innerHTML += "<br>Duracion: " + data.Runtime;

      div3.textContent = "";
    })
    .catch((error) => {
      console.log(error);
    });
}

window.addEventListener("load", () => {
  getScreenSize();

  let arrayDef = ["pete", "random", "spider", "bob", "titans", "mario"];
  let type = "movie";

  let img = [];
  img[0] = document.getElementById("img1");
  img[1] = document.getElementById("img2");
  img[2] = document.getElementById("img3");
  img[3] = document.getElementById("img4");
  img[4] = document.getElementById("img5");
  img[5] = document.getElementById("img6");
  let tit = [];
  tit[0] = document.getElementById("tit1");
  tit[1] = document.getElementById("tit2");
  tit[2] = document.getElementById("tit3");
  tit[3] = document.getElementById("tit4");
  tit[4] = document.getElementById("tit5");
  tit[5] = document.getElementById("tit6");

  fillApp(arrayDef, type, img, tit);
});
