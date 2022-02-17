function getInput(idInput) {
  const inputValue = document.getElementById(idInput).value;
  return parseFloat(inputValue);
}
document
  .getElementById("calcalute-salary")
  .addEventListener("click", function () {
    // input field
    const income = getInput("income");

    const food = getInput("food");

    const rent = getInput("rent");

    const clothes = getInput("clothes");
    // update total amount
    const amount = food + rent + clothes;
    if (isNaN(amount) || amount > income) {
      alert("you have note enough amount");
    } else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
      alert("enter a valid input");
    } else {
      const expence = document.getElementById("expence");
      expence.innerText = amount;
      //update tota Balance
      const totalBalance = document.getElementById("balance");
      totalBalance.innerText = income - parseInt(expence.innerText);
    }
  });

document.getElementById("saving").addEventListener("click", function () {
  const balance = document.getElementById("balance");
  const income = getInput("income");
  const parsentInput = getInput("parsent-box");
  const parsent = (income * parsentInput) / 100;
  const savings = document.getElementById("saving-amount");
  const remaining = document.getElementById("remaining-balance");
  if (isNaN(parsentInput) || parsent > parseFloat(balance.innerText)) {
    alert("you have not enough money for savings");
  } else {
    savings.innerText = parsent;
    remaining.innerText =
      parseFloat(balance.innerText) - parseFloat(savings.innerText);
  }
});
