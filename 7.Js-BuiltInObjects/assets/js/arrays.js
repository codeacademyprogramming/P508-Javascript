// let numbers = [1, 2, 3, 6, 11, 43, 34332];

// console.log(typeof numbers);

// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);

// for (let index = 0; index < numbers.length; index++) {

//     console.log(numbers[index]);
// }

// const printElement = function(el) {
//     console.log(el);
// }

// numbers.forEach(printElement);

// numbers.forEach(function(el) {
//         console.log(el);
//     });


//arrows funcstions

// numbers.forEach((e, i) => console.log(e, i));

// numbers.forEach((el, index) => {
//     console.log(el, index);
// });

// function printElement(el)
// {
//     console.log(el);
// }



//--------------------------------------------------


// let arr = [];

// arr.push(1, 2, 3, 4);
// arr.push(222);
// arr.push('Tenbeller');
// arr.push(true);
// arr.push(false);

// arr.push(Date());


// console.log(arr);


// let arr = [1, 2, 3, 4, 5, 6];
// arr.push(7);

// console.log(arr);
// let last = arr.pop();
// console.log('last:', last, arr);

// arr.shift();   // ant...  pop()

// arr.unshift(111); // ant... push()


//'a'+'b'  ab
// 'b'+'a' ba

// [1,2,3]
// [4,5,6]

//[1,2,3,4,5,6]
//[4,5,6,1,2,3]


// let a1 = [1, 2, 3];
// let a2 = [4, 5, 'demo'];
// let a5 = [14, 15, 16];

// let a3 = a2.concat(a1);
// let a4 = a2.concat(a1, a5);

// console.log(a3);
// console.log(a4);

// let joined = a3.join('');

// let seperated = joined.split('');


// let joined = a3.join('-');

// let seperated = joined.split('-');

// console.log(joined);
// console.log(seperated);
// seperated.forEach(function(el){
//     console.log(el);
// });

// delete seperated[2];
// console.log(seperated);
// seperated.forEach(function(el){
//     console.log(el);
// });

// for (let index = 0; index < seperated.length; index++) {
//     console.log(seperated[index]);
// }

// seperated.splice(start,elCount);   // 

// seperated.slice(start,end)






let numbers = [11, 22, 23, 11, 14, 22, 0, 1, 5, 1];


// let result = numbers.filter(f1);

// function f1(value, index, arr) {
//     // console.log(value, index, arr);

//     // console.log(arr[index]);
//     // console.log(value);

//     return value == 3;
// }

let sorted = numbers.sort(function (a, b) {
    // return b - a;// return a - b;
    return a - b;
});


let result = sorted.filter(function (value, index, arr) {

    // arr[index]=> value;

    if (index != 0 && arr[index] != arr[index - 1])
        return true;
    else  if (index != 0)
        return false;


    return true;
});

console.log(result);


