import $ from 'jquery'
import './css/style.css'

const google_url = 'https://www.google.com/'
const google_account = 'https://myaccount.google.com/';

$('.menu__logo').click(function(e) {
    window.open(google_url);
});

$('.account-button__account-avatar').click(function(e) {
    window.open(google_account);
});

$('.nav-menu__button-all').click(function(e) {

    $(this).css('border-bottom', '3px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    $('.nav-menu__button-all-b').css('fill', '#EA4335');
    $('.nav-menu__button-all-c').css('fill', '#FBBC04');
    $('.nav-menu__button-all-d').css('fill', '#4285F4');
    $('.nav-menu__button-all-a').css('fill', 'rgb(52, 168, 83)');

    $('.nav-menu__button-more-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-more').css('border-bottom', 'none');
    $('.nav-menu__button-more').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-map-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-map').css('border-bottom', 'none');
    $('.nav-menu__button-map').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-picture-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture').css('border-bottom', 'none');
    $('.nav-menu__button-picture').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-book-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book').css('border-bottom', 'none');
    $('.nav-menu__button-book').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-video-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video').css('border-bottom', 'none');
    $('.nav-menu__button-video').css('color', 'rgba(0, 0, 0, 0.49)');
});

$('.nav-menu__button-picture').click(function(e) {
     
    $(this).css('border-bottom', '3px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    $('.nav-menu__button-all-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all').css('border-bottom', 'none');
    $('.nav-menu__button-all').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-more-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-more').css('border-bottom', 'none');
    $('.nav-menu__button-more').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-map-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-map').css('border-bottom', 'none');
    $('.nav-menu__button-map').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-picture-b').css('fill', '#EA4335');
    $('.nav-menu__button-picture-c').css('fill', '#FBBC04');
    $('.nav-menu__button-picture-d').css('fill', '#4285F4');
    $('.nav-menu__button-picture-a').css('fill', 'rgb(52, 168, 83)');

    $('.nav-menu__button-book-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book').css('border-bottom', 'none');
    $('.nav-menu__button-book').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-video-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video').css('border-bottom', 'none');
    $('.nav-menu__button-video').css('color', 'rgba(0, 0, 0, 0.49)');
});

$('.nav-menu__button-more').click(function(e) {
       
    $(this).css('border-bottom', '3px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    $('.nav-menu__button-all-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all').css('border-bottom', 'none');
    $('.nav-menu__button-all').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-more-d').css('fill', '#4285F4');

    $('.nav-menu__button-map-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-map').css('border-bottom', 'none');
    $('.nav-menu__button-map').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-picture-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture').css('border-bottom', 'none');
    $('.nav-menu__button-picture').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-book-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book').css('border-bottom', 'none');
    $('.nav-menu__button-book').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-video-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video').css('border-bottom', 'none');
    $('.nav-menu__button-video').css('color', 'rgba(0, 0, 0, 0.49)');
});

$('.nav-menu__button-video').click(function(e) {

    $(this).css('border-bottom', '3px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    $('.nav-menu__button-all-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all').css('border-bottom', 'none');
    $('.nav-menu__button-all').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-more-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-more').css('border-bottom', 'none');
    $('.nav-menu__button-more').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-map-d').css('fill', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-picture-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture').css('border-bottom', 'none');
    $('.nav-menu__button-picture').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-book-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book').css('border-bottom', 'none');
    $('.nav-menu__button-book').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-video-b').css('fill', '#EA4335');
    $('.nav-menu__button-video-c').css('fill', '#FBBC04');
    $('.nav-menu__button-video-d').css('fill', '#4285F4');
    $('.nav-menu__button-video-a').css('fill', 'rgb(52, 168, 83)');
});

$('.nav-menu__button-book').click(function(e) {

    $(this).css('border-bottom', '3px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    $('.nav-menu__button-all-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all').css('border-bottom', 'none');
    $('.nav-menu__button-all').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-more-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-more').css('border-bottom', 'none');
    $('.nav-menu__button-more').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-map-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-map').css('border-bottom', 'none');
    $('.nav-menu__button-map').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-picture-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture').css('border-bottom', 'none');
    $('.nav-menu__button-picture').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-book-b').css('fill', '#EA4335');
    $('.nav-menu__button-book-c').css('fill', '#FBBC04');
    $('.nav-menu__button-book-d').css('fill', '#4285F4');
    $('.nav-menu__button-book-a').css('fill', 'rgb(52, 168, 83)');

    $('.nav-menu__button-video-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video').css('border-bottom', 'none');
    $('.nav-menu__button-video').css('color', 'rgba(0, 0, 0, 0.49)');
});

$('.nav-menu__button-map').click(function(e) {
       
    $(this).css('border-bottom', '3px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    $('.nav-menu__button-all-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-all').css('border-bottom', 'none');
    $('.nav-menu__button-all').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-more-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-more').css('border-bottom', 'none');
    $('.nav-menu__button-more').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-map-d').css('fill', '#4285F4');

    $('.nav-menu__button-picture-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-picture').css('border-bottom', 'none');
    $('.nav-menu__button-picture').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-book-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-book').css('border-bottom', 'none');
    $('.nav-menu__button-book').css('color', 'rgba(0, 0, 0, 0.49)');

    $('.nav-menu__button-video-b').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-c').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-d').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video-a').css('fill', 'rgba(0, 0, 0, 0.49)');
    $('.nav-menu__button-video').css('border-bottom', 'none');
    $('.nav-menu__button-video').css('color', 'rgba(0, 0, 0, 0.49)');
})
