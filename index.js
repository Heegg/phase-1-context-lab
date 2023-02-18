/* Your Code Here */

function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [] ,
        timeOutEvents: [] 
    }
}

// function createEmployeeRecords(employees){
//     return employees.map(employee => createEmployeeRecord(employee))
// }
//or
function createEmployeeRecords(arrOfArr){
    let employeeRecords = []

    for(let i = 0; i < arrOfArr.length; i++){
        employeeRecords.push(createEmployeeRecord(arrOfArr[i]))
    }
    return employeeRecords
}

function createTimeInEvent(e) {
    let [date, hour] = e.split(" ")
    const eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date 
    }

    this.timeInEvents.push(eventObj) 
    return this 
}
// Q. How do we convert a string to a integer?
// A. parseInt()

function createTimeOutEvent(e) {
    let [date, hour] = e.split(" ")
    const eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date 
    }

    this.timeOutEvents.push(eventObj) 
    return this 
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date)
    const timeOut = this.timeOutEvents.find(e => e.date === date)
    console.log("timeIn", timeIn)
    return (timeOut.hour - timeIn.hour)/100
}

// Given an employee record with a date-matched timeInEvent and timeOutEvent
// 1) wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
// wagesEarnedOnDate
//   2) calculates that the employee earned 54 dollars
//   3) uses hoursWorkedOnDate

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(emp => emp.firstName === firstNameString)
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.map(employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total)
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

