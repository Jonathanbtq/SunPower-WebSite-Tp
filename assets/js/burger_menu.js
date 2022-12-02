const burger = document.getElementById("menuBurger");
const nav = document.getElementById("navBar");

burger.addEventListener("click", function(){
	nav.classList.toggle('d-flex');
	nav.classList.toggle('d-none');
})

