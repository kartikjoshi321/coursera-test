var app=angular.module('myApp',[]);
app.controller('myController',function($scope){

  $scope.names=[
    'kartik','Amit','Mohit','Deepak','Abhisek'
  ];

  $scope.AddVal=function(){
      if($scope.myval!='')
      {
        $scope.names.push($scope.myval);
        $scope.myval='';
      }
      else
        {
          alert('write some name');
        }
  };
});
