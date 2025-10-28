// SCRIPT CODE 


// FORM VALIDATION 

// SELECTING ELEMENTS 
let form = document.getElementById("FORM");
let title = document.getElementById("title");
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let date = document.getElementById("date");
let addExpenseButton = document.getElementById("ADD_EXPENSE_BUTTON");
let titleError = document.getElementById("titleError");
let amountError = document.getElementById("amountError");
let categoryError = document.getElementById("categoryError");
let dateError = document.getElementById("dateError");
let success = document.getElementById("success");


// CLEANING ERROR 
function clearError() {
    titleError.style.display = "none"
    amountError.style.display = "none"
    categoryError.style.display = "none"
    dateError.style.display = "none"
    success.style.display = "none"
    titleError.style.display = "none";
    title.style.border = "2px solid black";
    amount.style.border = "2px solid black";
    category.style.border = "2px solid black";
    date.style.border = "2px solid black";
}



// ADDING EXPENSE EVENT LISTENER 
addExpenseButton.addEventListener("click", () => {

    const titleValue = title.value.trim()
    const regex = /^[A-Za-z\s]+$/;

    clearError();
    if (title.value == "") {
        titleError.style.display = "block";
        title.style.border = "2px solid red";
    }
    else if (!regex.test(titleValue)) {
        titleError.style.display = "block";
        titleError.textContent = "Title must contain only letters";
    }
    else if (amount.value == "") {
        amountError.style.display = "block";
        amount.style.border = "2px solid red";
    }
    else if (amount.value < 0) {
        amountError.style.display = "block";
        amountError.textContent = "Amount must be greater than 0";
    }
    else if (amount.value == 0) {
        amountError.style.display = "block";
        amountError.textContent = "Amount cant be 0";
    }
    else if (category.value == "") {
        categoryError.style.display = "block";
        category.style.border = "2px solid red";
    }
    else if (date.value == "") {
        dateError.style.display = "block";
        date.style.border = "2px solid red";
    }
    else {
        success.style.display = "block";
        storeExpense();  // IF ALL GOOD THEN ONLY : ) CALL THE FUNCTION 
        clearForm();
    }
})

// CLEAR THE FORM 
function clearForm() {
    title.value = ""; // ASSIGNING EMPTY VALUE MAKING IT FREE ✌️
    amount.value = "";
    category.value = "";
    date.value = "";
}

let expense = JSON.parse(localStorage.getItem("expenses")) || []
// let expense = [] 

function storeExpense() {
    // STORING EXPENSE IN OBJECT THEN PUSHING IT INTO IN ARRAY ! 
    let expenseObject = {
        title: title.value,
        amount: amount.value,
        category: category.value,
        date: date.value
    }
    expense.push(expenseObject) // PUSHING IT INTO ANY ARRAY

    // 🔴
    console.log(expense[0]["title"])
    // console.log(expense[0]["amount"])
    // console.log(expense[0]["category"])
    // console.log(expense[0]["date"])

    // LOCAL STORAGE 🟢
    localStorage.setItem("expenses", JSON.stringify(expense))
    displayExpense(); // TP SHOW IMEDIATELY 
}


// SHOWING THE EXPENSE ON THE SCREEN
let showExpense = document.querySelector(".SHOW_EXPENSE")

function displayExpense() {
    showExpense.innerHTML = ""
    expense.forEach((exp) => {

        // CREATE P 
        let P = document.createElement("P")

        // STYLE
        P.style.color = "white"
        P.style.padding = "5px 0"

        // DISPLAY ALL DETAIL IN A NEAT CLEAN WAY
        P.innerText = `${exp.title} | ${exp.amount} | ${exp.category} | ${exp.date}`

        // SHOW AND APPEND 
        showExpense.appendChild(P)
    });
}

displayExpense(); 
