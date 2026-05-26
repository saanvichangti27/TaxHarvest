const stdDed = 50000;

function OldIncomeTax(taxSalary) {
  let tax = 0;
  if (taxSalary <= 250000) tax = 0;
  else if (taxSalary <= 500000) tax = 0.05 * (taxSalary - 250000);
  else if (taxSalary <= 1000000)
    tax = 0.2 * (taxSalary - 500000) + 0.05 * 250000;
  else tax = 0.3 * (taxSalary - 1000000) + 0.2 * 500000 + 0.05 * 250000;
  return tax;
}

function Deductions(
  basicDed,
  medInsurance,
  houseLoan,
  pension,
  charity,
  otherDed,
) {
  let medDed = 0,
    houseDed = 0,
    Ded80C = 0;
  if (medInsurace < 50000) medDed = medInsurance;
  else medDed = 50000;

  //charity has no deduction

  if (houseLoan < 200000) houseDed = houseLoan;
  else houseDed = 200000;

  if (basicDed < 150000) Ded80C = basicDed;
  else Ded80C = 150000;

  let totalDed = medDed + houseDed + Ded80C + charity + otherDed + stdDed;
  return totalDed;
}

