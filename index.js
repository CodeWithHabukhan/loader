window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.replaceChild("loader");
    })


    
})

"use strict";
const mainMenu = document.querySelector(".nav-items");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu-list");
const menu_items = document.querySelectorAll(".linkk");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
	menu.style.display = "block";
	menu.style.opacity = "0";
	setTimeout(function () {
		menu.style.opacity = "1";
	}, 10);
	// mainMenu.style.display = "flex";
	// mainMenu.style.top = "0";
}
function close() {
	menu.style.display = "none";
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});
