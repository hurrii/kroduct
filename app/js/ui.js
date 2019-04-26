var menuButton = document.getElementById("menuButton");
var menuButtonIcon = document.getElementById("menuButtonIcon");
var menuPopupWindow = document.getElementById("menuPopupWindow");

menuButton.onclick = function toggleMenu() {
    if (menuPopupWindow.classList.contains("menu-popup__inactive")){

        console.log("Class 'menu-popup__inactive' was found");
        menuPopupWindow.classList.remove("menu-popup__inactive");
        menuPopupWindow.classList.add("menu-popup__active");
        menuButtonIcon.classList.toggle("fa-times");

    } else if (menuPopupWindow.classList.contains("menu-popup__active")) {
        
        menuPopupWindow.classList.remove("menu-popup__active");
        menuPopupWindow.classList.add("menu-popup__inactive");
        menuButtonIcon.classList.toggle("fa-times");
    } else {
        console.log("No menu-pop state classes found");
    }

}