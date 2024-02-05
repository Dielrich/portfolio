// Importation des objets
import { competences } from "./competences.js";
import { projects } from "./projets.js";

function card(categorie) {
  let htmlString = ""; // Initialisez une chaîne de texte vide
  for (const competence of competences) {
    if (competence.categorie === categorie) {
      // Ajoutez le HTML généré à la chaîne de texte
      htmlString += `
          <img src="${competence.logo}" title="${competence.titre}" alt="${competence.titre}" />
      `;
    }
  }
  return htmlString; // Retournez la chaîne de texte générée
}

// Contenu des éléments correspondants en fonction de la catégorie
document.querySelector(".front-end").innerHTML = card("front-end");
document.querySelector(".back-end").innerHTML = card("back-end");
document.querySelector(".other").innerHTML = card("other");

function myProject() {
  let contentString = ""; // Initialisation d'une chaîne de texte vide
  for (const project of projects) {
    // Générer les éléments <li> pour chaque langage dans project.langages
    let langagesListItems = project.langages.map((langage) => `<li>${langage}</li>`).join("/");
    contentString += `
            <div class="cardContent">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <ul class="technoList">
                    ${langagesListItems}
                </ul>
                <a class="view_project" href="#">Voir le projet</a>
            </div>
            `;
  }
  return contentString;
}

//affichage des projects
document.querySelector(".card").innerHTML = myProject();

// burger-menu //

const menuBurger = document.getElementById("burger");
const toggleMenu = document.querySelector(".navContent");
menuBurger.addEventListener("click", () => {
  toggleMenu.classList.toggle("opened-menu");
  burger.classList.toggle("opened-burger");
});
