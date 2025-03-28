function calculateNetSalary(basicSalary, benefits) {
    
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: Infinity, rate: 0.3 }
    ];
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];
    const nssfRate = 0.06;

    
    const grossSalary = Number(basicSalary) + Number(benefits);
    let paye = 0;
    for (let rate of taxRates) {
        if (grossSalary > rate.min) {
            const taxableAmount = Math.min(grossSalary, rate.max) - rate.min;
            paye += taxableAmount * rate.rate;
        }
    }

    
    let nhifDeduction = 0;
    for (let rate of nhifRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    
    const nssfDeduction = basicSalary * nssfRate;
    const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);

    return {
        grossSalary,
        paye,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}


let basicSalary = "30000";
let benefits = "10000"; 
let salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);