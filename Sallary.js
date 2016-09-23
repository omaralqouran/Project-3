
/**  @author Al-Qouran Omar (omaralqouran48@gmail.com
 *   @version 0.0.3
 *   @summary project 3 demo || created 9.20.2016
 *   @todo
 */
"use strict";
const PROMPT = require('readline-sync');

let baseSalary,totalSales,commissionRate,totalSalary;

function main() {
    setBaseSalary();
    setTotalSales();
    setCommissionRate();
    calculateTotalSalary();
    printTotalSalary();
}

main();

function setBaseSalary() {
    baseSalary = Number(PROMPT.question('\nEnter base salary: '));
}

function setTotalSales(){
    totalSales = Number(PROMPT.question('\nEnter total sales'));
}

function setCommissionRate() {
    commissionRate = Number(PROMPT.question('\nEnter commission rate'));
}

function calculateTotalSalary() {
    totalSalary = baseSalary + commissionRate * totalSales;
}

function printTotalSalary() {
    console.log(`Total Salary: ${totalSalary}`);
}