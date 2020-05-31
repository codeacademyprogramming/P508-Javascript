//http://kamranaeff1994-002-site3.ctempurl.com/api/Products
//https://localhost:44305/api/Products

let product = {
    "id": 0,
    "title": "string",
    "description": "string",
    "price": 0
}


// let products = [];


// products.push({
//     name: 'iPhone 7 32 GB Black',
//     price: 899
// });

// products.push({
//     name: 'Apple Macbook Air 13.3 Silver (MQD32)',
//     price: 1999
// });


$(document).ready(function () {

    $('#productCard').on("reset", function () {
        $('#productImage').removeAttr('src');

    });


    //post data
    $('#productCard').submit(function (e) {
        e.preventDefault();


        let formData = new FormData(e.target);

        let newProduct = { id: 0 };

        newProduct.title = formData.get('title');
        newProduct.description = formData.get('description');
        newProduct.price = parseInt(formData.get('price'));

        // console.log(newProduct);

        let pJson = JSON.stringify(newProduct);
        console.log(pJson);

        $.ajax({
            type: "POST",
            url: "https://localhost:44305/api/Products",
            data: JSON.stringify(newProduct),
            contentType: 'application/json',
            success: function (response) {
                console.log("UGURLUDUR", response);
                window.location.reload();
            },
            error: function (response) {
                console.log("UGURSUZDUR", response);
            }
        });

    });

    /*
    https://localhost:44305/api/Products
     */

    $.ajax({
        type: "GET",
        url: "https://localhost:44305/api/Products",
        //200
        success: function (products) {

            // console.log(products);
            let productList = $('#productNames');


            $(products).each(function (index, element) {

                // console.log(element.name);

                let li = $('<li/>', {
                    html: element.title,
                    class: 'list-group-item',
                    "data-id": element.id
                });

                $(productList).append(li);


                $(li).click(getDetails);

            });

        },
        // 400 - Bad Request
        // 404 - Not Found
        // 500 - Server Error  .....
        error: function (response) {
            console.log('ERROR >> ', response);
        }
    });






});




function getDetails() {

    // let id = this.getAttribute('data-id');
    // console.log(id);
    let productLi = $(this);

    // console.log('klik edildi');

    // console.log(productLi);
    //https://localhost:44305/api/Products/1



    //data-id
    let id = $(productLi).data('id');
    let myUrl = `https://localhost:44305/api/Products/${id}`;

    //https://localhost:44305/images/1.jpg
    // console.log(myUrl);


    $.ajax({
        type: "GET",
        url: myUrl,
        success: function (response) {
            console.log(response.title);

            $('#title').val(response.title);
            $('#description').val(response.description);
            $('#price').val(response.price);

            $('#productImage').attr('src', `https://localhost:44305/images/${response.image}`);

        },
        error: function (response) {
            console.log('ERROR >> ', response);
        }
    });

}