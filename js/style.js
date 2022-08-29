new WOW().init();
// wow
$('.phone').mask("+7 (999) 999 - 99 - 99");
// mask
$(".quest-block__1").click(function() {
    $(".quest-block__text-1").slideToggle();
    $(".quest-block__btn-1").toggleClass("quest-block__btn-active");
});
$(".quest-block__2").click(function() {
    $(".quest-block__text-2").slideToggle();
    $(".quest-block__btn-2").toggleClass("quest-block__btn-active");
});
$(".quest-block__3").click(function() {
    $(".quest-block__text-3").slideToggle();
    $(".quest-block__btn-3").toggleClass("quest-block__btn-active");
});
$(".quest-block__4").click(function() {
    $(".quest-block__text-4").slideToggle();
    $(".quest-block__btn-4").toggleClass("quest-block__btn-active");
});
$(".quest-block__5").click(function() {
    $(".quest-block__text-5").slideToggle();
    $(".quest-block__btn-5").toggleClass("quest-block__btn-active");
});
// quest
$('.header-burger').click(function() {
    $('.menu-popup').addClass('menu-popup__active');
});
$('.menu-popup__close').click(function() {
     $('.menu-popup').removeClass('menu-popup__active');
});
// menu
$('.popup-before,.popup-out').on("click", function() {
    $('.popup').css('display', 'none');
    document.body.style.overflow = 'visible';
});
$('.header-contact__call,.footer-contact__call,.footer-btn, .product-preview__price-btn, .safe-info__btns-2, .client-block__btn').on("click", function() {
    $('.popup').css('display', 'flex');
    document.body.style.overflow = 'hidden';
});
// popup
const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
}
// slow scroll
