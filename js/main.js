function getInput(idInput) {
  const inputValue = document.getElementById(idInput).value;
  if (inputValue < 0) {
    alert("don't writing a negative number");
  } else {
    return parseFloat(inputValue);
  }
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
    if (amount > income || isNaN(income) || isNaN(food) || isNaN(clothes)) {
      alert("you have note enough amount");
    } else {
      const expence = document.getElementById("expence");
      expence.innerText = amount;
      //update tota Balance
      const totalBalane = document.getElementById("balance");
      totalBalane.innerText = income - parseInt(expence.innerText);
    }
  });
