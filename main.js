
import * as OldReg from './old_regime.js';
import * as NewReg from './new_regime.js';

document.getElementById('calc-btn').addEventListener('submit', (e) =>{
    const salary = document.getElementById('grossSalary');
    const interestInc = document.getElementById('IncFromInterest');
    const rentInc = document.getElementById('RentalInc');
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


const totalInc = salary + interestInc + otherInc + rentInc

let totalDed = OldReg.Deductions(basicDed,  
  medInsurance,  
  houseLoan,  
  HRA,
  charity,
  otherDed,
  city)

const taxableIncOld = totalInc - totalDed
const taxableIncNew = totalInc - NewReg.stdDed


let incomeTaxNew = NewReg.NewIncomeTax(taxableIncNew) + NewReg.Surcharge(taxableIncNew)
let incomeTaxOld = OldReg.OldIncomeTax(taxableIncOld) + OldReg.Surcharge(taxableIncOld)

const totalTaxOld = incomeTaxOld + profTax
const totalTaxNew = incomeTaxNew + profTax

let rebateOld = OldReg.Rebate(totalTax)
let rebateNew = NewReg.Rebate(totalTax)

const payableTaxOld = totalTaxOld - rebateOld 
const payabletaxNew = totalTaxNew - rebateNew













