let fmpcBtn = document.getElementById('FMPC');
let fmprBtn = document.getElementById('FMPR');
let imgElement = document.getElementById('myImg');
let cityElement = document.getElementById('city')
let menuItems = document.querySelectorAll(".sidebar ul li");
var notesPanel = document.getElementById("notesPanel");
let notesElement = document.getElementById('notes-btn')
let closeBtnNotes = document.getElementById('close-notes')
let closeBtnComments = document.getElementById('close-comments')
let commentsElement = document.getElementById('comments-btn')
let noteParentElement = document.getElementById('noteParent')
let concourBtn = document.getElementById('concour');
let quitElement = document.getElementById('quit');
let closeAskBtn=document.getElementById('close-ask');
let nonBtn=document.getElementById('non-btn');

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


notesElement.addEventListener('click', function () {
    if (notesPanel.style.left === "-350px" || notesPanel.style.left === "") {
        notesPanel.style.left = "0";
        noteParentElement.style.display = 'block';
    } else {
        notesPanel.style.left = "-350px"; // Slide out of view
        noteParentElement.style.display = 'none';
    }
})

closeBtnNotes.addEventListener('click', function () {
    notesPanel.style.left = "-350px";
    noteParentElement.style.display = 'none';
})


commentsElement.addEventListener('click', function () {
    if (commentsPanel.style.right === "-350px" || commentsPanel.style.right === "") {
        commentsPanel.style.right = "0";
    } else {
        commentsPanel.style.right = "-350px";
    }
})

closeBtnComments.addEventListener('click', function () {
    commentsPanel.style.right = "-350px";
})

concourBtn.addEventListener('click', function () {
    quitElement.style.display = 'flex';
    disableScrolling();
    
})

closeAskBtn.addEventListener('click',function(){
    quitElement.style.display='none';
})

nonBtn.addEventListener('click',function(){
    quitElement.style.display='none';
    document.body.style.overflow = "auto";
})

function disableScrolling() {
    document.body.style.overflow = "hidden";
}