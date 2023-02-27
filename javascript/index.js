
/*--------------------------------------------boton_Menu---------------------------------------------------*/

const navigationToggle = document.querySelector(".navigation-toggle");
const navigationMenu = document.querySelector(".navigation-menu");

navigationToggle.addEventListener('click', () => {
    navigationMenu.classList.toggle("navigation-menu_visible");

    if ( navigationMenu.classList.contains("navigation-menu_visible")) {
        navigationToggle.setAttribute("arial-label", "Cerrar menú");
    }else{
        navigationToggle.setAttribute("arial-label", "Abrir menú");
    }
    });

/*--------------------------------------------links_Menu----------------------------------------------------*/

var links = document.querySelectorAll('.navigation-menu a');
var linksLength = links.length;

for (var i = 0; i < linksLength; i++){
    links[i].addEventListener("click", function(){
        navigationMenu.classList.toggle("navigation-menu_visible");
        if ( navigationMenu.classList.contains("navigation-menu_visible")) {
            navigationToggle.setAttribute("arial-label", "Cerrar menú");
        }else{
            navigationToggle.setAttribute("arial-label", "Abrir menú");
        }
    });
}

/*-----------------------------------------color------------------------------------------------------------*/

document.getElementById("c_azul").addEventListener('click', function(){
    document.getElementById('header').style.backgroundColor = 'blue';
    const collection = document.getElementsByClassName("card");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.borderColor = '#0a66c2';
    }
});

document.getElementById("c_rojo").addEventListener('click', function(){
    document.getElementById('header').style.backgroundColor = 'red';
    const collection = document.getElementsByClassName("card");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.borderColor = '#f52626';
    }
});

document.getElementById("c_verde").addEventListener('click', function(){
    document.getElementById('header').style.backgroundColor = 'green';
    const collection = document.getElementsByClassName("card");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.borderColor = '#14d814f1';
    }
});

/*--------------------------------------------------------------------------------------------------------*/
