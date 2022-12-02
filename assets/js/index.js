const totop = document.querySelector('.toppage');

window.addEventListener('scroll', () => {
    if(window.scrollY > 500){
        totop.style.opacity = "1";
    }else{
        totop.style.opacity = "0";
    }
})

totop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
})