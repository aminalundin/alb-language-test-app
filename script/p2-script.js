

const clearResult = document.querySelector("button#clear-button");
const clearForm = document.querySelector("button#clear-form-button");
const checkButton = document.querySelector("button#check-button");
const menu = document.querySelector("button#menu-button");



menu.addEventListener("click", function (event) {
    console.log("click");
});


// FUNCTIONS

function displayMenu() {
    let burgerMenu = document.getElementById("burger_menu");


    if (burgerMenu.style.display === "none") {
        burgerMenu.style.display = "block";

    } else {
        burgerMenu.style.display = "none";
    }
};

// Function to check input value and update icons
function checkInput(inputElement, correctValue, passElementId, failElementId) {
    const value = inputElement.value.trim();
    const pass = document.getElementById(passElementId);
    const fail = document.getElementById(failElementId);

    if (value === correctValue) {
        pass.style.display = "block";
        fail.style.display = "none";
    } else {
        pass.style.display = "none";
        fail.style.display = "block";
    }
}

// Event listener for individual form submissions
// document.querySelectorAll('form').forEach(form => {
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const input = form.querySelector('input');
//         const correctValues = {
//             "25": "njëzet e pesë",
//             "im-25": "unë jam njëzet e pesë vjeç",
//             "12": "dymbëdhjetë",
//             "boy-12": "djali është dymbëdhjetë vjeç",
//             "14": "katërmbëdhjetë",
//             "girl-14": "vajza është katërmbëdhjetë vjeçe",
//             "40": "dyzetë",
//             "you-40": "ti je dyzetë vjec"
         

//         };

//         const correctValue = correctValues[input.id];
//         checkInput(input, correctValue, `${input.id}-pass`, `${input.id}-fail`);
//     });
// });

// Event listener for the check button
checkButton.addEventListener('click', function (event) {
    event.preventDefault();

    const correctValues = {
        "25": "Njëzet e pesë",
        "im-25": "Unë jam njëzet e pesë vjeç",
        "12": "Dymbëdhjetë",
        "boy-12": "Djali është dymbëdhjetë vjeç",
        "14": "Katërmbëdhjetë",
        "girl-14": "Vajza është katërmbëdhjetë vjeçe",
        "40": "Dyzetë",
        "you-40": "Ti je dyzetë vjec"
    };

    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => {
        const correctValue = correctValues[input.id];
        checkInput(input, correctValue, `${input.id}-pass`, `${input.id}-fail`);
    });
});

// Event listener for the clear button
clearResult.addEventListener("click", function (event) {
    event.preventDefault();

    // Clear all pass and fail messages
    const passElements = document.querySelectorAll("[id$='-pass']");
    const failElements = document.querySelectorAll("[id$='-fail']");

    passElements.forEach(function (element) {
        element.style.display = "none";
    });

    failElements.forEach(function (element) {
        element.style.display = "none";
    });
});

// Event listener for the clear form button
clearForm.addEventListener("click", function (event) {
    event.preventDefault();

    // Clear all input fields
    const inputFields = document.querySelectorAll("input[type='text']");
    inputFields.forEach(function (input) {
        input.value = "";
    });

    // Clear all pass and fail messages
    const passElements = document.querySelectorAll("[id$='-pass']");
    const failElements = document.querySelectorAll("[id$='-fail']");

    passElements.forEach(function (element) {
        element.style.display = "none";
    });

    failElements.forEach(function (element) {
        element.style.display = "none";
    });
});
