// savings.js

export function getSavingsTips(basicDed, medInsurance, HRA, charity, payableTaxOld) {
    const tips = [];

    if (payableTaxOld <= 0) return tips; // return empty, section won't show

    if (basicDed < 150000) {
        const sav80C = 150000 - basicDed;
        tips.push(`You can save ₹${sav80C.toLocaleString('en-IN')} more by investing in Section 80C instruments like PPF (Public Provident Fund), ELSS (Equity Linked Savings Scheme), or LIC (Life Insurance) premium.`);
    }

    if (medInsurance < 50000) {
        const savMed = 50000 - medInsurance;
        tips.push(`You can save up to ₹${savMed.toLocaleString('en-IN')} more under Section 80D by claiming medical insurance for yourself and your family.`);
    }

    if (HRA === 0) {
        tips.push(`Claim your House Rent Allowance (HRA) to get a deduction on taxes. Non Metro city residents have higher benefit.`);
    }

    if (charity === 0) {
        tips.push(`Add your donations to registered charitable institutions for 100% deduction on it.`);
    }

    // Only reaches here if tax is payable but all deductions are maxed out
    if (tips.length === 0) {
        tips.push(`Great! You have made smart investments this year for saving taxes. Are you making the best use of your salary? Start making monthly Investments with as low as ₹2000 in growth mutual funds via SIP.`);
    }

    return tips;
}