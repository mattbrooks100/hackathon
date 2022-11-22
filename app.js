const $body = $("body");
const $container = $(".container");
const catPics = ["juni1", "juni2", "juni3", "juni4", "juni5", "juni6", "dixie1", "dixie2"];

//============================ ADD CAT TILES ============================//
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

//========================== SLICK PROPERTIES ==========================//
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

//========================= CAROUSEL CONTROLS =========================//
const $pause = $("#pause");
$pause.click(() => {
  $container.slick("slickPause");
});

const $play = $("#play");
$play.click(() => {
  $container.slick("slickPlay");
});

//=========================== SELF-DESTRUCT ===========================//
const $noClick = $(".do-not-click");
const $dog = $(`<img src="images/roll_dog.gif" class="dog">`);
$noClick.click(() => {
  const soundtrack = new Howl({
    src: ["8_bit_sound.mp3"],
    autoplay: true,
    loop: true,
  });
  $body.prepend($dog);
});
