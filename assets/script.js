const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Appel des éléments du slider
const slider = document.querySelector('#banner');
let img = document.querySelector('.banner-img');
let tag = document.querySelector('#banner > p');
const dots = document.querySelector('.dots');
const prevBtn = document.querySelector(".arrow_left");
const nextBtn = document.querySelector(".arrow_right");
// Calcul du nombre d'éléments pour le slider
const currentItem = slides.length;
// Localisation des images pour le slider
const imgFiles = './assets/images/slideshow/';
 // Position du slider au chargement de la page
let index = 0;

// Affichage du slider
function showSlide() {
	const currentSlide = slides[index];
	img.src = imgFiles + currentSlide.image;
	tag.innerHTML = currentSlide.tagLine;
	
	const activeDot = dots.children;


	for (let i = 0; i < activeDot.length; i++) {
		if (i === index) {
			activeDot[i].classList.add("dot_selected");
		} else {
			activeDot[i].classList.remove("dot_selected");
		}
	}
}
showSlide;

// Affichages des dots
for (let i = 0; i < currentItem; i++) {
	const dot = document.createElement('div')
	dot.setAttribute('class', 'dot')
	dots.appendChild(dot);
}
// Activer le dot
dots.children[0].classList.add("dot_selected");

// Controle du bouton droit
nextBtn.addEventListener("click", () => {
	index++;
	if (index === currentItem) {
		index = 0;
	}
	showSlide();
});
// Controle du bouton gauche
prevBtn.addEventListener("click", () => {
	index--;
	if (index < 0) {
		index = currentItem - 1;
	}
	showSlide();
});
