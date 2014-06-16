"use strict";

var FitnessCtrl = function($scope, fitnessDataService) {
    $scope.dailyCalories = "No enough information to calculate your daily calories consume needed";
    $scope.data = fitnessDataService;
    $scope.isCompleted = false;

    $scope.recalculateCalories = function () {
        $scope.isCompleted = CheckIsCompleted();

        if ($scope.isCompleted == true) {
            $scope.data.CalculateDailyCaloriesNeeded();

            $scope.dailyCalories = $scope.data.FitnessModel.dailyCalories;
        }
    };

    function CheckIsCompleted() {
        var formCompleted = true;

        var fitnessModel = $scope.data.FitnessModel;

        if (fitnessModel.genre.indexOf('Select') != -1)
            formCompleted = false;

        if (fitnessModel.weight == '')
            formCompleted = false;

        if (fitnessModel.height == '')
            formCompleted = false;

        if (fitnessModel.age == '')
            formCompleted = false;

        if (fitnessModel.levelExercise == 1)
            formCompleted = false;

        if (fitnessModel.weightGoal.indexOf('Select') != -1)
            formCompleted = false;

        return formCompleted;
    }
}