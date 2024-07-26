const elements = [
  { element: document.getElementById("layer1"), speed: 0.1 },
  { element: document.getElementById("layer2"), speed: 0.2 },
  { element: document.getElementById("layer3"), speed: 0.3 },
  { element: document.getElementById("layer4"), speed: 0.4 }
];

function parallax() {
  elements.forEach(({ element, speed }) => {
    element.style.backgroundPositionY = `${speed * window.pageYOffset}px`;
  });

  const background = document.getElementById("background");
  const foreground = document.getElementById("foreground");

  background.style.backgroundPositionY = `${0.1}px`;
  foreground.style.top = `${0.5}px`;

  requestAnimationFrame(parallax);
}

parallax();

function changeLanguages(languages, language) {
  const body = document.body;
  const message = language === "ru" ? "Добро пожаловать на сайт блога" : "Welcome to the blog site";
  body.textContent = message;
}

function reveal() {
  const reveals = document.querySelectorAll(".container p, .container img");
  const revealPoint = 50;
  const imgPoint = 200;
  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) reveal.classList.add("show");
  });

  const imgReveal = document.querySelector(".container img");
  const imgHeight = imgReveal.getBoundingClientRect().top;
  if (imgHeight < windowHeight - imgPoint) imgReveal.classList.add("showImg");
}

window.addEventListener("scroll", reveal);

window.addEventListener('scroll', function() {
  parallax('.bg-image', window.scrollY, 0.5);
});
const commentForm = document.getElementById("commentForm");
const commentText = document.getElementById("commentText");
const submitCommentBtn = document.getElementById("submitComment");
const commentsContainer = document.getElementById("comments");

submitCommentBtn.addEventListener("click", addComment);

function addComment() {
  const comment = commentText.value;
  const newComment = document.createElement("div");
  newComment.textContent = comment;
  commentsContainer.appendChild(newComment);
  commentText.value = ""; // Clear the comment input after submission
}
