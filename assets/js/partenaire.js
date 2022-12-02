// const txtpartenaire = document.querySelector(".part_card");
// let counter = 0;
// txtpartenaire.addEventListener("mouseenter", () => {
//     //Div 1
//     let elta = document.createElement("span");
//     elta.textContent = "Notre mission est de soutenir la recherche et l’innovation, jusqu’à la diffusion et l’appropriation des solutions et des bonnes pratiques afin d’accélérer la transition écologique.";
//     txtpartenaire.appendChild(elta);
//     elta.classList.add("part_card_span")

    
// })

// txtpartenaire.addEventListener("mouseleave", () => {

//     let elta = document.querySelectorAll(".part_card_span");
//     for (let element of elta) {
//         element.style.display = "none";
//     }
// })

//Div2
// function size(){
//     const parg = document.querySelector('.pHover');  
//     console.log(document.documentElement.clientWidth)   
//     if(document.documentElement.clientWidth < 991){
//         parg.style.display = "flex";
//     }else{
//         parg.style.display = "none";
//     }
// }
// size()

const viewAll = (div) => { // creer la fonction en utilisant div comme const anonyme
    if(screen.width > 991){
        const txt = div.children[1]; //recupere l'enfant 2 de l'element div
        txt.style.display = "flex"; // met l'element txt en display flex
    }
    
}

const hideAll = (div) => {
    if(document.documentElement.clientWidth > 991){
        const txt = div.children[1];
        txt.style.display = "none";
    }
    
}

