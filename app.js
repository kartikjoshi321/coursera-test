(function(){

  'use strict';


  angular.module("myFirstApp",[])
  .controller("myfirstcontroller",function($scope){

    $scope.name="";
    $scope.totalvalue=0;

    $scope.calculate=function(){

      var totalnamevalue=calculatestring($scope.name);
      $scope.totalvalue=totalnamevalue;

    };
    function calculatestring(string)
    {
      var totaly=0;
      for(var i=0;i<string.length;i++)
      {
        totaly+=string.charCodeAt(i);
      }
      return totaly;
    }

  });
})();
