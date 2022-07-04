$(document).ready(function () {
  var height = $(window).height();
  height = height - 20;
  $("#div1").height(height);
  height = height / 2;
  $("#div2").height(height);
  $("#div3").height(height);
});

window.addEventListener("load", () => {
  let name = "harry";
  let type = "movie";
  const url = `http://www.omdbapi.com/?apikey=ad24807e&t=${name}&type=${type}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.Poster);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
