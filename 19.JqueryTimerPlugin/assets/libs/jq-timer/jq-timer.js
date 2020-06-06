function isValid(val) {
    if (val == null)
        return false;

    if (isNaN(val))
        return false;

    return true;
}

function format(val) {
    if (val < 10)
        return `0${parseInt(val)}`;

    return val;
}


(function ($) {

    $.fn.timer = function (options) {
        let that = this;

        var settings = $.extend({
            digitColor: 'teal',
            color: 'white'
        }, options);




        $.each(that, function (index, item) {

            $(item).addClass('timer');

            for (let index = 0; index < 5; index++) {

                let li = $('<li/>');
                $(item).append(li);

            }

            // let time = $(item).attr('data-time');
            let time = $(item).data('time');
            let timeParts = time.split(':');

            let hours = timeParts[0];
            let minutes = timeParts[1];
            let seconds = timeParts[2];

            if (!isValid(hours) || !isValid(minutes) || !isValid(seconds)) {
                return;
            }

            $(item).addClass('running');
            let leds = $(item).children('li');

            let hourEl = leds[0];
            let minuteEl = leds[2];
            let secondEl = leds[4];

            $(hourEl).css({
                'background-color': settings.digitColor,
                'color': settings.color,
            }).text(format(hours));
            $(minuteEl).css({
                'background-color': settings.digitColor,
                'color': settings.color,
            }).text(format(minutes));
            $(secondEl).css({
                'background-color': settings.digitColor,
                'color': settings.color,
            }).text(format(seconds));

            $(item).find('li:nth-of-type(even)').text(':');


            let pid = setInterval(function () {

                if (seconds > 0) {
                    seconds--;
                }
                else if (minutes > 0) {
                    seconds = 59;
                    minutes--;
                }
                else if (hours > 0) {
                    minutes = 59;
                    seconds = 59;
                    hours--;
                }
                else {
                    $(item).removeClass('running');
                    clearInterval(pid);
                    $(item).removeAttr('pid', pid);
                }

                $(hourEl).text(format(hours));
                $(minuteEl).text(format(minutes));
                $(secondEl).text(format(seconds));

            }, 1000);

            $(item).attr('pid', pid);

            $(item).click(function () {

                let pid = $(item).attr('pid');
                $(item).removeClass('running');
                clearInterval(pid);
                $(item).removeAttr('pid', pid);

            });
        });



    }


})(jQuery);

