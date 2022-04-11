/* Filtr on mobile devices */

const sidebarToggleButton = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

sidebarToggleButton.onclick = function () {
    menuIcon.classList.toggle("menu-icon-active");

    sidebar.classList.toggle("sidebar--mobile-active");

    
};

//Show more 3 cards

const btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");

btnShowMoreCards.addEventListener("click", function () {
    

    hiddenCards.forEach(function (card){
        card.classList.remove('card-link--hidden');
    })
});

//Show/Hide content inside widget

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function(widget){
    widget.addEventListener('click', function(e){
        if(e.target.classList.contains('widget__title')){
           e.target.classList.toggle('widget__title--active');
           e.target.nextElementSibling.classList.toggle('widget__body--hidden');

        }
    })
});


//Location - кнопка Любая

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

//клик по кнопке Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function(){
    if(checkBoxAny.checked){
        topLocationCheckboxes.forEach(function(item){
            item.checked = false;
        });
    }
});

//клик по другим кнопкам в location, кроме кнопки Любая 
topLocationCheckboxes.forEach(function(item){
    item.addEventListener('change', function(){
        if(checkBoxAny.checked)
        {

            checkBoxAny.checked = false;
        }
    })
});

const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');



showMoreOptions.onclick = function() {

    if(showMoreOptions.dataset.options == 'hidden')
    {
        hiddenCheckBoxes.forEach(function(item){
            item.style.display = 'block';
        });
        showMoreOptions.innerText = "Скрыть дополнительные опции";
        showMoreOptions.dataset.options = 'visible';
    }
    else if(showMoreOptions.dataset.options == 'visible')
    {
        hiddenCheckBoxes.forEach(function(item){
            item.style.display = 'none';
        });
        showMoreOptions.innerText = "Показать еще";
        showMoreOptions.dataset.options = 'hidden';
    }

    
}