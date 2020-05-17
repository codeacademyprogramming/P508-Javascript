window.addEventListener('load',onLoad);


function onLoad()
{
    let myForm  = document.querySelector('#myForm');

    myForm.addEventListener('submit',myFormSubmit);
}


function myFormSubmit(e)
{
    const formData = new FormData(e.target);

    // let txtName = document.querySelector('[]');

    console.log(formData.get('surname'));
    e.preventDefault();
    console.log('submit olundu');
}