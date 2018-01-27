$(document).ready(function () {
    setTimeout(function () {
        var vinterval = setInterval(function () {
            var $loader = $('#loader-wrapper');
            var val = $loader.css('opacity');
            val -= 0.016;
            $loader.css({opacity: val});
        }, 100);
        setTimeout(function () {
            clearInterval(vinterval);
            $('#loader-wrapper').hide();
        }, 6000);
    }, 3000);
});