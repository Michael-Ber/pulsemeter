function pseudoToArr(pseudoArray) {
    let arr = [];
    pseudoArray.forEach(item => {
        arr.push(item);
    });
    return arr;
}

function removeActiveAll(arr, className) {
    arr.forEach(item => {
        item.classList.remove(className);
    });
}
function removeActive(tagName, className) {
    tagName.classList.remove(className);
}

function addActive(tagName, className) {
    tagName.classList.add(className);
}

function toggleSlide(arrName, [className1, className2] ) {
    arrName.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            className1[index].classList.toggle('catalog-card__content_active');
            className2[index].classList.toggle('catalog-card-detail_active');
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const catalogTabs = document.querySelector('.catalog__tabs'),
          tab = document.querySelectorAll('.catalog__tab'),
          card = document.querySelectorAll('.catalog-card'),
          contentTab = document.querySelectorAll('.catalog__content'),
          contentTabWrapper = document.querySelector('.catalog__content-wrapper'),
          cardContent = document.querySelectorAll('.catalog-card__content'),
          cardDetail = document.querySelectorAll('.catalog-card-detail'),
          cardLink = document.querySelectorAll('.catalog-card__link'),
          catalog = document.querySelector('.catalog');
          
    
   
    // let heightOfWrapper = [];

    // contentTab.forEach(elem => {
    //     heightOfWrapper.push(+(window.getComputedStyle(elem).height.slice(0, -2)));
    // });
    
    tab.forEach((item, index) => {
        // if(item.classList.contains('catalog__tab_active')) {
        //     contentTabWrapper.style.height = `${heightOfWrapper[index] + 59}px`;
        // }
        item.addEventListener('click', () => {
            removeActiveAll(tab, 'catalog__tab_active');
            removeActiveAll(contentTab, 'catalog__content_active');
            addActive(item, 'catalog__tab_active');
            if(item.classList.contains('catalog__tab_active')) {
                contentTab[index].classList.add('catalog__content_active');
                // contentTabWrapper.style.height = `${heightOfWrapper[index] + 59}px`;
                // // if(index > 0) {
                // //     contentTab[index].style.transform = `translateY(calc(${-100*(index+1)}% - ${59*index}px))`;
                // // }
            }
        });
    });

    let cardLinkArr = [],
        cardLinkBackArr = [];

    cardLink.forEach((link, index) => {
        if(index % 2 == 0) {                    //Remove link 'НАЗАД'
            cardLinkArr.push(cardLink[index]);
        } else {
            cardLinkBackArr.push(cardLink[index]); //Remove link 'ПОДРОБНЕЕ'
        }
    });
    toggleSlide(cardLinkArr, [cardContent, cardDetail]);
    toggleSlide(cardLinkBackArr, [cardContent, cardDetail]);
});