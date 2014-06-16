"use strict";

var ReadingLogCtrl = function ($scope, readingLogDataService) {
    $scope.data = readingLogDataService;
    $scope.isOpenNewBook = false;

    $scope.openCloseNewBook = function () {
        $scope.isOpenNewBook = !$scope.isOpenNewBook;
    };

    $scope.setBook = function(book) {
        $scope.data.SetNewBook(book);
        $scope.$apply();
    }

    $scope.addNewBook = function() {
        $scope.data.AddBook($scope.data.NewBook);
        $scope.isOpenNewBook = !$scope.isOpenNewBook;
    }

    $scope.UpdateReadPages = function(book) {
        book.missingReading = book.numPages - book.readPages;

        if (book.missingReading == 0) {
            book.isFinished = true;
            book.finishedReadDate = moment().format('YYYY-MM-DD');
        } else {
            book.isFinished = false;
            book.finishedReadDate = '';
        }

        $scope.$apply();

    }
}