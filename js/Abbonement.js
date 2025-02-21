
    const steps = document.querySelectorAll(".step");
    const options = document.querySelectorAll(".option");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const activationOptionsElement=document.getElementById('activation-options');
    const whatssappElement=document.getElementById('whatssapp')
    const paymentElement=document.getElementById('payment')
    const uploadElement=document.getElementById('uploadSection');
    const siteElement=document.getElementById('site');
    const finishElement=document.getElementById('finish')

    let currentStep = 0;

    function updateSteps() {
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });

        if (currentStep === 0) {
            prevButton.disabled = true;
            prevButton.classList.remove("enabled");
            whatssappElement.style.display='block';
            paymentElement.style.display='none';
            activationOptionsElement.style.display='flex';
            uploadElement.style.display='none';
            finishElement.style.display='none';
        } else if(currentStep===1){
            prevButton.disabled = false;
            prevButton.classList.add("enabled");
            whatssappElement.style.display='none';
            paymentElement.style.display='flex';
            activationOptionsElement.style.display='flex';
            uploadElement.style.display='none';
            finishElement.style.display='none';
        }

        else if(currentStep===2){
            nextButton.innerText='Envoyer';
            nextButton.style.backgroundColor='#11bc7e';
            prevButton.disabled = false;
            prevButton.classList.add("enabled");
            whatssappElement.style.display='none';
            paymentElement.style.display='flex';
            activationOptionsElement.style.display='none';
            uploadElement.style.display='block';
            finishElement.style.display='none';
        }

        else{
            siteElement.style.display='none'
            whatssappElement.style.display='none';
            paymentElement.style.display='none';
            finishElement.style.display='flex';
        }
    }

    options.forEach((option, index) => {
        option.addEventListener("click", function () {
            options.forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");

            if (currentStep < steps.length - 1) {
                currentStep++;
                updateSteps();
            }
        });
    });

    nextButton.addEventListener("click", function () {

        if (currentStep < steps.length) {
            currentStep++;
            updateSteps();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentStep > 0) {
            currentStep--;
            updateSteps();
        }
    });

    const uploadBox = document.getElementById("uploadBox");
    const fileInput = document.getElementById("fileUpload");
    const fileNameDisplay = document.getElementById("fileName");

    if (!uploadBox || !fileInput || !fileNameDisplay) {
        console.error("One or more elements not found. Check IDs in HTML.");
    } else {
        setupFileUpload(uploadBox, fileInput, fileNameDisplay);
    }

function setupFileUpload(uploadBox, fileInput, fileNameDisplay) {
    uploadBox.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            fileNameDisplay.textContent = `Fichier sélectionné: ${fileInput.files[0].name}`;
        } else {
            fileNameDisplay.textContent = "";
        }
    });
}

