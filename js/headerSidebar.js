let menuItems = document.querySelectorAll(".sidebar ul li");

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

document.addEventListener("DOMContentLoaded", function () {
    const modeBtn = document.getElementById("mode-btn");
    const profileBtn = document.getElementById("profile-btn");
    const modeDropdown = document.querySelector(".mode-dropdown");
    const profileDropdown = document.querySelector(".profile-dropdown");

    // Toggle dropdown visibility
    function toggleDropdown(dropdown) {
        dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
    }

    // Event listeners for dropdown buttons
    modeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleDropdown(modeDropdown);
        profileDropdown.style.display = "none"; // Close the other dropdown
    });

    profileBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleDropdown(profileDropdown);
        modeDropdown.style.display = "none"; // Close the other dropdown
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function () {
        modeDropdown.style.display = "none";
        profileDropdown.style.display = "none";
    });

    // Prevent dropdowns from closing when clicking inside
    modeDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    profileDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Dark mode toggle functionality
    document.getElementById("light-mode").addEventListener("click", function () {
        document.body.classList.remove("dark-theme");
    });

    document.getElementById("dark-mode").addEventListener("click", function () {
        document.body.classList.add("dark-theme");
    });
});
