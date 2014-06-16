var selfmanagement = angular.module('selfmanagement',['ngRoute']);

selfmanagement.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider.when("/home", {
                controller: "HomeCtrl",
                templateUrl: "app/views/home.html"
            })
            .when("/schedule", {
                controller: "ScheduleCtrl",
                templateUrl: "app/views/schedule.html"
            })
            .when("/readinglog", {
                controller: "ReadingLogCtrl",
                templateUrl: "app/views/readinglog.html"
            })
            .when("/fitness", {
                controller: "FitnessCtrl",
                templateUrl: "app/views/fitness.html"
            })
            .when("/finances", {
                controller: "FinancesCtrl",
                templateUrl: "app/views/finances.html"
            })
            .otherwise({ redirectTo: "/home" });
    }
]);