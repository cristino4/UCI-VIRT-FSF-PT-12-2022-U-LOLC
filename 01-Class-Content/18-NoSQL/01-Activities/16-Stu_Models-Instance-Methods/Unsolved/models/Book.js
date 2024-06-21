const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    lastAccessed: {type: Date, default: Date.now}
})

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function (){
    const discountPrice = this.price * 0.5;
    console.log(`Book Title: ${this.title} and discounted price: ${discountPrice}`);
};
// TODO: Create a model named `Book`
    const Book = mongoose.model('Book', bookSchema);
// TODO: Create a new instance of the model
    const discountedBook = new Book({
        title: 'The three body problem',
        price: 100,

    });

// TODO: Call the custom instance method on the instance
    discountedBook.getDiscount();
module.exports = Book;
