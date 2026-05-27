export const stdDed = 75000
export const rebate = 60000

export function NewIncomeTax(taxSalary) {
  let tax = 0;
  if (taxSalary <= 400000) 
    tax = 0;
  else if (taxSalary <= 800000) 
    tax = 0.05 * taxSalary;
  else if (taxSalary <= 1200000)
    tax = 0.05 * 400000 + 0.1 * (taxSalary - 800000);
  else if (taxSalary <= 1600000)
    tax = 0.05 * 400000 + 0.1 * 400000 + 0.15 * (taxSalary - 1200000);
  else if (taxSalary <= 2000000)
    tax =
     0.05 * 400000 +
      0.1 * 400000 +
      0.15 * 400000 +
      0.2 * (taxSalary - 1600000);
  else if (taxSalary <= 2400000)
    tax =
      0.05 * 400000 +
      0.1 * 400000 +
      0.15 * 400000 +
      0.2 * 400000 +
      0.25 * (taxSalary - 2000000);
  else
    tax =
      0.05 * 400000 +
      0.1 * 400000 +
      0.15 * 400000 +
      0.2 * 400000 +
      0.25 * 400000 +
      0.3 * (taxSalary - 2400000);

      return tax;
}



export function Surcharge(taxSalary){
  let surcharge = 0
  if (taxSalary <= 5000000 )
    surcharge = 0
  else if (taxSalary <= 10000000)
    surcharge = 0.1*(taxSalary - 5000000)
  else if (taxSalary <= 20000000)
    surcharge = 0.15*(taxSalary - 10000000) + 0.1*5000000
  else 
    surcharge = 0.25*(taxSalary - 10000000) + 0.15*(10000000) + 0.1*5000000
return surcharge
}