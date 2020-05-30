$(document).ready(function () {


    $('#btnTeal').click(function (e) {


        let state = $('.sidebar').attr('state');

        if (state == 'on') {
            $('.sidebar').removeClass('orange');
            $('.sidebar').removeAttr('pid');
        }


    })

    $('#btnOrange').click(function (e) {

        $('.sidebar').addClass('orange show')
            .addClass('active');

        $('.sidebar').attr('pid', 10);

    });


    $('#next').click(function () {

        let currentMenuItem = $('.sidebar > nav > ul> li.active');

        let next = $(currentMenuItem).next('li');
        if (next.length == 0) {
            next = $(currentMenuItem).parent().find('li:first-child');
        }
        $(currentMenuItem).removeClass('active');
        $(next).addClass('active');

        console.log(next);

    });

    $('#prev').click(function () {
        let currentMenuItem = $('.sidebar > nav > ul> li.active');

        let prev = $(currentMenuItem).prev('li');

        if (prev.length == 0) {
            prev = $(currentMenuItem).siblings('li:last-of-type');
        }

        $(currentMenuItem).removeClass('active');
        $(prev).addClass('active');

        console.log(prev, currentMenuItem);

    });


});