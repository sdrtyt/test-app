// Примерный код для динамической загрузки контента
document.addEventListener("DOMContentLoaded", function() {
  // Начальная загрузка контента или другие действия

  // Пример загрузки контента по клику на ссылку
  var articlesLink = document.querySelector('a[href="/articles.html"]');
  articlesLink.addEventListener("click", function(event) {
      event.preventDefault(); // Предотвращаем переход по ссылке

      // Загрузка контента articles.html в элемент #content
      fetch('/articles.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('content').innerHTML = data;
          })
          .catch(error => {
              console.error('Error fetching articles:', error);
          });
  });
});

document.getElementById('logoutBtn').addEventListener('click', function() {
// Implement logout logic here
alert('Logout functionality will be implemented here');
});

document.getElementById('articlesLink').addEventListener('click', function() {
loadContent('/articles.html');
});

document.getElementById('usersLink').addEventListener('click', function() {
loadContent('/users.html');
});

const login = document.getElementById('login');
const password = document.getElementById('password');
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', toggleLoginForm);

function toggleLoginForm() {
loginForm.classList.toggle('hidden');
}

function enter() {
if (login.value == "admin" && password.value == "admin") {
    alert("Hello admin");
    loadContent('admin.html');
} else {
    alert("Your login is " + login.value + " and your password is " + password.value);
    loginForm.classList.add('hidden');
}    
}

function clearInputs() {
login.value = "";
password.value = "";
}

function greetVisitor() {
const name = prompt("What is your name?");
alert("Welcome, " + name + "! Enjoy your visit.");
subscribe();
}

function subscribe() {
alert("Thanks for visiting! Please don't forget to follow us on our social networks for the latest updates.");
}

function changeLanguages(language) {
if (language === "ru") {
    document.body.innerHTML = "Добро пожаловать на сайт блога";
} else if (language === "en") {
    document.body.innerHTML = "Welcome to the blog site";
} 
}

window.onload = greetVisitor;

function loadContent(page) {
const content = document.getElementById('content');
fetch(page)
    .then(response => response.text())
    .then(data => {
        content.innerHTML = data;
    })
    .catch(error => {
        content.innerHTML = '<p>Error loading content.</p>';
        console.error('Error loading content:', error);
    });
}

document.getElementById('logoutBtn').addEventListener('click', function() {
alert('Logout functionality will be implemented here');
});

document.getElementById('articlesLink').addEventListener('click', function() {
loadContent('/articles.html');
});

document.getElementById('usersLink').addEventListener('click', function() {
loadContent('/users.html');
});

document.getElementById('loginBtn').addEventListener('click', function() {
document.getElementById('loginForm').classList.toggle('hidden');
});

function enter() {
const login = document.getElementById('login').value;
const password = document.getElementById('password').value;
if (login === "admin" && password === "admin") {
    alert("Hello admin");
} else {
    alert("Your login is " + login + " and your password is " + password);
    document.getElementById('loginForm').classList.add('hidden');
}
}

function clearInputs() {
document.getElementById('login').value = "";
document.getElementById('password').value = "";
}

function loadContent(url) {
fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));
}
