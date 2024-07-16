// catalog.js - Catalog route module.

const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

// GET request for specific book by user ID and book ID.
router.get('/users/:userId/books/:bookId', catalogController.userBookDetail);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', catalogController.bookCreateForm);

// POST request for creating Book.
router.post('/book/create', catalogController.bookCreate);

// GET request to delete Book.
router.get('/book/:id/delete', catalogController.bookDeleteForm);

// POST request to delete Book.
router.post('/book/:id/delete', catalogController.bookDelete);

// GET request to update Book.
router.get('/book/:id/update', catalogController.bookUpdateForm);

// POST request to update Book.
router.post('/book/:id/update', catalogController.bookUpdate);

// GET request for one Book.
router.get('/book/:id', catalogController.bookDetail);

// GET request for list of all Book items.
router.get('/books', catalogController.bookList);

module.exports = router;
