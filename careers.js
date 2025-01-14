const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.nxt-btn')
const list = document.querySelector('.item-list')
const img = list.querySelector('img')
const imgWidth = img.offsetWidth

next.addEventListener('click', toNext)
function toNext() {
    list.scrollLeft += imgWidth
} 

prev.addEventListener('click', toPrev)
function toPrev() {
    list.scrollLeft -= imgWidth
}