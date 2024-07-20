"use strict"

/* Тестовые задания DOM */

const books = [
    {
        title: "Искусство программирования",
        price: 1300,
    },
    {
        title: "Тихо!",
        price: 700,
    },
    {
        title: "Ночной дозор",
        price: 980,
    },
];

/* 
    Допишите код: используйте цикл for...of, чтобы посчитать общую стоимость книг в массиве books
    1 вариант:
*/

const totalPriceDop = books.reduce((sum, Object) => {
    return sum + Object.price;
}, 0);

    console.log(totalPriceDop);

// 2 Вариант (по условию задания):

let totalPrice = 0;
    for (let index = 0;  index < books.length; index++) {
        totalPrice += books[index].price;
    }

    console.log(totalPrice);

/* Допишите код: используйте методы массива map + join, чтобы получить строчку, список всех книг через запятую. Должен выводить строку "Искусство программирования, Тихо!, Ночной дозор"*/

const booksList = books.map(book => book.title).join(", ");

    console.log(booksList);

/*
    Допишите код: Используйте document.getElementById, innerHtml и addEventListener, чтобы при клике на кнопку текст «Заглушка» на странице изменялся на
    «Искусство программирования, Тихо!, Ночной дозор = 2980 рублей»
*/

    const buttonElement = document.getElementById("show-button");

    buttonElement.addEventListener("click", () => {
        const booksElement = document.getElementById("books");
        booksElement.innerHTML = `${booksList} = ${totalPrice} рублей`;
    });
