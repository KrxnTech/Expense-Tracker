// // SCRIPT CODE 


// // FORM VALIDATION 

// // SELECTING ELEMENTS 
// let form = document.getElementById("FORM");
// let title = document.getElementById("title");
// let amount = document.getElementById("amount");
// let category = document.getElementById("category");
// let date = document.getElementById("date");
// let addExpenseButton = document.getElementById("ADD_EXPENSE_BUTTON");
// let titleError = document.getElementById("titleError");
// let amountError = document.getElementById("amountError");
// let categoryError = document.getElementById("categoryError");
// let dateError = document.getElementById("dateError");
// let success = document.getElementById("success");


// // CLEANING ERROR 
// function clearError() {
//     titleError.style.display = "none"
//     amountError.style.display = "none"
//     categoryError.style.display = "none"
//     dateError.style.display = "none"
//     success.style.display = "none"
//     titleError.style.display = "none";
//     title.style.border = "2px solid black";
//     amount.style.border = "2px solid black";
//     category.style.border = "2px solid black";
//     date.style.border = "2px solid black";
//     ADD.style.display = "none"
// }


// // CELEBRATION BUTTON
// let ADD = document.createElement("DIV")
// ADD.classList.add("ADD")
// ADD.innerText = "Expense Added Successfully ✅"
// form.appendChild(ADD)

// function celebration() {
//     ADD.style.display = "block"
// }


// // I AM GOING TO BUILD A FUNCTION WHICH IS GOING TO COUNT THE NUMBER OF CATEGORIES 
// // SHOW IT ON THE SCREEN

// function SHOW_TOTAL_NUMBER_OF_CATEGORIES() {
//     let TotalExpenses = expense.length 

//     let SHOW_TOTAL_CATEGORIES = document.createElement("P")
//     SHOW_TOTAL_CATEGORIES.classList.add("SHOW_TOTAL_CATEGORIES")
//     let MAIN_3 = document.getElementById("MAIN_3")

//     SHOW_TOTAL_CATEGORIES.innerText = TotalExpenses

//     MAIN_3.appendChild(SHOW_TOTAL_CATEGORIES)


//     // LOCAL STORAGE
//     localStorage.setItem("Total_Expense", JSON.stringify(TotalExpenses))
// }
// // CATEGORY MEANS 😄 NUMBER OF EXPENSE : ) 


// // ADDING EXPENSE EVENT LISTENER 
// addExpenseButton.addEventListener("click", () => {

//     const titleValue = title.value.trim()
//     const regex = /^[A-Za-z\s]+$/;

//     clearError();
//     if (title.value == "") {
//         titleError.style.display = "block";
//         title.style.border = "2px solid red";
//     }
//     else if (!regex.test(titleValue)) {
//         titleError.style.display = "block";
//         titleError.textContent = "Title must contain only letters";
//     }
//     else if (amount.value == "") {
//         amountError.style.display = "block";
//         amount.style.border = "2px solid red";
//     }
//     else if (amount.value < 0) {
//         amountError.style.display = "block";
//         amountError.textContent = "Amount must be greater than 0";
//     }
//     else if (amount.value == 0) {
//         amountError.style.display = "block";
//         amountError.textContent = "Amount cant be 0";
//     }
//     else if (category.value == "") {
//         categoryError.style.display = "block";
//         category.style.border = "2px solid red";
//     }
//     else if (date.value == "") {
//         dateError.style.display = "block";
//         date.style.border = "2px solid red";
//     }
//     else {
//         success.style.display = "block";
//         storeExpense();  // IF ALL GOOD THEN ONLY : ) CALL THE FUNCTION 
//         celebration();
//         clearForm();
//     }
// })

// // CLEAR THE FORM 
// function clearForm() {
//     title.value = ""; // ASSIGNING EMPTY VALUE MAKING IT FREE ✌️
//     amount.value = "";
//     category.value = "";
//     date.value = "";
// }

// let expense = JSON.parse(localStorage.getItem("expenses")) || []
// // let expense = [] 

// function storeExpense() {

//     // GENERATING UNIQUE ID 🔴
//     const id = (typeof crypto !== "undefined" && crypto.randomUUID)
//         ? crypto.randomUUID()
//         : 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1e6);

//     // STORING EXPENSE IN OBJECT THEN PUSHING IT INTO IN ARRAY ! 
//     let expenseObject = {
//         id: id,
//         title: title.value,
//         amount: amount.value,
//         category: category.value,
//         date: date.value
//     }
//     expense.push(expenseObject) // PUSHING IT INTO ANY ARRAY

//     // LOCAL STORAGE 🟢
//     localStorage.setItem("expenses", JSON.stringify(expense))
//     displayExpense(); // TP SHOW IMEDIATELY 
// }


// // SHOWING THE EXPENSE ON THE SCREEN
// let showExpense = document.querySelector(".SHOW_EXPENSE")

// function displayExpense() {
//     showExpense.innerHTML = "";
//     expense.forEach((exp) => {

//         // CREATE P 
//         let P = document.createElement("P");
//         P.classList.add("SHOW_DATA");

//         // CREATE DELETE 
//         let deleteButton = document.createElement("button");
//         deleteButton.classList.add("DELETE_BUTTON");
//         deleteButton.innerText = "DELETE";

