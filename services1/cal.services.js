//var mymod=angular.module('mymade',[]);
mymod.factory('calservies',[function(){
  var factory=this;

  factory.cal=function(a,b){
      return parseInt(a)+parseInt(b);
  };
  return factory;
}]);
