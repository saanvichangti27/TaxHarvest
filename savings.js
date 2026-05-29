// savings.js

export function getSavingsTips(basicDed, medInsurance, HRA, charity, payableTaxOld) {
    const tips = [];

    if (payableTaxOld <= 0) return tips; // return empty, section won't show

    if (basicDed < 150000) {
        const sav80C = 150000 - basicDed;
        tips.push(`You can save ₹${sav80C.toLocaleString('en-IN')} more by investing in Section 80C instruments like PPF, ELSS, or LIC premium.`);
    }

    if (medInsurance < 50000) {
        const savMed = 50000 - medInsurance;
        tips.push(`You can claim up to ₹${savMed.toLocaleString('en-IN')} more under Section 80D by getting medical insurance for yourself and your family.`);
    }

    if (HRA === 0) {
        tips.push(`Claim your House Rent Allowance (HRA) to get a deduction on taxes. Metro city residents get 50% of basic salary, non-metro get 40%.`);
    }

    if (charity === 0) {
        tips.push(`Donations to registered charitable institutions qualify for 100% deduction under Section 80G — add yours to save more.`);
    }

    // Only reaches here if tax is payable but all deductions are maxed out
    if (tips.length === 0) {
        tips.push(`You've maximized all available deductions. Great tax planning!`);
    }

    return tips;
}