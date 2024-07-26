# Create the instruction text for a plain text document
instruction_text = """
Инструкция по регистрации нового адреса электронной почты

Шаг 1: Выбор почтового сервиса
Выберите почтовый сервис, например, Gmail, Яндекс.Почта или Mail.ru.

Шаг 2: Открытие сайта почтового сервиса
Перейдите на сайт выбранного почтового сервиса:
- Gmail: mail.google.com
- Яндекс.Почта: mail.yandex.ru
- Mail.ru: mail.ru

Шаг 3: Начало регистрации
Нажмите на кнопку «Создать аккаунт» или «Регистрация».

Шаг 4: Заполнение регистрационной формы
Введите необходимую информацию:
- Имя и фамилия.
- Желаемый адрес электронной почты.
- Придумайте и введите пароль.
- Повторите пароль для подтверждения.

Шаг 5: Дополнительная информация
Введите дополнительные данные, если требуется (например, номер телефона для восстановления доступа).

Шаг 6: Принятие условий использования
Прочитайте условия использования и политику конфиденциальности. Если согласны, поставьте галочку и нажмите «Далее» или «Зарегистрироваться».

Шаг 7: Подтверждение регистрации
Возможно, вам потребуется подтвердить регистрацию по SMS или через альтернативный адрес электронной почты.

Шаг 8: Завершение регистрации
После подтверждения, ваша почта будет готова к использованию. Вы автоматически войдете в почтовый ящик.
"""

# Write the instruction text to a plain text file
text_output = "/mnt/data/Инструкция_по_регистрации_почты.txt"
with open(text_output, "w", encoding="utf-8") as file:
    file.write(instruction_text)

text_output