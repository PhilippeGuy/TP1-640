export class anim_grid{
    constructor(elmGrid){
        this.elmGrid = elmGrid;
    }

    animerGrid(){
        console.log(this.elmGrid);
        const grid = this.elmGrid;
        let delay =0;
        for(let i=0; i<grid.length; i++){
            grid[i].classList.add('animerGrid');
            grid[i].style.animationDelay = delay+"s";
            delay += 0.25;
        }
    }
}