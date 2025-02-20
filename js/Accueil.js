let fmpcBtn = document.getElementById('FMPC');
let fmprBtn = document.getElementById('FMPR');
let imgElement = document.getElementById('myImg');
let cityElement = document.getElementById('city')
let menuItems = document.querySelectorAll(".sidebar ul li");

fmprBtn.addEventListener('click', function () {
    imgElement.setAttribute('src', './images/images_FMPC.png');
    cityElement.innerHTML = 'Rabat';
    fmprBtn.classList.add('active');
    fmpcBtn.classList.remove('active');
})

fmpcBtn.addEventListener('click', function () {
    imgElement.setAttribute('src', './images/images_injection.png');
    cityElement.innerHTML = 'Casablanca';
    fmprBtn.classList.remove('active');
    fmpcBtn.classList.add('active');
})


document.addEventListener("DOMContentLoaded", function () {
    // let menuItems = document.querySelectorAll(".sidebar ul li");
    let sidebar = document.querySelector(".sidebar");
    let closeSidebarBtn = document.querySelector(".close-sidebar");
    let isCollapsed = false;

    closeSidebarBtn.addEventListener("click", function () {
        isCollapsed = !isCollapsed;
        sidebar.classList.toggle("collapsed");
        isCollapsed ? closeSidebarBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>' :
            closeSidebarBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    });
});


menuItems.forEach((item) => {
    item.addEventListener('click', function () {
        menuItems.forEach(li => li.classList.remove("active"));
        this.classList.add("active");
    })
})