"use strict"

// Список комментов
const commentList = document.getElementById("commentList");
// Форма комментария
const commentName = document.getElementById("commentName");
const commentText = document.getElementById("commentText");
const writeButton = document.getElementById("writeButton");
// Время в комменте
const commentTime = document.getElementById("commentTime");
// Кол-во реакций в комменте
const commentLike = document.getElementById("commentLike");
const likeNumber = document.getElementById("likeNumber");

const nowDate = new Date();
// Форматирование вывода даты
const option = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
}



writeButton.addEventListener("click", () => {
// Сброс ошибки заполнения формы
    commentName.classList.remove("error");
    commentText.classList.remove("error");
// Проверка заполнения формы
    if(commentName.value ==="" || commentText.value === "") {
        commentName.classList.add("error");
        commentText.classList.add("error");
        return;
    }

/*  
    Добавляем новый коммент к предыдущим с новыми введёнными данными, фактической датой и временем, нулевым кол-вом реакций
    Добавляем дату в формате "31.12.2012, 12:12" с помощью:                              .toLocaleString("ru", option)
    После чего убираем запятую между датой и временем заменив её на "пустоту" с помощью: .replace(",","")
*/

    const oldComment = commentList.innerHTML;
    commentList.innerHTML = oldComment +
    `
    <li class="comment">
        <div class="comment-header">
            <div>${commentName.value}</div>
                <div>${nowDate.toLocaleString("ru", option).replace(",","")}</div>
        </div>
        <div class="comment-body">
            <div class="comment-text">${commentText.value}</div>
        </div>
        <div class="comment-footer">
            <div class="likes">
                <span class="likes-counter">0</span>
                <button class="like-button"></button>
            </div>
        </div>
    </li>
    `
// Очистка формы после отправки коммента
    commentName.value = "";
    commentText.value = "";
});



