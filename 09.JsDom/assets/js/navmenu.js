function toggleSidebar(e) {
    e.preventDefault();

    let btn = e.currentTarget;

    let sidebar = btn.parentElement.parentElement;


    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
    else {
        sidebar.classList.add('open');
    }

    console.log(sidebar);
}


let btn = document.querySelector('.side-toggle');

btn.onclick = toggleSidebar;