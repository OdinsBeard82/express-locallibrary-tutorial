// catalogController.js - Catalog controller module.

const Book = require('../models/book'); // Import the Book model

// Display site home page.
exports.index = function (req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all books.
exports.bookList = function (req, res, next) {
    Book.find({}, 'title author')
        .populate('author')
        .exec(function (err, list_books) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('book_list', { title: 'Book List', book_list: list_books });
        });
};

// Display detail page for a specific book.
exports.bookDetail = function (req, res, next) {
    Book.findById(req.params.id)
        .populate('author')
        .exec(function (err, book) {
            if (err) { return next(err); }
            if (!book) {
                const err = new Error('Book not found');
                err.status = 404;
                return next(err);
            }
            // Successful, so render
            res.render('book_detail', { title: book.title, book: book });
        });
};

// Display book create form on GET.
exports.bookCreateForm = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.bookCreate = function (req, res, next) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book update form on GET.
exports.bookUpdateForm = function (req, res, next) {
    res.send(`NOT IMPLEMENTED: Book update GET: ${req.params.id}`);
};

// Handle book update on POST.
exports.bookUpdate = function (req, res, next) {
    res.send(`NOT IMPLEMENTED: Book update POST: ${req.params.id}`);
};

// Display book delete form on GET.
exports.bookDeleteForm = function (req, res, next) {
    res.send(`NOT IMPLEMENTED: Book delete GET: ${req.params.id}`);
};

// Handle book delete on POST.
exports.bookDelete = function (req, res, next) {
    res.send(`NOT IMPLEMENTED: Book delete POST: ${req.params.id}`);
};

