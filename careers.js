// carousel
const prevButton = document.querySelector("button#previous-button");
const nextButton = document.querySelector("button#next-button");
const list = document.querySelector("ul");

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

	updateButtons();
}

function toNext() {
	const currentLi = document.querySelector(".active");
	const nextLi = currentLi.nextElementSibling;
	
	currentLi.classList.remove("active");
	nextLi.classList.add("active");
	
	const currentTx = parseInt( getComputedStyle(list).getPropertyValue("--tx") );
	const newTx = currentTx + 32;
	list.style.setProperty("--tx", newTx);

	updateButtons();
}


// arrows carousel
function updateButtons() {
    const currentTx = parseInt(getComputedStyle(list).getPropertyValue("--tx"));
	const listWidth = list.clientWidth;
    const listScrollWidth = list.scrollWidth;

    // begin geen button
    if (currentTx <= 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

	if (currentTx >= listScrollWidth - listWidth) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
  }


