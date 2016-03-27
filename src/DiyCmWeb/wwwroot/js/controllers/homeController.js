﻿// controller for the home page
//app.controller('homeController', function ($scope, $http) {
//    $scope.message = 'Everyone come and look!';
//});

app.controller('homeController', ['$scope', '$http', 'ProjectsService', function ($scope, $http, ProjectsService) {
    $scope.message = 'Everyone come and look!';
    var onGetAllComplete = function (data) {
        console.log(data);
    };
    var onGetAllError = function (reason) {
        console.log(reason);
    };
    //ProjectsService.getAllProjects()
    //.then(onGetAllComplete, onGetAllError);
    //ProjectsService.getAllProjectsBudgetActual()
    //.then(onGetAllComplete, onGetAllError);
    //ProjectsService.getAllProjectsDetailsCategory()
    //.then(onGetAllComplete, onGetAllError);
    ProjectsService.getAllProjectsDetailsSubCategory()
    .then(onGetAllComplete, onGetAllError);
}]);