const stdDed = 50000;

export function OldIncomeTax(taxSalary) {
  let tax = 0;
  if (taxSalary <= 250000) tax = 0;
  else if (taxSalary <= 500000) tax = 0.05 * (taxSalary - 250000);
  else if (taxSalary <= 1000000)
    tax = 0.2 * (taxSalary - 500000) + 0.05 * 250000;
  else tax = 0.3 * (taxSalary - 1000000) + 0.2 * 500000 + 0.05 * 250000;
  return tax;
}

export function Deductions(
  basicDed,
  medInsurance,
  houseLoan,
  HRA,
  charity,
  otherDed,
  city
) {
  let medDed = 0,
    houseDed = 0,
    Ded80C = 0;
  if (medInsurace < 50000) medDed = medInsurance;
  else medDed = 50000;

  if(city=='Metro')
    hraDed = min(hra, 0.5*salary)
  else
    hraDed = min(hra, 0.4*salary)

  //charity has no deduction

  if (houseLoan < 200000) houseDed = houseLoan;
  else houseDed = 200000;

  if (basicDed < 150000) Ded80C = basicDed;
  else Ded80C = 150000;

  let totalDed = medDed + houseDed + Ded80C + charity + otherDed + stdDed + hraDed;
  return totalDed;
}

export function Rebate(){
    const rebate = 12500
    return rebate
}

export function Surcharge(taxSalary){
  let surcharge = 0
  if (taxSalary <= 5000000 )
    surcharge = 0
  else if (taxSalary <= 10000000)
    surcharge = .1*(taxSalary - 5000000)
  else if (taxSalary <= 20000000)
    surcharge = .15*(taxSalary - 10000000) + .1*5000000
  else if (taxSalary <= 50000000)
    surcharge = .25*(taxSalary - 10000000) + .15*(10000000) + .1*5000000
  else 
    surcharge = .37*(taxSalary - 50000000) + .25*30000000 + .15*(10000000) + .1*5000000
return surcharge
}