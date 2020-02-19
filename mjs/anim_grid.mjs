export class anim_grid{
    constructor(elmGrid){
        this.elmGrid = elmGrid;
    }

    
    animerGrid(){
        const grid = this.elmGrid;

        //initialise le délais entre les carrées
        let delay =0;

        //ajoute la classe pour l'animation et le délais pour chaque élément du grid
        for(let i=0; i<grid.length; i++){
            grid[i].classList.add('animerGrid');
            grid[i].style.animationDelay = delay+"s";
            grid[i].addEventListener("animationend", this.activerHover);
            delay += 0.25;
        }
    }

    activerHover(){
        this.classList.remove('animerGrid');
        this.classList.add('gridHover');
        this.removeEventListener("animationend", this.activerHover);
    }

    
}