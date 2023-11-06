const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//array of drivers

const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2)
}
// returnFirstTwoDrivers = ['Antonia', 'Nuru']

const returnLastTwoDrivers = function () {
    return drivers.slice(-2)
}
// returnLastTwoDrivers = ['Amari', 'Mo']

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//array of functions containing arrays of first 2 and last 2 drivers

function createFareMultiplier(num1) {
    return function multiply(num2) {
        return num1 * num2
    }
}
//takes a given number(num1) and multiplies it by another number(num2) and returns total

function fareDoubler(fare) {
    return fare * 2
}
//doubles fare

function fareTripler(fare) {
    return fare * 3
}
//triples fare

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}