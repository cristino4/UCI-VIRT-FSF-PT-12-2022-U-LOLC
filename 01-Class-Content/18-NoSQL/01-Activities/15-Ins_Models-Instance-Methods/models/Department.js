const mongoose = require('mongoose');

// Schemas define the shape of the documents within the collection.
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalStock: Number,
  lastAccessed: { type: Date, default: Date.now },
});

departmentSchema.methods.getDocumentInfo = function () {
  console.log(`This department had the name ${this.name} and a total stock of ${this.totalStock}`);
};

const Department = mongoose.model('Department', departmentSchema);

const produce = new Department({name: 'produce', totalStock: 100});

const responseGetInstance = produce.get('totalStock',String);
console.log(`The value of the totalStock for this document is ${responseGetInstance}`);

produce.getDocumentInfo()
module.exports = Department;
