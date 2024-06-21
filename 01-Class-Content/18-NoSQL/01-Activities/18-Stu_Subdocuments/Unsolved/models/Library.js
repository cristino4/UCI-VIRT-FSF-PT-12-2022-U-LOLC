const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
  title: {type: String},
  price: Number
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema],
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
  const Library = mongoose.model('Library',librarySchema);
// TODO: Create a new instance of the model including the subdocuments

const bookData =  [
  {title: 'wizard of ozz', price: 1}, {title: 'the three body problem', price: 3}
]
Library.create({
  name: 'library',
  books: bookData
})
module.exports = Library;
