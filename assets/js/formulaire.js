const form = document.querySelector('.myForm');

form.addEventListener('submit', () =>{
    const nom = document.querySelector('.nom');

    if(nom.value === ""){
        nom.classList.toggle ="error_visible";
    }
})