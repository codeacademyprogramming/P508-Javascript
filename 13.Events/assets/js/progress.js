let allCheckBoxes = document.querySelectorAll('[type=checkbox]');

console.log(allCheckBoxes);

allCheckBoxes.forEach(el => {

    el.onchange = onChange;

});

function onChange() {
    let el = this;

    let progress = document.querySelector('.progress');

    let selected = document.querySelectorAll('[type=checkbox]:checked');
    let selectedCount = selected.length;
    let allCount = allCheckBoxes.length;
    let percent = (selectedCount / allCount) * 100;

    console.log(`${percent}%`);
    progress.style.width = `${percent}%`;

    console.log(el.checked)
    console.log(el.parentElement);


    if (el.checked) {
        el.parentElement.style.textDecoration = 'line-through';
    }
    else {
        el.parentElement.style.textDecoration = 'none';
    }
}