// Write your solution in this file!
const employee = { name: "Abel Kevin", streetAddress: "123 Main Street" };
// const employeeDestructiveUpdates = {
//   name: "Sam",
//   streetAddress: "12 Broadway",
// };
//Function Declarations
const updateEmployeeWithKeyAndValue = (employeeObj, key, value) => {
  return { ...employeeObj, [key]: value };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (
  employeeObj,
  key,
  value
) => {
  employeeObj[key] = value;
  return employeeObj;
};

const deleteFromEmployeeByKey = (employeeObj, key) => {
  const newObj = { ...employeeObj };
  delete newObj[key];
  return newObj;
};

const destructivelyDeleteFromEmployeeByKey = (employeeObj, key) => {
  delete employeeObj[key];
  return employeeObj;
};

//Function Calls
updateEmployeeWithKeyAndValue(employee, "name", "Sam");

for (const key in employee) {
  delete employee[key];
}

employee.name = "Sam";

destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "12 Broadway"
);

for (const key in employee) {
  delete employee[key];
}

employee.name = "Sam";

deleteFromEmployeeByKey(employee, "name");

destructivelyDeleteFromEmployeeByKey(employee, "name");
