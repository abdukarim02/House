// alert('hello');

const tabItem = document.querySelectorAll('.catalog__btn-item');
const tabContent = document.querySelectorAll('.catalog__body-wrap');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('catalog__btn-item--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('catalog__body-wrap--active');
    });

    tabTarget.classList.add('catalog__btn-item--active');
    document.querySelector(`#${button}`).classList.add('catalog__body-wrap--active');
}

