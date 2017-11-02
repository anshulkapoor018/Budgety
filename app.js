// Budget Controller
var budgetController = (function () {
    //Some Code
})();

// UI Controller
var UIController = (function () {
    //Some Code
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl){
    
    var ctrlAddItem = function() {
        
        console.log("it works");
        
        
    }
    
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    
    document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 || event.which === 13){
            //console.log("Enter was Pressed");
            ctrlAddItem();
        }
    });
    
    
    
})(budgetController, UIController);