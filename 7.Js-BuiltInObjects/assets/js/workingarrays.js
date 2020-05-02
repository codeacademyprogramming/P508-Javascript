function toString2(value, length) {

    let currentlength = value.toString().length;
    length = length - currentlength;
    let result = `${'0'.repeat(length)}${value.toString()}`;

    return result;
}


function setTime(monitorId,time) {
    let positions = [0, 2, 4];
    let display = document.querySelector(`#${monitorId}`);

    // let time = '01:02:03'; //['01','02','03']

    let timeParts = time.split(':');

    for (let index = 0; index < timeParts.length; index++) {

        let val = timeParts[index];
        let position = positions[index];

        display.children[position].textContent = toString2(val, 2);


    }







    // display.children[0].innerHtml='';
    // display.children[2].innerHtml='';
    // display.children[4].innerHtml='';

}
