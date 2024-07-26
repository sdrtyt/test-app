// vacancies.js

// Массив с вакансиями (в реальном приложении это может быть получено из базы данных или сервера)
const vacancies = [
    { title: "Web Developer", location: "Astana", salary: "50000 KZT" },
    { title: "Graphic Designer", location: "Almaty", salary: "60000 KZT" },
    { title: "Marketing Specialist", location: "Nur-Sultan", salary: "55000 KZT" },
    { title: "Software Engineer", location: "Shymkent", salary: "65000 KZT" }
];

// Функция для отображения списка вакансий
function displayVacancies() {
    const vacanciesSection = document.querySelector('.vacancies-section');

    // Создаем элемент списка для каждой вакансии
    vacancies.forEach(vacancy => {
        const vacancyItem = document.createElement('div');
        vacancyItem.classList.add('vacancy-item');
        vacancyItem.innerHTML = `
            <h3>${vacancy.title}</h3>
            <p><strong>Location:</strong> ${vacancy.location}</p>
            <p><strong>Salary:</strong> ${vacancy.salary}</p>
        `;
        vacanciesSection.appendChild(vacancyItem);
    });
}

// Вызываем функцию для отображения списка вакансий при загрузке страницы
window.onload = displayVacancies;
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-button');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const vacancyTitle = button.getAttribute('data-vacancy');
            alert(`Вы хотите отправить резюме на вакансию: ${vacancyTitle}`);
            // Здесь можно добавить код для отправки резюме на сервер или другие действия
        });
    });
});
