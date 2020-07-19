// Hamburger   Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');

// Hamburger Menu
hamburger.addEventListener('click', () => {
	nav.classList.toggle('open');
	hamburger.classList.toggle('toggle');
	// body.classList.add('noscroll');
});

// Tab Items
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove Background
	removeBackground();
	// Remove white text
	removeWhiteText();
	// Remove Show
	removeShow();
	// Add background to current tab
	this.classList.add('tab-background');
	// Add white font to text
	this.classList.add('txt-white');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Function that removes that background colour
function removeBackground() {
	tabItems.forEach((item) => item.classList.remove('tab-background'));
}

// Function that removes the white text
function removeWhiteText() {
	tabItems.forEach((item) => item.classList.remove('txt-white'));
}
// Function that removes show
function removeShow() {
	tabContentItems.forEach((item) => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach((item) => item.addEventListener('click', selectItem));

// Initialize and add the map
function initMap() {
	// Your Location
	const loc = {
		lat: 51.506901,
		lng: -0.13853,
	};
	// Centered map on location
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: loc,
	});
	// The marker, positioned at location
	const marker = new google.maps.Marker({
		position: loc,
		map: map,
	});
}

// *Scroll Appear Effect
function scrollAppear() {
	let img1 = document.querySelector('.img-1');
	let img2 = document.querySelector('.img-2');
	let imgPosition1 = img1.getBoundingClientRect().top;
	let imgPosition2 = img2.getBoundingClientRect().top;
	let screenPosition = window.innerHeight / 1.2;

	// About Photos
	if (imgPosition1 < screenPosition && imgPosition2 < screenPosition) {
		img1.classList.add('img-1-appear');
		img2.classList.add('img-2-appear');
	}

	// Svg
	let svg1 = document.querySelector('.svg-1');
	let svg2 = document.querySelector('.svg-2');
	let svg3 = document.querySelector('.svg-3');
	let svg4 = document.querySelector('.svg-4');
	let svgPosition = svg1.getBoundingClientRect().top;
	let svgPosition2 = svg2.getBoundingClientRect().top;
	let svgPosition3 = svg3.getBoundingClientRect().top;
	let svgPosition4 = svg4.getBoundingClientRect().top;
	let screenPosition2 = window.innerHeight / 1.5;

	if (svgPosition < screenPosition && svgPosition2 < screenPosition2 && svgPosition3 < screenPosition2 && svgPosition4 < screenPosition2) {
		svg1.classList.add('svg-appear');
		svg2.classList.add('svg-appear');
		svg3.classList.add('svg-appear');
		svg4.classList.add('svg-appear');
	}
}

window.addEventListener('scroll', scrollAppear);

// *Smooth Scroll
// jQuery Smooth Scroll
$('.main-header a').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800
		);
	}
});
