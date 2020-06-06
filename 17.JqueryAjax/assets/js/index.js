$(document).ready(function () {


    // let name = undefined; // 'demo';
    let name = null; // 'demo';

    let length = (name || '11111').length;
    // let length = (name??'12aaa3').length;

    console.log(length);

    // let operator = '-';

    // let result = operator == '+' ? 'toplama' : 'cixma';


    let eded = 0;

    let result = eded == 0 ? 'sifir' : (eded < 0 ? 'menfi' : 'musbet');

    console.log(result);

    // if (operator == '+') {
    //     console.log('toplama')
    // }
    // else {

    //     console.log('cixma')
    // }

    // return;




    $('#products').html('');

    $.ajax({
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Products",
        beforeSend: function () {
            $('.loader').addClass('show').fadeIn(1000);
        },
        success: function (response) {
            // console.log(response);


            $.each(response, function (index, item) {

                let col4 = $('<div/>', {
                    class: 'col-4 mt-4'
                });

                let productCard = `<div class="card">
                                    <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text">${item.description?.substr(0, 100)}</p>
                                        <a href="#" data-productid="${item.id}" class="btn btn-primary">Ətraflı</a>
                                        </div>
                                </div>`;

                $(col4).html(productCard);

                $('#products').append(col4);
                // console.log(item);
            });

            $('a[data-productid]').click(goToDetails);
        },
        fail: function (response) {
            console.log("ERROR", response);
        }

    })
        .always(function () {
            // console.log('Mehsular sorgulandi!');
            $('.loader').fadeOut(1000, function () {
                $('.loader').removeClass('show');
            });
        });


    console.log('Sened tam oxundu!');
    // $('.loader').fadeOut(1000, function () {
    //     $('.loader').removeClass('show');
    // });

});



function deleteProduct(e) {
    e.preventDefault();

    if (confirm("Silmək istədiyinizdən əminsiniz?") == true) {

        let id = $(e.currentTarget).attr('data-delete-id');

        $.ajax({
            type: "DELETE",
            url: `http://kamranaeff1994-002-site3.ctempurl.com/api/Products/${id}`,
            success: function (response) {

                alert('Mehsul silindi');
                // console.log(response);

                window.location.href = 'index.html';
            }, error: function (response) {
                console.log("ERROR", response);
            }
        });


    }



}


function goToDetails(e) {
    e.preventDefault();

    let id = $(e.currentTarget).attr('data-productid');

    $.ajax({
        type: "GET",
        url: `http://kamranaeff1994-002-site3.ctempurl.com/api/Products/${id}`,
        success: function (item) {
            // console.log(item);

            let col6 = $('<div/>', {
                class: 'col-6 offset-3'
            });


            let productCard = `<div class="card">
                                    <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}<span class="badge badge-warning">${item.price}₼</span></h5>
                                        <p class="card-text">${item.description}</p>
                                        <a href="javascript:window.location.reload()" class="btn btn-primary">Geri Qayit</a>
                                        <a href="#" data-delete-id="${item.id}"  class="btn btn-danger">Sil</a>
                                        </div>
                                </div>`;

            $(col6).html(productCard);

            $('#products').html('')
                .append(col6);


            $('a[data-delete-id]').click(deleteProduct);
        },
        error: function (response) {
            console.log("ERROR", response);
        }
    });
}