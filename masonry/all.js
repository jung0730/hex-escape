const grid = document.querySelector('.grid');

const masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
  masonry.layout();
});