// Write your solution in this file!
const employee = {
  name: "Mary",
  streetAddress: "Kiambu",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}
const newEmployees = updateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  {
    employee[key] = value;
  }
  updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam",
    employee,
    "streetAddress",
    "12 Broadway"
  );
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };

  delete newEmployee.name;

  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log(newEmployees);
console.log(employee);
console.log(employee);
