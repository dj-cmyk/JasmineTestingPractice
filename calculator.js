window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initialValues = {
    amount: 1000,
    years: 3,
    rate: 3.5
  }
  document.getElementById("loan-amount").value = initialValues.amount;
  document.getElementById("loan-rate").value = initialValues.rate;
  document.getElementById("loan-years").value = initialValues.years;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIvalues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIvalues));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12;
  let monthlyPayment;
  if (monthlyRate === 0){
    monthlyPayment = values.amount / (values.years * 12);
  } else {
    monthlyPayment = (values.amount * (monthlyRate)) / (1 - Math.pow((1 + monthlyRate), -(values.years * 12)));
  }
  return monthlyPayment.toFixed(2);
  // let paymentString = `The monthly payment is $${monthlyPayment}`;
  // updateMonthly(paymentString);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let UIpaymentString = document.querySelector("#monthly-payment");
  UIpaymentString.innerText = `The monthly payment is $${monthly}`;
}
