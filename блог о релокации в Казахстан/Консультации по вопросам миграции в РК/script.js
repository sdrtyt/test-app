const form = document.getElementById("ContactForm");
const successMessage = document.createElement("p");
const errorMessage = document.createElement("p");

successMessage.classList.add("успешное сообщение");
successMessage.textContent = "Спасибо! Ваше сообщение отправлено";

errorMessage.classList.add("ошибка");
errorMessage.textContent = "Произошла ошибка при отправке сообщения";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    errorMessage.textContent = "Пожалуйста, заполните все поля";
    form.parentElement.appendChild(errorMessage);
    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
    return;
  }

  form.classList.add("постепенное изменение");
  form.parentElement.appendChild(successMessage);

  setTimeout(() => {
    form.reset();
    form.classList.remove("постепенное изменение");
    successMessage.remove();
  }, 3000);

  // Отправляем данные формы на сервер
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Произошла ошибка при отправке сообщения");
      }
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
      form.parentElement.appendChild(errorMessage);
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    });
});
