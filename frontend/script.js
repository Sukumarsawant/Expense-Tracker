const form = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value.trim());

    if (expenseName && !isNaN(expenseAmount)) {
        const li = document.createElement('li');
        li.innerHTML = `${expenseName}: $${expenseAmount.toFixed(2)} <button class="delete-btn">Delete</button>`;
        expenseList.appendChild(li);

        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});

expenseList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});
