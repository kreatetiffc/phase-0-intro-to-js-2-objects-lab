const employee = {name: "name", streetAddress: "streetAddress"}

function  updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function  deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {employee}
    employee[name] = 'Sam'
    return newEmployee
}

function   destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
