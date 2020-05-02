// sessionStorage.setItem('author', 'P508');
localStorage.setItem('author', 'P508');


function showAuthorInfo() {
    // let author = sessionStorage.getItem('author');
    let author = localStorage.getItem('author');
    alert(author);
}

function clearAuthorInfo() {
    // sessionStorage.removeItem('author');
    localStorage.removeItem('author');
}

function clearAllInfo() {
    // sessionStorage.clear();
    localStorage.clear();
}



// let stu1 = new Student('Filankes', 'Filankesov', 'Kisi');


// console.log(stu1, JSON.stringify(stu1))
//JSON.stringify(stu1) //stu1 objectini stringe cevirecek


// let jsonStu1 = `{"name":"Filankes","surname":"Filankesov","gender":"Kisi"}`;

// stu1 = JSON.parse(jsonStu1);
// console.log(stu1);


// localStorage.setItem('student1', JSON.stringify(stu1));