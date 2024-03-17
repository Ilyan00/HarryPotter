document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const carteId = params.get("slug");

  async function fetchFilm() {
    const url = `https://hp-api.lainocs.fr/characters/${carteId}`;
    const response = await fetch(url);
    const data = await response.json();
    displayFilm(data);
  }

  function displayFilm(carte) {
    console.log(carte);
    const template = document.getElementById("film-details");

    template.style.display = "block"; // Rend la carte visible
    template.id = ""; // Enlève l'id pour éviter les doublons
    template.querySelector(".film-img").src = carte.image;
    template.querySelector(".film-title").textContent = carte.name;
    template.querySelector(".film-description").textContent = carte.house;
  }

  fetchFilm();
});
