const $container = $(".container");

const catPics = ["juni1", "juni2", "juni3", "juni4", "juni5", "juni6", "dixie1", "dixie2"];

const addCat = (array) => {
  let catCount = 0;
  for (let catImg of array) {
    const $catContainer = $('<div class="cat-container"></div>');
    const $img = $(`<img src="images/${catImg}.jpeg" class="cat-post">`);
    let caption = "";
    for (i = 0; i <= catCount; i++) {
      caption += "cat ";
    }
    catCount++;
    const $text = $(`<div class="caption">${caption}</div>`);
    $catContainer.append($img);
    $catContainer.append($text);
    $container.append($catContainer);
  }
};
addCat(catPics);

$container.slick({
  dots: true,
  infinite: true,
  speed: 300,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
