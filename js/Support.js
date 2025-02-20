let menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach((item)=>{
    item.addEventListener('click',function(){
        menuItems.forEach(li => li.classList.remove("active"));
            this.classList.add("active");
    })
})


document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".sidebar ul li");
    let sidebar = document.querySelector(".sidebar");
    let closeSidebarBtn = document.querySelector(".close-sidebar");
    let isCollapsed=false;

    closeSidebarBtn.addEventListener("click", function () {
        isCollapsed=!isCollapsed;
        sidebar.classList.toggle("collapsed");
        isCollapsed?closeSidebarBtn.innerHTML='<i class="fa-solid fa-chevron-right"></i>'
        :closeSidebarBtn.innerHTML='<i class="fa-solid fa-chevron-left"></i>';
    });
});