var notesPanel = document.getElementById("notesPanel");
let notesElement = document.getElementById('notes-btn')
let closeBtnNotes = document.getElementById('close-notes')
let closeBtnComments = document.getElementById('close-comments')
let commentsElement = document.getElementById('comments-btn')
let noteParentElement = document.getElementById('noteParent')
let concourBtn = document.getElementById('concour');
let quitElement = document.getElementById('quit');
let closeAskBtn = document.getElementById('close-ask');
let nonBtn = document.getElementById('non-btn');


notesElement.addEventListener('click', function () {
    if (notesPanel.style.left === "-350px" || notesPanel.style.left === "") {
        notesPanel.style.left = "0";
        noteParentElement.style.display = 'block';
    } else {
        notesPanel.style.left = "-350px";
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

closeAskBtn.addEventListener('click', function () {
    quitElement.style.display = 'none';
})

nonBtn.addEventListener('click', function () {
    quitElement.style.display = 'none';
    document.body.style.overflow = "auto";
})

function disableScrolling() {
    document.body.style.overflow = "hidden";
}