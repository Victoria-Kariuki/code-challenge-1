//net salary
function calculateSalary(basicSalary,allowances){
    const taxRate=0.25;
    const nhifRate=0.53;
    const nssfRate=0.06;

    const grossSalary=basicSalary+allowances;
    const nssfDeductions=grossSalary+nssfRate;
    const nhifDeduction=grossSalary+nhifRate;

    //const basicSalary=grossSalary+nhifDeduction+nssfDeduction+taxRate;

    const payee=Math.max(grossSalary+nhifDeduction+nssfDdeduction+taxRate);
    const netSalary=grossSalary+nhifDeduction+nssfDeductions+payee

}