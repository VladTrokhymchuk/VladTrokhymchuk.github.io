// borger
function animateHamburger() {
    $('#hamburger-button').toggleClass('open');
    /*animation from burger to X*/

    // $("body").css('overflow', 'hidden');
}

function slideMenu() {
    $('.navbar').toggleClass('open');
    /*animation for slide down menu*/

}

function slideLogo() {
    $('.header__logo').toggleClass('header__logo--open');
    /*animation for slide down menu*/
}

$('#hamburger-button').click(function () {
    // console.log('trying');
    animateHamburger();
    slideMenu(); /*attaching click handler to the burger button*/
    slideLogo();

    if (window && window.innerWidth < 1024) {
        if ($('#hamburger-button').hasClass('open')) {
            $("body").css('overflow', 'hidden');
        } else {
            $("body").css('overflow', 'unset');
        }
    }

});


//get_field('');

// config
const fontMin = 15; //px
const fontMax = 35; //px
const valueAttributeName = 'tag-value'; // tag in which we puted value
const tagsSelector = '[tag-value]'; // tags elemnts selector
const computeColor = true; // flag, if true color will be computed with size

// mechanism
const values = [];
document.querySelectorAll(tagsSelector).forEach(tag => {
  const tagValue = tag.getAttribute(valueAttributeName);
  
  values.push({
    el: tag,
    val: Number(tagValue)
  })
});

const valuesSorted = values.sort((a, b) => a.val - b.val);
const valueMax = valuesSorted[valuesSorted.length-1].val;

valuesSorted.forEach(x => {
  const { val, el } = x;
  
  const fontSize = Math.floor(
    (val/valueMax) * (fontMax-fontMin+1) + fontMin
  );
  
  if (computeColor) {
    const color = Math
    .abs(
      Math.floor(((val/valueMax) * 200) - 200)
    )
    .toString(16)
    .repeat(3); 
    
    el.style.color = `#${color}`;
  }
  
  el.style.fontSize = `${fontSize}px`;
});