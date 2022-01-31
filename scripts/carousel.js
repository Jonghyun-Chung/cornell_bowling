const SLIDES = $(".slide");
const CIRCLES = $('.circle');

function nextSlide() {
    let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1;
    if (nextNum > SLIDES.length) {
        nextNum = 1;
    }
    showSlide(nextNum);
}

function prevSlide() {
    let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1;
    if (prevNum < 0) {
        prevNum = SLIDES.length;
    }
    showSlide(prevNum);
}

function showSlide(num) {
    let notHidden = $(".slide:not(.hidden)")
    let currentSlide = SLIDES.eq(num - 1);
    let beforeSlide = SLIDES.eq(SLIDES.index(notHidden));
    let currentCircle = CIRCLES.eq(num - 1)
    let beforeCircle = CIRCLES.eq(SLIDES.index(notHidden));
    beforeSlide.addClass('hidden');
    currentSlide.removeClass('hidden');
    beforeCircle.removeClass('filled');
    currentCircle.addClass('filled');
}

$(document).ready(function () {
    setInterval(function () {
        nextSlide();
    }, 8000);
})

$('#left-arrow').click(function () {
    prevSlide();
})

$('#right-arrow').click(function () {
    nextSlide();
})

CIRCLES.click(function () {
    let id = $(this).attr('id').slice(6);
    showSlide(id);
})
