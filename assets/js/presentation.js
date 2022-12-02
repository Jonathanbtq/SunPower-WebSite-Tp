window.onload=function(){
    nbr = 10;//nombre de div / nombre de vagues
    cont = document.querySelector('.prs_vag_img');//récuperation de la div contenant l'img
    im=0;
    images=["assets/images/Victorimg.png","assets/images/Herveimg.png","assets/images/Christiaimg.png"]
    ang=[];
}

window.addEventListener('scroll', () => {// pour eviter les mauvaises suprises (est-ce bien utile?)
    const imgopa = document.querySelector('.fdt_card_photo > img');
    if(window.innerWidth >= 1200){
        imgopa.style.visibility ="visible";
    }
})

function init(){
    for(i=0;i<nbr;i++){
        try{
            cont.removeChild(document.getElementById(i));
        }
        catch(e){
            true;
        }
    }// pour éviter de rester sur une erreur !

    const imgopa = document.querySelector('.fdt_card_photo > img');

    if(window.innerWidth >= 1200){

        imgopa.style.visibility = "hidden";
        for(i=0;i<nbr;i++){//boucler sur le nombre de div dont on a besoin
            ang[i]= -i*15;
            div = document.createElement("div");
            div.style.width = (imgopa.clientWidth/nbr) +"px";
            div.style.height = imgopa.clientWidth+"px";//Création de la div, Ajout de la largeur et hauteur de la div ( largeur de la div/ nombre de div voulue)
            div.className="maClasse";//On lui donne une class
            div.setAttribute("id", i);//on donne un id a chaque [i] donc a chaque div contenant les images
            div.style.visibility="hidden";
            div.style.backgroundImage = "url('"+images[im]+"')";
            div.style.backgroundSize=imgopa.clientWidth+"px auto";//on attribut une taille au background
            div.style.backgroundPosition=(i*100/(nbr-1))+"% 50%";//pour la position
            div.style.transform="perspective(1000px) rotateY("+ang[i]+"deg)";//transformation en perspective
            cont.appendChild(div);//On donne a notre div parent la nouvelle div
        }
        animer();
        setTimeout(loop, 1650)
    }
    
    
    
}

function loop(){//création d'un timer pour faire apparaitre l'image de base, apres l'effet de transform
    const imgopa = document.querySelector('.fdt_card_photo > img');
    imgopa.style.visibility = "visible";
}

function animer(){//création d'une animation
    t=setTimeout("animer()", 20);
    for(i=0;i<nbr;i++){
        ob=document.getElementById(i);
        ob.style.transform="perspective(1000px) rotateY("+ang[i]+"deg)";
        if(ang[i]>-90)
            ob.style.visibility="visible";
        if(ang[i]<0)
            ang[i]+=2;
        else
            ang[i]=0;
        if(ang[nbr-1]==0){
            im+1;
            if(im>images.length-1)
                im=0;
            clearTimeout(t);
        }
    }
}



//Mouvement a la position

div = document.querySelector('.prs_top_t > section');

div.addEventListener('mouseenter', () => {
    div.style.transform = "translateX(15%)";
    div.style.transition = "all .5 ease-and-out";
})
div.addEventListener('mouseleave', () => {
    div.style.transform = "translateX(0%)";
    div.style.transition = "all .5 ease-and-out";
})

