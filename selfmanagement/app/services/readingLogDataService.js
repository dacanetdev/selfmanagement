"use strict"

selfmanagement.factory("readingLogDataService", function ($http, $q) {
    var newBook = {
        ISBN: '',
        title: '',
        author: '',
        numPages: '',
        readPages: '',
        missingReading: '',
        finishedReadDate: '',
        isFinished: false
    };
    var origBook = {};
    var bookLogs = [];

    var setNewBook = function(book) {
        angular.copy(newBook, origBook);
        console.log(book);

        newBook.ISBN = book.volumeInfo.industryIdentifiers == null ? "" : book.volumeInfo.industryIdentifiers.length == 0 ? ""
            : book.volumeInfo.industryIdentifiers[book.volumeInfo.industryIdentifiers.length - 1].identifier;
        newBook.title = book.volumeInfo.title;
        newBook.author = book.volumeInfo.authors == null ? "" : book.volumeInfo.authors.join();
        newBook.numPages = book.volumeInfo.pageCount == null ? "" : book.volumeInfo.pageCount;
        
    }

    var addBook = function(book) {
        var bookToAdd = {};
        angular.extend(bookToAdd, book);

        bookLogs.push(bookToAdd);

        angular.copy(origBook, newBook);


    }

    return {
        NewBook: newBook,
        BookLogs: bookLogs,
        SetNewBook: setNewBook,
        AddBook: addBook
    }
});