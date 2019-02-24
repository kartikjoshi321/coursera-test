var mymod=angular.module('mymade',[]);
mymod.controller('myCon',['calservies',function(calservies){
  var num = this;
  num.first=20;
  num.second=30;

  num.AddIt=function(){
    num.result=calservies.cal(num.first,num.second);
  };


}]);

/*
mymod.factory('calservies',[function(){

  var calculates={};

  calculates.cal=function(a,b){
      return parseInt(a)+parseInt(b);
  };
  return calculates;
}]);
*/
