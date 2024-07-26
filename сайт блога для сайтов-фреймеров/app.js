/* JavaScript для параллакс-эффекта */
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let parallaxElements = document.querySelectorAll('.parallax');
  
    for (let element of parallaxElements) {
      let distanceFromTop = element.offsetTop;
      let elementHeight = element.offsetHeight;
      let background = element.querySelector('.parallax-background');
      let content = element.querySelector('.parallax-content');
      let parallaxSpeed = element.dataset.speed;
  
      // Рассчитываем позицию фона и контента
      let backgroundPosition = (scrollPosition - distanceFromTop) * parallaxSpeed;
      let contentPosition = (scrollPosition - distanceFromTop) * (parallaxSpeed / 2);
  
      // Применяем эффект параллакса
      background.style.transform = `translateY(${backgroundPosition}px)`;
      content.style.transform = `translateY(${contentPosition}px)`;
    }
  });
  