//         // ADD UNIQUE ID 
//         deleteButton.setAttribute("data-id", exp.id);

//         // DELETE EXPENSE 
//         deleteButton.addEventListener("click", (e) => {
//             const expenseItem = e.currentTarget.parentElement;
//             expenseItem.style.display = "none";
//             // console.log(expenseItem)
//         });


//         // DISPLAY ALL DETAIL + DELETE BUTTON INSIDE SAME P
//         P.innerHTML = `
//             <span>${exp.title}</span>
//             <span>${exp.amount}</span>
//             <span>${exp.category}</span>
//             <span>${exp.date}</span>
//         `;

//         P.appendChild(deleteButton);

//         // FINALLY ADD THE P TO THE SCREEN
//         showExpense.appendChild(P);
//     });
// }


// displayExpense();
// SHOW_TOTAL_NUMBER_OF_CATEGORIES();  


// // BEST THING GIVEN BY GPT IT CLEAR ALL THE EXPENSES 
// document.getElementById("clearAll").addEventListener("click", () => {
//     localStorage.removeItem("expenses"); // CLEARING THE LOCAL STORAGE 
//     expense = [];
//     displayExpense(); // refresh the UI
// });

// -------------------- FORM VALIDATION --------------------

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
    titleError.style.display = "none";
    amountError.style.display = "none";
    categoryError.style.display = "none";
    dateError.style.display = "none";
    success.style.display = "none";
    title.style.border = "2px solid black";
    amount.style.border = "2px solid black";
    category.style.border = "2px solid black";
    date.style.border = "2px solid black";
    ADD.style.display = "none";
}

// CELEBRATION BUTTON
let ADD = document.createElement("DIV");
ADD.classList.add("ADD");
ADD.innerText = "Expense Added Successfully ✅";
form.appendChild(ADD);

function celebration() {
    ADD.style.display = "block";
}

// -------------------- TOTAL EXPENSE COUNTER --------------------
function SHOW_TOTAL_NUMBER_OF_CATEGORIES() {
    // Remove old counter before adding new one
    let oldCount = document.querySelector(".SHOW_TOTAL_CATEGORIES");
    if (oldCount) oldCount.remove();

    let TotalExpenses = expense.length;

    let SHOW_TOTAL_CATEGORIES = document.createElement("P");
    SHOW_TOTAL_CATEGORIES.classList.add("SHOW_TOTAL_CATEGORIES");
    SHOW_TOTAL_CATEGORIES.innerText = `Total Expenses 🫰: ${TotalExpenses}`;

    let MAIN_3 = document.getElementById("MAIN_3");
    MAIN_3.appendChild(SHOW_TOTAL_CATEGORIES);

    // Update Local Storage
    localStorage.setItem("Total_Expense", JSON.stringify(TotalExpenses));
}

// -------------------- ADD EXPENSE --------------------
addExpenseButton.addEventListener("click", () => {
    const titleValue = title.value.trim();
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
    else if (amount.value <= 0) {
        amountError.style.display = "block";
        amountError.textContent = "Amount must be greater than 0";
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
        storeExpense();
        celebration();
        clearForm();
    }
});

function clearForm() {
    title.value = "";
    amount.value = "";
    category.value = "";
    date.value = "";
}

// -------------------- LOCAL STORAGE + DISPLAY --------------------
let expense = JSON.parse(localStorage.getItem("expenses")) || [];

function storeExpense() {
    const id = (typeof crypto !== "undefined" && crypto.randomUUID)
        ? crypto.randomUUID()
        : 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1e6);

    let expenseObject = {
        id: id,
        title: title.value,
        amount: amount.value,
        category: category.value,
        date: date.value
    };

    expense.push(expenseObject);
    localStorage.setItem("expenses", JSON.stringify(expense));
    displayExpense();
    SHOW_TOTAL_NUMBER_OF_CATEGORIES();
}

// -------------------- DISPLAY EXPENSES --------------------
let showExpense = document.querySelector(".SHOW_EXPENSE");

function displayExpense() {
    showExpense.innerHTML = "";

    expense.forEach((exp) => {
        let P = document.createElement("P");
        P.classList.add("SHOW_DATA");

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("DELETE_BUTTON");
        deleteButton.innerText = "DELETE";
        deleteButton.setAttribute("data-id", exp.id);

        deleteButton.addEventListener("click", (e) => {
            const idToDelete = e.currentTarget.getAttribute("data-id");
            expense = expense.filter((item) => item.id !== idToDelete);
            localStorage.setItem("expenses", JSON.stringify(expense));
            displayExpense();
            SHOW_TOTAL_NUMBER_OF_CATEGORIES();
        });

        P.innerHTML = `
            <span>${exp.title}</span>
            <span>${exp.amount}</span>
            <span>${exp.category}</span>
            <span>${exp.date}</span>
        `;

        P.appendChild(deleteButton);
        showExpense.appendChild(P);
    });
}

// -------------------- CLEAR ALL --------------------
document.getElementById("clearAll").addEventListener("click", () => {
    localStorage.removeItem("expenses");
    localStorage.removeItem("Total_Expense");
    expense = [];
    displayExpense();
    SHOW_TOTAL_NUMBER_OF_CATEGORIES();
});

// -------------------- INITIAL LOAD --------------------
displayExpense();
SHOW_TOTAL_NUMBER_OF_CATEGORIES();

