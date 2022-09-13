const grid = document.querySelector(".grid");

const masonry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
});

imagesLoaded(grid).on("progress", function () {
  masonry.layout();
});