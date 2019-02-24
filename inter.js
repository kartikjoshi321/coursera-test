(function(){

  'use strict';


  var ang=angular.module("myFirstApp",[]);
  ang.controller("myfirstcontroller",function($scope,$filter){
      $scope.mytext="kartik";
      $scope.whenclick=function(){
        var it=$filter('uppercase');
        $scope.mytext=it($scope.mytext);
      };

  });
  ang.controller("mysecondcontroller",mysecondcontroller);
  mysecondcontroller.$inject=['$scope'];
  function mysecondcontroller($scope){
    $scope.name="kartik";
    $scope.sayhello=function(){
      return $scope.name +"is now become a mean devloper soon";
    };
  }
})();
