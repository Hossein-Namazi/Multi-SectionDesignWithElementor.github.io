function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("open");
}

let currentIndex = 0;

function showCard(index) {
  const carousel = document.getElementById("carousel");
  const cardWidth = carousel.children[0].offsetWidth;
  carousel.scrollTo({
    left: cardWidth * index,
    behavior: 'smooth'
  });
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
}

function nextCard() {
  const carousel = document.getElementById("carousel");
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  }
}

window.onload = () => {
  showCard(currentIndex);
};
