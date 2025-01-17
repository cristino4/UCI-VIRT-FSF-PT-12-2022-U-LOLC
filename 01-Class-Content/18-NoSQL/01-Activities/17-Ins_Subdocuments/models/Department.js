const mongoose = require('mongoose');

// Child documents or subdocuments can be embedded into a parent document
// the managerSchema defines the shape for manager subdocument
const managerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: Number,
});

// The employeeScheme defines the shape for the employee subdocument
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: Number,
});

const departmentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  manager: managerSchema,
  employees: [employeeSchema],
  lastAccessed: {type: Date, default: Date.now}
})



// Uses mongoose.model() to create model
const Department = mongoose.model('Department', departmentSchema);

// Uses model to create new instance including subdocument
const managerData = { name: 'Taylor', salary: 80000 };
const employeeData = [
  { name: 'Ann', salary: 40000 },
  { name: 'Liu', salary: 50000 },
];

Department
  .create({ name: 'Shoes', manager: managerData, employees: employeeData })
  .then(data => console.log(data))
  .catch(err => console.error(err));

module.exports = Department;
