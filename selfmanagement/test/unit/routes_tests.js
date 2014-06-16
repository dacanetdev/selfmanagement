describe("Routes Test", function() {
    //Mock the App Module
    beforeEach(angular.mock.module('selfmanagement'));

    var location, route, rootScope;

    beforeEach(
        angular.mock.inject(function(_$location_, _$route_, _$rootScope_) {
            location = _$location_;
            route = _$route_;
            rootScope = _$rootScope_;
        }));

    describe('index route', function() {
        beforeEach(angular.mock.inject(
            function ($httpBackend) {
                $httpBackend.expectGET('app/views/home.html')
                    .respond(200, 'main HTML');
            }));

        it('should load the index page on successful load of /', function() {
            location.path('/');
            rootScope.$digest(); // call the digest loop
            expect(route.current.controller)
                .toBe('HomeCtrl');
        });

        it('should redirect to the index path on non-existent route', function() {
            location.path('/definitely/not/a/_route');
            rootScope.$digest();
            expect(route.current.controller)
                .toBe('HomeCtrl');
        });
       
    });

    describe('schedule route', function() {
        beforeEach(angular.mock.inject(
            function($httpBackend) {
                $httpBackend.expectGET('app/views/schedule.html')
                    .respond(200, 'main HTML');
            }));

        it('should change route to schedule', function() {
            location.path('schedule');
            rootScope.$digest();
            expect(route.current.controller).toBe('ScheduleCtrl');
        });
    });

    describe('readinglog route', function () {
        beforeEach(angular.mock.inject(
            function ($httpBackend) {
                $httpBackend.expectGET('app/views/readinglog.html')
                    .respond(200, 'main HTML');
            }));

        it('should change route to readinglog', function () {
            location.path('readinglog');
            rootScope.$digest();
            expect(route.current.controller).toBe('ReadingLogCtrl');
        });
    });

    describe('fitness route', function () {
        beforeEach(angular.mock.inject(
            function ($httpBackend) {
                $httpBackend.expectGET('app/views/fitness.html')
                    .respond(200, 'main HTML');
            }));

        it('should change route to readinglog', function () {
            location.path('fitness');
            rootScope.$digest();
            expect(route.current.controller).toBe('FitnessCtrl');
        });
    });

    describe('finances route', function () {
        beforeEach(angular.mock.inject(
            function ($httpBackend) {
                $httpBackend.expectGET('app/views/finances.html')
                    .respond(200, 'main HTML');
            }));

        it('should change route to readinglog', function () {
            location.path('finances');
            rootScope.$digest();
            expect(route.current.controller).toBe('FinancesCtrl');
        });
    });
})