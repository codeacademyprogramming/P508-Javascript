


let student = new Object();
student.name = 'Filankes';
student.surname = 'Filankesov';
student.fullName = function(){
    return "Demo Info";
}
console.log(student);

// literal constructor
let person = {
    name: 'Filankes',
    surname: 'Filankesov'
};

console.log(person);



function Book(name, author) {
    this.name = name;
    this.author = author;

    this.fullName = function(){
        return "Demo Info";
    }
}

let book = new Book('Test Book', 'Author');
// book.fullName = function(){
//     return "Demo Info";
// }


console.log(book);

