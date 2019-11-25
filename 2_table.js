/* Создать HTML-страницу с кнопкой "Открыть" и модальным окном.
На модальном окне должен быть текст и кнопка "Закрыть".
Изначально модальное окно не отображается.
При клике на кнопку "Открыть" появляется модальное окно,
на кнопку "Закрыть" – исчезает. */


let modal = document.getElementById('modalBlock');
let btn = document.getElementById('modalButton');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


