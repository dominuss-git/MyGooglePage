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