export class anim_entete{
    constructor(elmEntete){
        this.elmEntete = elmEntete;
    }

    anim(){
        console.log('animation');
        const titres = this.elmEntete;

        for(let i=0; i<titres.length; i++){
            titres[i].classList.add('animEntete');
        }
    }
}