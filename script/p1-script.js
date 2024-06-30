const aWomanInput = document.querySelector("input#a-woman");
const aManInput = document.querySelector("input#a-man");
const imWomanInput = document.querySelector("input#im-woman");
const imManInput = document.querySelector("input#im-man");
const aGirlInput = document.querySelector("input#a-girl");
const aBoyInput = document.querySelector("input#a-boy");
const sheGirlInput = document.querySelector("input#she-girl");
const heBoyInput = document.querySelector("input#he-boy");
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
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const input = form.querySelector('input');
        const correctValues = {
            "a-woman": "Një grua",
            "a-man": "Një burrë",
            "im-woman": "Unë jam një grua",
            "im-man": "Ti je një burrë",
            "a-girl": "Një vajzë",
            "a-boy": "Një djalë",
            "she-girl": "Ajo është një vajzë",
            "he-boy": "Ai është një djalë"

        };

        const correctValue = correctValues[input.id];
        checkInput(input, correctValue, `${input.id}-pass`, `${input.id}-fail`);
    });
});

// Event listener for checkButton
checkButton.addEventListener('click', function (event) {
    event.preventDefault();

    const correctValues = {
        "a-woman": "Një grua",
        "a-man": "Një burrë",
        "im-woman": "Unë jam një grua",
        "im-man": "Ti je një burrë",
        "a-girl": "Një vajzë",
        "a-boy": "Një djalë",
        "she-girl": "Ajo është një vajzë",
        "he-boy": "Ai është një djalë",
    };

    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => {
        const correctValue = correctValues[input.id];
        checkInput(input, correctValue, `${input.id}-pass`, `${input.id}-fail`);
    });
});

// Event listener for clearResult button
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

// Event listener for clearForm button
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
