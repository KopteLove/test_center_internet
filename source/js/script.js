const ol = document.querySelector('.main__list');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupClose = popup.querySelector('.popup__close');

ol.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'IMG') {
        const itemsImg = ol.querySelectorAll('.main__item img');
        const imgPopup = document.createElement('img');
        imgPopup.src = evt.target.src;
        imgPopup.alt = 'Карточка выбранного товара';
        const numImgPopup = document.createElement('p');
        [...itemsImg].forEach((item) => {
            if (evt.target === item) {
                numImgPopup.textContent = `Номер товара: ${[...itemsImg].indexOf(item) + 1}`;
            }
        })
        popupContent.appendChild(imgPopup);
        popupContent.appendChild(numImgPopup);
        popup.style.display = 'flex';
    }
})

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    while(popupContent.firstChild) {
        if(popupContent.lastChild !== popupClose) {
            popupContent.removeChild(popupContent.lastChild);
        } else {
            return
        }
    }
})