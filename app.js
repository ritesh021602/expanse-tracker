$(document).ready(function () {
    // Get the form element
    const form = document.querySelector("form");
  
    // Get the expense list element
    const expenseList = document.querySelector("#expense-list");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get the input values
      const name = document.querySelector("#name").value;
      const amount = document.querySelector("#amount").value;
      const date = document.querySelector("#date").value;
  
      // Create an expense object
      const expense = {
        name,
        amount,
        date,
      };
  
      // Get the existing expenses from local storage
      let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  
      // Add the new expense to the array
      expenses.push(expense);
  
      // Save the updated expenses array to local storage
      localStorage.setItem("expenses", JSON.stringify(expenses));
  
      // Add the new expense to the expense list
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
      `;
      expenseList.appendChild(row);
  
      // Reset the form
      form.reset();
    });
  
    // Load the expenses from local storage on page load
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  
    // Add the expenses to the expense list
    expenses.forEach((expense) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
      `;
      expenseList.appendChild(row);
    });
  });
  