var jquery = require("jquery");
window.$ = window.jQuery = jquery;
import 'bootstrap/dist/css/bootstrap.css';
var $ = require('jquery');
window.$ = $;
require('bootstrap');

$(document).ready(function() {
    const jqNext = $('.jq-next');
    const jqPrev = $('.jq-prev');
    const guys = $('.guy').length;
    var index = 1;

    jqNext.on('click', function () {
        var currentImg = $('.jq-active');
        var nextImg = currentImg.next();

        if (index >= guys) {
            jqNext.prop('disabled', true);
        }
        else {
            index++;
            jqPrev.prop('disabled', false);
            currentImg.removeClass('jq-active');
            nextImg.addClass('jq-active');
        }
        console.log(index, guys);
    });

    jqPrev.on('click', function () {
        var currentImg = $('.jq-active');
        var prevImg = currentImg.prev();

        jqNext.prop('disabled', false);
        if (index <= 1) {
            jqPrev.prop('disabled', true);
        }
        else {
            index--;
            jqNext.prop('disabled', false);
            currentImg.removeClass('jq-active');
            prevImg.addClass('jq-active');
        }
        console.log(index, guys);
    });
});