/**
 * class qui génère le contenu du slider de la page à partir d'un objet Javascript
 */
export class creation_slider{
    constructor(elmSlides,contenuSlider){
        this.elmSlides = elmSlides;
        this.contenuSlider = contenuSlider;
    }

    /**
     * génère les images dans le slider
     */
    genererImages(){
        //ensembles des slides
        const slides = this.elmSlides;

        //loop qui ajoute l'image de fond pour chaque slide
        for(let i=0; i<slides.length; i++){
            slides[i].style.backgroundImage = "url("+this.contenuSlider.images[i].lien+")";
            console.log(this.contenuSlider.images[i].lien);
        }
    }
}