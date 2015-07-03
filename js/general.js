// MENU JS START

var navbarMenu = document.getElementById("navbar-menu");
navbarMenu.addEventListener("click", menuToggle);
var menu = document.getElementById("menu");
var toggle = 1;
var spritesheet = document.getElementById("sprites");
menu.style.opacity=0;
menu.style.transition="opacity .3s";
menu.style.transitionTimingFunction="ease-out";


function menuToggle() {
    // document.getElementById("menu").innerHTML = "YOU CLICKED ME!";
    if(toggle==0){
    	menu.style.opacity=0;
		menu.style.pointerEvents="none";
		sprites.style.animation="backward .2s steps(10) forwards";
		toggle=1;
    }else{
    	menu.style.opacity=1;
		menu.style.pointerEvents="all";    	
		sprites.style.animation="forward .2s steps(10) forwards";
    	toggle=0;
    }
}
// MENU JS END