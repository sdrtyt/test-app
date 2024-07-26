// Получаем элементы формы комментария и списка специалистов
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");
const specialistsList = document.getElementById("specialistsList");

// Массивы для хранения информации о специалистах
let resumeSpecialists = [];
let internshipSpecialists = [];

// Функция для обновления отображения списка специалистов
function updateSpecialistsList() {
    // Очищаем текущий список специалистов
    specialistsList.innerHTML = "";

    // Добавляем специалистов с резюме
    resumeSpecialists.forEach(specialist => {
        const listItem = document.createElement("li");
        listItem.textContent = specialist.name + " (С резюме)";
        specialistsList.appendChild(listItem);
    });

    // Добавляем специалистов без резюме или тех, кто хочет пройти стажировку
    internshipSpecialists.forEach(specialist => {
        const listItem = document.createElement("li");
        listItem.textContent = specialist.name + " (Стажировка)";
        specialistsList.appendChild(listItem);
    });
}

// Обработчик отправки формы комментария
commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Получаем значение введенного комментария
    const commentText = commentInput.value;

    // Создаем новый элемент списка комментариев
    const newComment = document.createElement("li");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);

    // Очищаем поле ввода комментария после отправки
    commentInput.value = "";

    // Определяем статус специалиста (резюме или стажировка)
    const isResume = confirm("Есть ли у вас резюме?");

    // Получаем имя специалиста
    const specialistName = prompt("Введите ваше имя:");

    // Добавляем информацию о специалисте в соответствующий массив
    if (isResume) {
        resumeSpecialists.push({ name: specialistName });
    } else {
        internshipSpecialists.push({ name: specialistName });
    }

    // Обновляем отображение списка специалистов
    updateSpecialistsList();
});
