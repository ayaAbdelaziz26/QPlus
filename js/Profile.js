let menuItems = document.querySelectorAll(".sidebar ul li");
let optionOneElement=document.getElementById('optionOne');
let optionTwoElement=document.getElementById('optionTwo');


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

optionOneElement.addEventListener('click',function(){
    optionOneElement.classList.add('active-option')
    optionTwoElement.classList.remove('active-option')
})

optionTwoElement.addEventListener('click',function(){
    optionTwoElement.classList.add('active-option')
    optionOneElement.classList.remove('active-option')
})


document.addEventListener("DOMContentLoaded", function () {
    let leftOptions = document.querySelectorAll(".left-side-option");
    let rightSide = document.querySelector(".right-side");

    leftOptions.forEach((option, index) => {
        option.addEventListener("click", function () {
            leftOptions.forEach(opt => opt.classList.remove("active-option"));
            this.classList.add("active-option");

            if (index === 0) {
                rightSide.innerHTML = `
                    <div class="profile">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="field">
                        <div class="inputOne">
                            <label>Prenom <span>*</span></label>
                            <input type="text">
                        </div>
                        <div class="inputOne">
                            <label>Nom de famille <span>*</span></label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="field">
                        <div class="inputOne">
                            <label>Nom d'utilisateur <span>*</span></label>
                            <input type="text">
                        </div>
                        <div class="inputOne">
                            <label>E-mail (you can't edit) <span>*</span></label>
                            <input type="email">
                        </div>
                    </div>
                    <div class="field">
                        <div class="inputOne">
                            <label>Faculté <span>*</span></label>
                            <input type="text">
                        </div>
                    </div>
                `;
            } else if (index === 1) {
                rightSide.innerHTML = `
                    <div class="password-change-section">
                        <h3>Mise à Jour du Mot de Passe</h3>
                        <p>Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé.</p>

                        <div class="field">
                            <div class="inputOne">
                                <label>Mot de Passe Actuel <span>*</span></label>
                                <input type="password">
                            </div>
                        </div>

                        <div class="field">
                            <div class="inputOne">
                                <label>Nouveau Mot de Passe <span>*</span></label>
                                <input type="password">
                            </div>
                            <div class="inputOne">
                                <label>Confirmer le Mot de Passe <span>*</span></label>
                                <input type="password">
                            </div>
                        </div>

                        <button class="save-btn">Enregistrer</button>
                    </div>
                `;
            }
        });
    });
});

