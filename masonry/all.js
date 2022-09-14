const grid = document.querySelector('.grid');
const items = document.querySelectorAll(".grid-item");
let index = 0;

const masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
});

// Triggered after all images have successfully loaded without any broken images.
imagesLoaded(grid).on('done', function () {
  window.requestAnimationFrame(bounceInImages);
});

const bounceInImages = () => {
  items[index].classList.add('bounce-in');
  index ++;
  if (index < items.length) {
    // 要自己call自己才有下一次
    // window.requestAnimationFrame(bounceInImages);
    setTimeout(() => {
      window.requestAnimationFrame(bounceInImages);
    }, '150');
  }
};

// css 動畫完成後觸發animationend
grid.addEventListener('animationend', (e) => {
  e.target.classList.remove('hide');
});