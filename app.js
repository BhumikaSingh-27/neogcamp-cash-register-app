const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const calculateChange = document.querySelector("#calculate");
const alertMessage = document.querySelector("#alertmessage");
const noofnotes = [2000, 500, 100, 20, 10, 5, 1];
const returnnotes = document.querySelectorAll(".no-of-notes");
// const label = document.querySelector("#lable");

// label.style.display="none";
// cashGiven.style.display ="none";

calculateChange.addEventListener("click", function eventHandler() {
   hideMessage();
   
    if ((billAmount.value > 0) && (billAmount.value != null)) {
        // label.style.display="block";
        // cashGiven.style.display ="block";

        if (cashGiven.value >= billAmount.value ){
            amounttoReturn =cashGiven.value -billAmount.value;
            calculateAmounttobeReturned(amounttoReturn);

        } 

        else{

            showErrorMessage("cash amount is invalid");
            
        }
} else {
        showErrorMessage("invalid bill amount");
    }
});

function calculateAmounttobeReturned(amount){
    for ( let i=0; i<noofnotes.length; i++){
        const note = Math.trunc(amount/noofnotes[i]);
        amount = amount%noofnotes[i];
        returnnotes[i].innerText = note;
    }

}
function hideMessage(){

    alertMessage.style.display="none";

}
function showErrorMessage(message){

    alertMessage.style.display="block";
    alertMessage.innerText = message;

}