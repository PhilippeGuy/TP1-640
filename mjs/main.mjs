import {anim_entete} from "./anim_entete.mjs";
import {anim_grid} from "./anim_grid.mjs";
import {creation_slider} from "./contenu_slider.mjs";

//création de l'objet qui contient les images du slider
let contenuSlider = {
    "images":[
        { "nom":"Kiwi", "lien":"media/images/Kiwi.jpg"},
        { "nom":"Chameau", "lien":"media/images/Camel.jpg"},
        { "nom":"Donkey Kong", "lien":"media/images/DK.jpg"},
        { "nom":"Sandwich", "lien":"media/images/sandwich.png"},
        { "nom":"Reese", "lien":"media/images/reese.jpg"}
    ]
}

//éléments qui seront animé dans l'entête
const elmEntete = document.querySelectorAll("header .global>*");

//éléments qui font partient du slider
const elmSlides = document.querySelectorAll(".slide");

//éléments du grid
const elmGrid = document.querySelectorAll("#grid>div")

const animEntete = new anim_entete(elmEntete);
const animGrid = new anim_grid(elmGrid)
const creationSlider = new creation_slider(elmSlides,contenuSlider);

animEntete.animerEntete();
animGrid.animerGrid();
creationSlider.genererImages();