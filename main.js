

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
    const HRA = document.getElementById('NPS');
    const charity = document.getElementById('Charity');
    const otherDed = document.getElementById('OtherDed');
    const city = document.getElementById('citySelect');
})



if(interestInc>10000) interestInc = interestInc-10000
else interestInc = 0


const digitalTax = 0.30*digitalInc

const totalInc = salary + interestInc + otherInc
const taxableInc = totalInc - totalDed
const totalTax = incomeTax + digitalTax + profTax


let incomeTaxNew = NewReg.NewIncomeTax(taxableInc)
let tincomeTaxOld = OldReg.OldIncomeTax(taxableInc)
let totalDed = OldReg.Deductions(basicDed,  
  medInsurance,  
  houseLoan,  
  HRA,
  charity,
  otherDed,
  city)
