// const prev = document.querySelector('.prev-btn')
// const next = document.querySelector('.nxt-btn')
// const list = document.querySelector('.item-list')
// const img = list.querySelector('img')
// const imgWidth = img.offsetWidth

// next.addEventListener('click', toNext)
// function toNext() {
//     list.scrollLeft += imgWidth
// } 

// prev.addEventListener('click', toPrev)
// function toPrev() {
//     list.scrollLeft -= imgWidth
// }

const prevButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

const list = document.querySelector("ul.item-list");

prevButton.addEventListener("click", toPrev);
nextButton.addEventListener("click", toNext);

function toPrev() {
	const currentLi = document.querySelector(".active");
	const prevLi = currentLi.previousElementSibling;
	
	currentLi.classList.remove("active");
	prevLi.classList.add("active");
	
	const currentTx = parseInt( getComputedStyle(list).getPropertyValue("--tx") );
	const newTx = currentTx - 32;
	list.style.setProperty("--tx", newTx);
}

function toNext() {
	const currentLi = document.querySelector(".active");
	const nextLi = currentLi.nextElementSibling;
	
	currentLi.classList.remove("active");
	nextLi.classList.add("active");
	
	const currentTx = parseInt( getComputedStyle(list).getPropertyValue("--tx") );
	const newTx = currentTx + 32;
	list.style.setProperty("--tx", newTx);
}