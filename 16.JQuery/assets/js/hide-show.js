$(document).ready(function () {

    $('#hide').click(function () {

        // $('#display').css('display', 'none');



        // $('#display').hide();

        // $('#display').fadeOut(1000);

        $('#display').fadeOut(1000, function () {

            console.log('Element gizledildi');

        });

        console.log('Okey');

    });




    $('#show').click(function () {

        // $('#display').css('display', 'block');

        // $('#display').show();
        // $('#display').fadeIn(1000);

        $('#display').fadeIn(1000, function () {

            console.log('Element Gosterildi');

        });

    });



    $('#remove').click(function () {

        $('#display').fadeOut(1000, function () {


            $('#display').remove();


        });

        // $('#display').remove();

    });


    $('#addStudent').click(function () {

        // let list = document.querySelector('#students');


        // let li = document.createElement('li');

        // li.innerHTML = Date();

        // list.appendChild(li);



        // let li = $(`<li>Now</li>`);
        // let li = $(`<li>${Date()}</li>`);


        // let liObj = {

        //     html: Date()

        // };

        // let currentDate = Date();
        // let li = $('<li/>', {
        //     html: currentDate,
        //     class: 'liel active',
        //     pid: 20
        // });

        let genders = [
            {
                id: 1,
                name: 'Male'
            },
            {
                id: 2,
                name: 'Female'
            }
        ];


        let genderChoosen = $('#genderChoosen');

        // genders.forEach(function (el) {

        //     let option = $('<option/>', {
        //         value: el.id,
        //         html: el.name

        //     });
        //     genderChoosen.append(option);
        // });

        // $.each(genders,function (index, el) {

        //         let option = $('<option/>', {
        //             value: el.id,
        //             html: el.name

        //         });

        //         genderChoosen.append(option);

        //     });

        $(genders).each(function (index, el) {

            let option = $('<option/>', {
                value: el.id,
                html: el.name
            });

            genderChoosen.append(option);

        });


        // $('#students').append(li);

    });


});