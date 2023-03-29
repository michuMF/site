const menu = document.querySelector(".menu");

const close = document.querySelector(".close");
const navMenu = document.querySelector("ul");
const navItem = document.querySelectorAll("a");

const popUp = () => {
	navMenu.classList.toggle("active");
};

navItem.forEach(n =>
	n.addEventListener("click", () => {
		navMenu.classList.remove("active");
	})
);
const change = () => {
	menu.style.display = "none";
	close.style.display = "block";
};
const change2 = () => {
	menu.style.display = "block";
	close.style.display = "none";
	navMenu.classList.remove("active");
};

menu.addEventListener("click", popUp);
menu.addEventListener("click", change);
close.addEventListener("click", change2);
