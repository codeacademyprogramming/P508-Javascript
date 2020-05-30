// $(document).ready(first);
$(document).ready(second);


function second() {

    $('#cvForm').submit(function (e) {
        e.preventDefault();

        // let data = $(e.target).serialize();
        let data = $(e.target).serializeArray();

        console.log(data);


        // let data = new FormData($('#cvForm')[0]);
        // let data = new FormData(e.target);

        // console.log(data.get('surname'));


    });




}




function first() {


    $('#btnSend').click(function (e) {

        // let txtName = document.querySelector('#name');
        // txtName.value = 'Ibrahim'
        // let name = document.querySelector('#name').value;

        // let name = $('#name').val();

        // alert(name);

        // $('#name').val('Ibrahim')

        // $('#headContent').text('Cv formasi');
        // $('#headContent').text('<u>Cv</u> formasi');
        // $('#headContent').html('<u>Cv</u> formasi');


        // let surname = $('[name="surname"]').val();

        // alert(surname);

        // let birthday = $('[name="birthday"]').val();

        // alert(birthday);


        // let genderId = $('#genderId').val();

        // alert(genderId);

        // let addition = $('#addition').val();

        // alert(addition);

        // let agree = $('#agree').val();
        let agree = $('#agree').is(':checked');

        alert(agree);
    });


    $('#showData').click(function (e) {
        e.preventDefault();


        // let content = $('#headContent').html();
        let content = $('#headContent').text();

        console.log(content);
    });


}