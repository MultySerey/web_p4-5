var jquery = require("jquery");
window.$ = window.jQuery = jquery;
import 'bootstrap/dist/css/bootstrap.css';
var $ = require('jquery');
window.$ = $;
require('bootstrap');

$(document).ready(function () {
    var myModal = $('#myModal');
    $(".jq-btn").on('click', function () {
        myModal.attr("style", "display:block");
        console.log('modal open');
    });
    $('.myClose').on('click', function () {
        myModal.attr("style", "display:none");
        console.log('modal close');
    });

    const jqNext = $('.jq-next');
    const jqPrev = $('.jq-prev');
    const guys = $('.guy');
    var index = 0;

    jqNext.on('click', function () {
        const nextIndex = index + 1;
        if (nextIndex < guys.length - 1) {
            jqPrev.prop('disabled', false);
        }
        else {
            jqNext.prop('disabled', true);
        }
        const currentGuy = $("[data-index=\"" + index + "\"]"),
            nextGuy = $("[data-index=\"" + nextIndex + "\"]");

        currentGuy.attr('data-status', 'after');
        nextGuy.attr('data-status', 'active');
        index = nextIndex;
    });

    jqPrev.on('click', function () {
        const prevIndex = index - 1;
        if (prevIndex > 0) {
            jqNext.prop('disabled', false);
        }
        else {
            jqPrev.prop('disabled', true);
        }
        const currentGuy = $("[data-index=\"" + index + "\"]"),
        prevGuy = $("[data-index=\"" + prevIndex + "\"]");

        currentGuy.attr('data-status', 'unknown');
        prevGuy.attr('data-status', 'active');
        index = prevIndex;
    });
});