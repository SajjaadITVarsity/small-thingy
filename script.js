
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active');
        if (i === index) {
            page.classList.add('active');
        }
    });
}

function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
    document.body.addEventListener('click', nextPage);
});

document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');
  document.body.addEventListener('click', () => {
    if (music.paused) {
      music.play();
    }
  });
});
