export default class PokeCard extends HTMLElement{
    constructor(){
        super();
        console.log('PokeCard created.');
    }
    
}

customElements.define("poke-card",PokeCard);