// borger
function animateHamburger() {
    $('#hamburger-button').toggleClass('open');
}

function slideMenu() {
    $('.navbar').toggleClass('open');
}

function slideLogo() {
    $('.header__logo').toggleClass('header__logo--open');
}

$('#hamburger-button').click(function () {
    animateHamburger();
    slideMenu();
    slideLogo();

    if (window && window.innerWidth < 1024) {
        if ($('#hamburger-button').hasClass('open')) {
            $("body").css('overflow', 'hidden');

        } else {
            $("body").css('overflow', 'unset');
        }
    }

});
$('.menu a').click(function () {
    animateHamburger();
    slideMenu();
    slideLogo();
    $("body").css('overflow', 'unset');
});