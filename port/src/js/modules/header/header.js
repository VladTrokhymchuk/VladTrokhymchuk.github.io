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



///crash--close
let crashClose = $('.warning-close');
crashClose.click(function () {
  $(this).parent().fadeOut();
});

//tag item
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
const valueMax = valuesSorted[valuesSorted.length - 1].val;

valuesSorted.forEach(x => {
  const {
    val,
    el
  } = x;

  const fontSize = Math.floor(
    (val / valueMax) * (fontMax - fontMin + 1) + fontMin
  );

  if (computeColor) {
    const color = Math
      .abs(
        Math.floor(((val / valueMax) * 200) - 200)
      )
      .toString(16)
      .repeat(3);

    el.style.color = `#${color}`;
  }

  el.style.fontSize = `${fontSize}px`;
});


///btn
$(".btn__arrow-animate").each(function (i, el) {
  var tl = new TimelineMax({
    paused: true
  });
  var t = tl
    .set($(el).find('.wrap_btn'), {
      overwrite: "all"
    })
    .to($(el).find('.front'), 0.4, {
      y: "-50px",
      rotation: 15,
      ease: "power1.inOut",
      transformOrigin: "right center",
      overwrite: "all"
    }, 0)
    .from($(el).find('.back'), 0.4, {
      y: "50px",
      top: 0,
      rotation: 15,
      ease: "power1.inOut",
      transformOrigin: "left center",
      overwrite: "all"
    }, 0)
    .from($(el).find('.arrow-icon-hide > img'), 0.4, {
      x: "-50px",
      ease: "power1.inOut",
      overwrite: "all"
    }, 0)
    .to($(el).find('.arrow-icon-show > img'), 0.4, {
      x: "50px",
      ease: "power1.inOut",
      overwrite: "all"
    }, 0);
  el.animation = t;

  $(el).on("mouseenter", function () {
    this.animation.play();
  }).on("mouseleave", function () {
    this.animation.reverse();
  });
});