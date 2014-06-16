"use strict";

selfmanagement.directive('bookSearch', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs, controller) {
            element.on("focus", function () {
                element.select();
            });

            element.on("change", function () {
                if (element.val() == "") {
                }
            });

            element.autocomplete({
                source: function (request, response) {
                    $.get("https://www.googleapis.com/books/v1/volumes?q=ISBN%3A" + request.term + "&key=AIzaSyAajOkdK5rWwgqsYDRGg1rLE8v6BYnfgbM", {}, function (data) {
                        response($.map(data.items, function (item) {

                            return {
                                
                                label: item.volumeInfo.title,
                                value: item,
                            };
                        }));
                    });
                },
                select: function (event, ui) {
                    event.preventDefault();
                    element.val("");
                    scope.setBook(ui.item.value);
                }
            });
        }
    }
});

selfmanagement.directive('bookRecord', function () {
    return {
        restrict: 'A',
        scope: { book: "=book"},
        templateUrl: "/app/views/bookLog.html",
        //template: '<span>{{book.title}}</span>',
        link: function (scope, element, attrs, controller) {
            element.find(".readPages").on("change", function () {
                scope.book.readPages = $(this).val();
                scope.$parent.UpdateReadPages(scope.book);
            });
        }
    }
});

