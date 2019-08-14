// BUDGET CONTROLLER
var budgetController = (function() {



})(); 

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: 'add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
                // we are returning an object with these values ':' for values 
            };
        }
    };

}) ();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Get the field input data 
        var input = UICtrl.getinput();
        console.log(input)

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI 

        // 4. Calculate the budget 

        // 5. Display the budget on the UI    
    }

    document.querySelector('inputBtn').addEventListener('click', ctrlAddItem);
  
    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            console.log('ENTER was pressed.');
        }
    });


}) (budgetController, UIController);