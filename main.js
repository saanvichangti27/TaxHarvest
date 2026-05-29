import * as OldReg from "./old_regime.js";
import * as NewReg from "./new_regime.js";
import { getSavingsTips } from "./savings.js";

document.getElementById("calc-btn").addEventListener("click", (e) => {
    const salary = parseInt(document.getElementById("grossSalary").value.replace(/,/g,'')) || 0;
    let interestInc =
        parseInt(document.getElementById("IncFromInterest").value.replace(/,/g,'')) || 0;
    const rentInc = parseInt(document.getElementById("RentalInc").value.replace(/,/g,'')) || 0;
    const profTax = parseInt(document.getElementById("ProfTax").value.replace(/,/g,'')) || 0;
    const otherInc = parseInt(document.getElementById("OtherIncome").value.replace(/,/g,'')) || 0;
    const basicDed = parseInt(document.getElementById("BasicDed").value.replace(/,/g,'')) || 0;
    const medInsurance =
        parseInt(document.getElementById("MedInsurance").value.replace(/,/g,'')) || 0;
    const houseLoan = parseInt(document.getElementById("HousingLoan").value.replace(/,/g,'')) || 0;
    const HRA = parseInt(document.getElementById("NPS").value.replace(/,/g,'')) || 0;
    const charity = parseInt(document.getElementById("Charity").value.replace(/,/g,'')) || 0;
    const otherDed = parseInt(document.getElementById("OtherDed").value.replace(/,/g,'')) || 0;
    const city = document.getElementById("citySelect").value;

    if (interestInc > 10000) interestInc = interestInc - 10000;
    else interestInc = 0;

    const totalInc = salary + interestInc + otherInc + rentInc;

    let totalDedOld = OldReg.Deductions(
        salary,
        basicDed,
        medInsurance,
        houseLoan,
        HRA,
        charity,
        otherDed,
        city,
    ) + profTax + OldReg.stdDed;

    let totalDedNew = profTax + NewReg.stdDed;

    const taxableIncOld = Math.max(0, totalInc - totalDedOld);
    const taxableIncNew = Math.max(0, totalInc - totalDedNew);

    let incomeTaxNew =
        NewReg.NewIncomeTax(taxableIncNew) + NewReg.Surcharge(taxableIncNew);
    let incomeTaxOld =
        OldReg.OldIncomeTax(taxableIncOld) + OldReg.Surcharge(taxableIncOld);

    const totalTaxOld = incomeTaxOld;
    const totalTaxNew = incomeTaxNew;

    let rebateNew = 0, rebateOld = 0;
    if (totalInc > 0 && taxableIncNew <= 1200000) {
        if (totalTaxNew < NewReg.rebate)
            rebateNew = totalTaxNew
        else
            rebateNew = NewReg.rebate
    }
    else
        rebateNew = 0

    if (totalInc > 0 && taxableIncOld <= 500000) {
        if (totalTaxOld < OldReg.rebate)
            rebateOld = totalTaxOld
        else
            rebateOld = OldReg.rebate
    }
    else
        rebateOld = 0

    let payableTaxOld = totalTaxOld - rebateOld;
    let payableTaxNew = totalTaxNew - rebateNew;

    let cessOld = Math.max(0, Math.round(0.04 * payableTaxOld));
    let cessNew = Math.max(0, Math.round(0.04 * payableTaxNew));

    document.getElementById("grossIncNew").textContent = Math.round(totalInc).toLocaleString('en-IN');
    document.getElementById("res-gross-old").textContent = Math.round(totalInc).toLocaleString('en-IN');

    // Wrap these in a condition
    document.getElementById("res-std-new").textContent = totalInc > 0 ? (NewReg.stdDed).toLocaleString('en-IN') : 0;
    document.getElementById("res-std-old").textContent = totalInc > 0 ? (OldReg.stdDed).toLocaleString('en-IN') : 0;

    document.getElementById("res-ded-new").textContent = 0;
    document.getElementById("res-ded-old").textContent =
        totalInc > 0 ? Math.round(totalDedOld).toLocaleString('en-IN') : 0;
    document.getElementById("res-taxable-new").textContent =
        Math.round(taxableIncNew).toLocaleString('en-IN');
    document.getElementById("res-taxable-old").textContent =
        Math.round(taxableIncOld).toLocaleString('en-IN');

    document.getElementById("res-tax-new").textContent = Math.round(incomeTaxNew).toLocaleString('en-IN');
    document.getElementById("res-tax-old").textContent = Math.round(incomeTaxOld).toLocaleString('en-IN');

    document.getElementById("res-rebate-new").textContent = Math.round(rebateNew).toLocaleString('en-IN');
    document.getElementById("res-rebate-old").textContent = Math.round(rebateOld).toLocaleString('en-IN');

    document.getElementById("res-cess-new").textContent = Math.round(cessNew).toLocaleString('en-IN');
    document.getElementById("res-cess-old").textContent = Math.round(cessOld).toLocaleString('en-IN');

    document.getElementById("res-payable-new").textContent = Math.round(
        payableTaxNew + cessNew,
    ).toLocaleString('en-IN');
    document.getElementById("res-payable-old").textContent = Math.round(
        payableTaxOld + cessOld,
    ).toLocaleString('en-IN');


     const tips = getSavingsTips(basicDed, medInsurance, HRA, charity, payableTaxOld);
    const savingsSection = document.getElementById("savings-section");
    const tipsList = document.getElementById("savings-tips-list");
    tipsList.innerHTML = "";

    if (payableTaxOld + cessOld > 0) {
        tips.forEach(tip => {
            const li = document.createElement("li");
            li.textContent = tip;
            tipsList.appendChild(li);
        });
        savingsSection.style.display = "block";
    } else {
        savingsSection.style.display = "none";
    }
});
