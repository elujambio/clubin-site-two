// MENU JS START

var navbarMenu = document.getElementById("navbar-menu");
navbarMenu.addEventListener("click", menuToggle);
var menu = document.getElementById("menu");
var toggle = 0;
menu.style.opacity=0;
menu.style.transition="opacity .3s";
menu.style.transitionTimingFunction="ease-out";
menu.style.pointerEvents="all";


function menuToggle() {
    // document.getElementById("menu").innerHTML = "YOU CLICKED ME!";
    if(toggle==0){
    	menu.style.opacity=0;
		menu.style.pointerEvents="none";
		toggle=1;
    }else{
    	menu.style.opacity=1;
		menu.style.pointerEvents="all";    	
    	toggle=0;
    }
}
// MENU JS END