document.addEventListener("DOMContentLoaded", function () {
  async function fetchFilms() {
    const url = "https://hp-api.lainocs.fr/characters";
    const response = await fetch(url);
    const data = await response.json();
    displayFilms(data);
  }

  function displayFilms(films) {
    const container = document.getElementById("films-container");
    const template = document.getElementById("film-template");

    // Supprime les cartes précédentes, sauf le template
    container.innerHTML = "";
    container.appendChild(template);

    films.forEach((carte) => {
      const carteCard = template.cloneNode(true);
      carteCard.style.display = "block"; // Rend la carte visible
      carteCard.querySelector(".film-title").textContent = carte.name;
      carteCard.querySelector(".film-description").textContent = carte.house;
      carteCard.querySelector(".film-img").src = carte.image;
      carteCard.querySelector(
        ".film-details-link"
      ).href = `details.html?slug=${carte.slug}`;

      container.appendChild(carteCard);
    });
  }
  fetchFilms();
});
