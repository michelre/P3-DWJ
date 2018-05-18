// DEBUT DU JS

// création des variables du slider
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
let marginLeft = 0;
let index = 0;
const lastSlide = $('.sliders li').length - 1;
const sizeSlider = document.querySelector('.conteneur_sliders').getBoundingClientRect().width;


//création de l'événement des variables
previousButton.addEventListener('click', function () {
  previous();
})
nextButton.addEventListener('click', function () {
  next();
})


//fonctions
function previous() {
  if (index === 0) {
    marginLeft = -(sizeSlider * lastSlide);
    index = lastSlide;
  } else {
    index = index - 1;
    marginLeft = marginLeft + sizeSlider;
  }

  $('.sliders').css('marginLeft', marginLeft);
}

function next() {
  if (index === lastSlide) {
    marginLeft = 0;
    index = 0;
  } else {
    marginLeft = marginLeft - sizeSlider;
    index = index + 1;
  }

  $('.sliders').css('marginLeft', marginLeft);
}

//chainage des images


// création des touches claviers + alerte

document.addEventListener("keydown", function (e) {

  if (e.keyCode === 37) {
    previous();
  }
  else if (e.keyCode === 39) {
    next();
  }
})

