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

  var billAmt = Number(billAmount.value);
  var cashGvn = Number(cashGiven.value);

  if (billAmt > 0 && cashGvn > 0) {
    // label.style.display="block";
    // cashGiven.style.display ="block";

    if (billAmt === cashGvn) {
      showErrorMessage("No change to be returned!");
    }
    if (cashGvn >= billAmt) {
      amounttoReturn = cashGvn - billAmt;
      calculateAmounttobeReturned(amounttoReturn);
    } else {
      showErrorMessage(
        "Do you wanna wash plates? If not, please enter cash amount correctly!"
      );
    }
  } else {
    showErrorMessage("Invalid bill amount");
  }
});

function calculateAmounttobeReturned(amount) {
  for (let i = 0; i < noofnotes.length; i++) {
    const note = Math.trunc(amount / noofnotes[i]);
    amount = amount % noofnotes[i];
    returnnotes[i].innerText = note;
  }
}
function hideMessage() {
  alertMessage.style.display = "none";
}
function showErrorMessage(message) {
  alertMessage.style.display = "block";
  alertMessage.innerText = message;
}
