// Define Mongoose
const mongoose = require('mongoose');

//create the model 
const grocerySchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    stockCount: Number,
    price: Number,
    inStock: Boolean,
    lastAccessed: {
        type: Date,
        default: Date.now
    }
});

//compile the model
const Item = mongoose.model('Item',grocerySchema);

// error handler
const handleError = (err) => console.log(err);

// now we can create a document
Item.create({
    item: 'banana',
    stockCount: 10,
    price: 10,
    inStock: true
})
.then(result => console.log('Created a new document', result))
.catch(err => handleError(err));

//export the model
module.exports = Item;
