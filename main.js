document.getElementById('calc-btn').addEventListener('submit', (e) =>{
    const salary = document.getElementById('grossSalary');
    const interestInc = document.getElementById('IncFromInterest');
    const rentInc = document.getElementById('RentalInc');
    const digitalInc = document.getElementById('DigitalInc');
    const homeLoan = document.getElementById('HomeLoanInc');
    const profTax = document.getElementById('ProfTax');
    const otherInc = document.getElementById('OtherIncome');
    const basicDed = document.getElementById('BasicDed');
    const medInsurace = document.getElementById('MedInsurance');
    const houseLoan = document.getElementById('HousingLoan');
    const pension = document.getElementById('NPS');
    const charity = document.getElementById('Charity');
    const otherDed = document.getElementById('OtherDed');
})

if(interestInc>10000) interestInc = interestInc-10000
else interestInc = 0

const digitalTax = 0.30*digitalInc


