"use strict";

selfmanagement.factory('fitnessDataService', function($http, $q) {
    var fitnessModel = {
        genre: 'Select Genre',
        weight: '',
        height: '',
        age: '',
        levelExercise: 1,
        weightGoal: 'Select Weight Goal',
        dailyCalories: '',
        genres: ['Select Genre', 'Male', 'Female'],
        levelExercises: [{ level: 1, exercise: 'Select Level of Exercise'},
                         { level: 1.2, exercise: 'Sedentary' },
                         { level: 1.375, exercise: 'Lightly Active' },
                         { level: 1.55, exercise: 'Moderately Active' },
                         { level: 1.7, exercise: 'Very Active' },
                         { level: 1.9, exercise: 'Extremely Active' }
        ],
        weightGoals: ['Select Weight Goal','Weight Loss','Weight Maintenance', 'Weight Gain']
    }

    var calculateDailyCaloriesNeeded = function() {
        var dailyCalories = 0;

        //Step 1
        if (fitnessModel.genre == 'Male') {
            dailyCalories = 66 + (6.23 * fitnessModel.weight) + (1.27 * fitnessModel.height) - (6.8 * fitnessModel.age);
        }
        else if (fitnessModel.genre == 'Female') {
            dailyCalories = 655 + (4.35 * fitnessModel.weight) + (4.7 * fitnessModel.height) - (4.7 * fitnessModel.age);
        }
        //Step 2
        dailyCalories = dailyCalories * fitnessModel.levelExercise;
        //Step 3
        if(fitnessModel.weightGoal == 'Weight Loss')
            dailyCalories -= 500;
        else if (fitnessModel.weightGoal == 'Weight Gain')
            dailyCalories += 500;

        fitnessModel.dailyCalories = dailyCalories;
    }

    return{
        FitnessModel: fitnessModel,
        CalculateDailyCaloriesNeeded: calculateDailyCaloriesNeeded
    }
});