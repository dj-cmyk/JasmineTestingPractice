
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});

it("should catch error if user input string not number", function(){
  let values = {
    amount: 'water',
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
})

it("should handle interest rate of 0", function(){
  let values = {
    amount: 1000,
    years: 3,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual('27.78');
})
