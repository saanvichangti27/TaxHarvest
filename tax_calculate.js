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
    


    function OldIncomeTax (taxSalary) {
      let tax =0
        if (taxSalary <= 250000)
            tax = 0;
        else if (taxSalary <=500000)
            tax = 0.05*(taxSalary-250000)
        else if (taxSalary <=1000000)
            tax = 0.2*(taxSalary - 500000) + .05*(250000)
        else 
            tax = 0.3*(taxSalary-1000000)+0.2*(500000) + .05*(250000)
        return tax
    }

    function oldDeductions (basicDed, medInsurance, houseLoan, pension, charity, otherDed)
     {
     let medDed = 0,  houseDed =0, Ded80C=0
     if (medInsurace < 50000)
         medDed = medInsurance
    else
        medDed = 50000

    //charity has no deduction

     if (houseLoan < 200000)
        houseDed = houseLoan
    else 
        houseDed =  200000

    if (basicDed < 150000)
        Ded80C = basicDed
    else 
        Ded80C =  150000 

    let totalDed = medDed + houseDed + Ded80C + charity + otherDed
    return totalDed }

 function NewIncomeTax(taxSalary){
    let tax = 0;
    
    if (taxSalary <= 400000)
        tax = 0
    else if (taxSalary > 400000 && taxSalary < 800000)
        tax = 0.05*taxSalary
    else if (taxSalary < 800000 && taxSalary < 1200000)
        tax = 0.05*400000 + 0.10*(taxSalary-800000)
    else if (taxSalary > 1200000 && taxSalary < 1600000)
        tax = 0.05*400000 + 0.10*400000 + 0.15*(taxSalary-1200000)
    else if (taxSalary > 1600000 && taxSalary < 2000000)
        tax = 0.05*400000 + 0.10*400000 + 0.15*400000 + 0.20*(taxSalary-1600000)
    else if (taxSalary > 2000000 && taxSalary < 2400000)
        tax = 0.05*400000 + 0.10*400000 + 0.15*400000 + 0.20*400000 + 0.25*(taxSalary-2000000)
    else
        tax = 0.05*400000 + 0.10*400000 + 0.15*400000 + 0.20*400000 + 0.25*400000 + 0.30*(taxSalary-2400000)
}


let taxableIncome = salary - totalDed








})

