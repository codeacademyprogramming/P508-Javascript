const patternPrice = /^\d+$/g;

$(document).ready(function () {

    $('#product').validate({
        highlight: function (element) {
            $(element).removeClass('is-valid').addClass('is-invalid');
        },
        unhighlight: function (element) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        }
    });


    

    $('#product').submit(function (e) {
        e.preventDefault();

        if ($(e.target).valid() == false) {
            return;
        }

        e.preventDefault();

        let data = $(e.currentTarget).serializeArray();


        console.log(data);

        let obj = {};

        $.each(data, function (index, item) {

            if (patternPrice.test(item.value)) {
                obj[item.name] = parseInt(item.value);
            }
            else
                obj[item.name] = item.value;
        });

        // console.log(obj);

        let jsonObj = JSON.stringify(obj);
        console.log(jsonObj);

        $.ajax({
            type: "POST",
            url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Products",
            data: jsonObj,
            // dataType: "dataType",
            contentType: "application/json",

            success: function (response) {

                alert('Mehsul Elave olundu');
                // console.log(response);

                window.location.href = 'index.html';
            },
            error: function (response) {
                console.log("ERROR", response);
            }
        });


    });
});