import $ from 'jquery'
import './css/style.css'

const google_url = 'https://www.google.com/'
const google_account = 'https://myaccount.google.com/';

const pathArray = [[$('#button_1'), $('#button_1_1'), $('#button_1_2'), $('#button_1_3'), $('#button_1_4')],
    [$('#button_2'), $('#button_2_1'), $('#button_2_2'), $('#button_2_3'), $('#button_2_4')],
    [$('#button_3'), $('#button_3_1'), $('#button_3_2'), $('#button_3_3'), $('#button_3_4')],
    [$('#button_4'), $('#button_4_1'), $('#button_4_2'), $('#button_4_3'), $('#button_4_4')],
    [$('#button_5'), $('#button_5_1')], 
    [$('#button_6'), $('#button_6_1')]];

$(document).ready ( function() {

    pathArray[0][0].css('border-bottom', '4px solid #4D8CF5');
    pathArray[0][0].css('color', '#4D8CF5');
    pathArray[0][1].css('fill', '#EA4335');
    pathArray[0][2].css('fill', '#FBBC04');
    pathArray[0][3].css('fill', '#4285F4');
    pathArray[0][4].css('fill', 'rgb(52, 168, 83)');
})

$('.menu__logo').click(function(e) {
    window.open(google_url);
});

$('.account-button__account-avatar').click(function(e) {
    window.open(google_account);
});

pathArray[0][0].click(function(e) {

    $(this).css('border-bottom', '4px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    pathArray[0][1].css('fill', '#EA4335');
    pathArray[0][2].css('fill', '#FBBC04');
    pathArray[0][3].css('fill', '#4285F4');
    pathArray[0][4].css('fill', 'rgb(52, 168, 83)');

    pathArray[5][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[5][0].css('border-bottom', 'none');
    pathArray[5][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[4][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[4][0].css('border-bottom', 'none');
    pathArray[4][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[2][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][0].css('border-bottom', 'none');
    pathArray[2][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[3][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][0].css('border-bottom', 'none');
    pathArray[3][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[1][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][0].css('border-bottom', 'none');
    pathArray[1][0].css('color', 'rgba(0, 0, 0, 0.49)');
});

pathArray[2][0].click(function(e) {
     
    $(this).css('border-bottom', '4px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    pathArray[0][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][0].css('border-bottom', 'none');
    pathArray[0][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[5][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[5][0].css('border-bottom', 'none');
    pathArray[5][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[4][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[4][0].css('border-bottom', 'none');
    pathArray[4][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[2][1].css('fill', '#EA4335');
    pathArray[2][2].css('fill', '#FBBC04');
    pathArray[2][3].css('fill', '#4285F4');
    pathArray[2][4].css('fill', 'rgb(52, 168, 83)');

    pathArray[3][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][0].css('border-bottom', 'none');
    pathArray[3][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[1][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][0].css('border-bottom', 'none');
    pathArray[1][0].css('color', 'rgba(0, 0, 0, 0.49)');
});

pathArray[5][0].click(function(e) {
       
    $(this).css('border-bottom', '4px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    pathArray[0][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][0].css('border-bottom', 'none');
    pathArray[0][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[5][1].css('fill', '#4285F4');

    pathArray[4][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[4][0].css('border-bottom', 'none');
    pathArray[4][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[2][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][0].css('border-bottom', 'none');
    pathArray[2][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[3][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][0].css('border-bottom', 'none');
    pathArray[3][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[1][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][0].css('border-bottom', 'none');
    pathArray[1][0].css('color', 'rgba(0, 0, 0, 0.49)');
});

pathArray[1][0].click(function(e) {

    $(this).css('border-bottom', '4px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    pathArray[0][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][0].css('border-bottom', 'none');
    pathArray[0][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[5][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[5][0].css('border-bottom', 'none');
    pathArray[5][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[4][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[4][0].css('border-bottom', 'none');
    pathArray[4][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[2][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][0].css('border-bottom', 'none');
    pathArray[2][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[3][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][0].css('border-bottom', 'none');
    pathArray[3][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[1][1].css('fill', '#EA4335');
    pathArray[1][2].css('fill', '#FBBC04');
    pathArray[1][3].css('fill', '#4285F4');
    pathArray[1][4].css('fill', 'rgb(52, 168, 83)');
});

pathArray[3][0].click(function(e) {

    $(this).css('border-bottom', '4px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    pathArray[0][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][0].css('border-bottom', 'none');
    pathArray[0][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[5][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[5][0].css('border-bottom', 'none');
    pathArray[5][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[4][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[4][0].css('border-bottom', 'none');
    pathArray[4][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[2][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][0].css('border-bottom', 'none');
    pathArray[2][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[3][1].css('fill', '#EA4335');
    pathArray[3][2].css('fill', '#FBBC04');
    pathArray[3][3].css('fill', '#4285F4');
    pathArray[3][4].css('fill', 'rgb(52, 168, 83)');

    pathArray[1][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][0].css('border-bottom', 'none');
    pathArray[1][0].css('color', 'rgba(0, 0, 0, 0.49)');
});

pathArray[4][0].click(function(e) {
       
    $(this).css('border-bottom', '4px solid #4D8CF5');
    $(this).css('color', '#4D8CF5');

    pathArray[0][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[0][0].css('border-bottom', 'none');
    pathArray[0][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[5][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[5][0].css('border-bottom', 'none');
    pathArray[5][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[4][1].css('fill', '#4285F4');

    pathArray[2][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[2][0].css('border-bottom', 'none');
    pathArray[2][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[3][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[3][0].css('border-bottom', 'none');
    pathArray[3][0].css('color', 'rgba(0, 0, 0, 0.49)');

    pathArray[1][1].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][2].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][3].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][4].css('fill', 'rgba(0, 0, 0, 0.49)');
    pathArray[1][0].css('border-bottom', 'none');
    pathArray[1][0].css('color', 'rgba(0, 0, 0, 0.49)');
})
