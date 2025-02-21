let fmpcBtn = document.getElementById('FMPC');
let fmprBtn = document.getElementById('FMPR');
let imgElement = document.getElementById('myImg');
let cityElement = document.getElementById('city')

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