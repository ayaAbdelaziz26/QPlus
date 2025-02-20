let fmpcBtn = document.getElementById('FMPC');
let fmprBtn = document.getElementById('FMPR');
let imgElement = document.getElementById('myImg');
let cityElement = document.getElementById('city')
let menuItems = document.querySelectorAll(".sidebar ul li");

document.addEventListener("DOMContentLoaded", function () {
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