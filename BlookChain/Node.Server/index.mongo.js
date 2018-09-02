var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookchain', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', function () {
    console.log('mongoose connection error');
});

db.once('open', function () {
    console.log('mongoose connected successfully');
});

var BooksSchema = mongoose.Schema({
    title: String,
    price: Number,
    owner:String
});

var Books = mongoose.model('Books', BooksSchema);

module.exports.Books = Books;