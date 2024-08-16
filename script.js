document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const imageContainer = document.querySelector('.image-container');
    const images = document.querySelectorAll('.image-container img');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    function updateCarousel() {
      const offset = -currentIndex * 100;
      imageContainer.style.transform = `translateX(${offset}%)`;
    }
    
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
      updateCarousel();
    });
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });
  });