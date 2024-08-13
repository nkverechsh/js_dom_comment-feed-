"use strict"

// Список комментов
const commentList = document.getElementById("commentList");

// Форма комментария
const commentName = document.getElementById("commentName");
const commentText = document.getElementById("commentText");
const writeButton = document.getElementById("writeButton");

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

const comments = [
    {
        name: "Иван Иванович",
        date: "12.02.22 12:18",
        textAdd: "Это будет первый комментарий на этой странице",
        likesCounter: 3,
        isLover: false,   
    },
    {
        name: "Василий Петрович",
        date: "13.02.22 19:22",
        textAdd: " Это будет второй комментарий на этой странице",
        likesCounter: 7,
        isLover: false,
    },
];

const renderComments = () => {
    const commentsHtml = comments.map((comment, index) => {
        return `<li class="comment">
                    <div class="comment-header">
                        <div>
                            ${comment.name}
                        </div>
                        <div>
                            ${comment.date}
                        </div>
                    </div>
                    <div class="comment-body">
                        <div class="comment-text">
                            ${comment.textAdd}
                        </div>
                    </div>
                    <div class="comment-footer">
                        <button data-index="${index}" class="delete-button">Удалить</button>
                        <button class="edit-button">Редактировать</button>
                        <div class="likes">
                            <span class="likes-counter">${comment.likesCounter}</span>
                            <button class="like-button"></button>
                        </div>
                    </div>

                </li>`
    }).join("");

    commentList.innerHTML = commentsHtml;

    initDeleteButtonsListeners();
};

const initDeleteButtonsListeners = () => {
    const deleteButtonsElements = document.querySelectorAll(".delete-button");

    for (const deleteButtonElement of deleteButtonsElements) {
        deleteButtonElement.addEventListener("click", () => {

// Реализация удаления элемента по индексу с помощью метода .splice
        const index = deleteButtonElement.dataset.index;
        comments.splice(index, 1);
// Рендерим новую разментку после удаления элемента
        renderComments();
        });
    }
};

renderComments(); 

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
    Добавляем дату в формате "31.12.2012, 12:12" с помощью: .toLocaleString("ru", option)
    После чего убираем запятую между датой и временем заменив её на "пустоту" с помощью: .replace(",","")
*/
comments.push({
    name: commentName.value,
    date: (nowDate.toLocaleString("ru", option).replace(",","")),
    textAdd: commentText.value,
    likesCounter: 45,
    isLover: false, 
})

renderComments();

// Очистка формы после отправки коммента и постановка курсора на поле ввода имени
    commentName.value = "";
    commentText.value = "";

// После отправки коммента актив курсора в поле имени
    commentName.focus();
});



