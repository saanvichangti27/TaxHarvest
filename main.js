import * as OldReg from "./old_regime.js";
import * as NewReg from "./new_regime.js";

document.getElementById("calc-btn").addEventListener("click", (e) => {
  const salary = parseInt(document.getElementById("grossSalary").value);
  let interestInc = parseInt(document.getElementById("IncFromInterest").value);
  const rentInc = parseInt(document.getElementById("RentalInc").value);
  const profTax = parseInt(document.getElementById("ProfTax").value);
  const otherInc = parseInt(document.getElementById("OtherIncome").value);
  const basicDed = parseInt(document.getElementById("BasicDed").value);
  const medInsurance = parseInt(document.getElementById("MedInsurance").value);
  const houseLoan = parseInt(document.getElementById("HousingLoan").value);
  const HRA = parseInt(document.getElementById("NPS").value);
  const charity = parseInt(document.getElementById("Charity").value);
  const otherDed = parseInt(document.getElementById("OtherDed").value);
  const city = document.getElementById("citySelect").value;

  if (interestInc > 10000) interestInc = interestInc - 10000;
  else interestInc = 0;

  const totalInc = salary + interestInc + otherInc + rentInc;

  let totalDed = OldReg.Deductions(
    basicDed,
    medInsurance,
    houseLoan,
    HRA,
    charity,
    otherDed,
    city,
  );

  const taxableIncOld = totalInc - totalDed;
  const taxableIncNew = totalInc - NewReg.stdDed;



  let incomeTaxNew =
    NewReg.NewIncomeTax(taxableIncNew) + NewReg.Surcharge(taxableIncNew);
  let incomeTaxOld =
    OldReg.OldIncomeTax(taxableIncOld) + OldReg.Surcharge(taxableIncOld);

  const totalTaxOld = incomeTaxOld + profTax;
  const totalTaxNew = incomeTaxNew + profTax;

  let rebateOld = taxableIncOld <= 500000 ? OldReg.rebate : 0;
  let rebateNew = taxableIncNew <= 1200000 ? NewReg.rebate : 0;

  const payableTaxOld = totalTaxOld - rebateOld;
  const payabletaxNew = totalTaxNew - rebateNew;

document.getElementById("grossIncNew").textContent = Math.round(totalInc);
document.getElementById("res-gross-old").textContent = Math.round(totalInc);

document.getElementById("res-std-new").textContent = Math.round(NewReg.stdDed);
document.getElementById("res-std-old").textContent = 50000;

document.getElementById("res-ded-new").textContent = 0;
document.getElementById("res-ded-old").textContent = Math.round(totalDed);

document.getElementById("res-taxable-new").textContent = Math.round(taxableIncNew);
document.getElementById("res-taxable-old").textContent = Math.round(taxableIncOld);

document.getElementById("res-tax-new").textContent = Math.round(incomeTaxNew);
document.getElementById("res-tax-old").textContent = Math.round(incomeTaxOld);

document.getElementById("res-rebate-new").textContent = Math.round(rebateNew);
document.getElementById("res-rebate-old").textContent = Math.round(rebateOld);

document.getElementById("res-cess-new").textContent = Math.round(cessNew);
document.getElementById("res-cess-old").textContent = Math.round(cessOld);

document.getElementById("res-payable-new").textContent = Math.round(payabletaxNew + cessNew);
document.getElementById("res-payable-old").textContent = Math.round(payableTaxOld + cessOld);
});
