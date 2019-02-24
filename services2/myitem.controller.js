var myApp=angular.module('mymade',[]);
myApp.controller('myCon',['itemservies',function(itemservies){

  var getList=this;
  getList.food="";
  getList.quantity="";

  getList.AddIt=function(){
    itemservies.addIt(getList.food,getList.quantity);
    getList.food="";
    getList.quantity="";
  };

}]);

myApp.controller('myCont',['itemservies',function(itemservies){

  var showList=this;
  showList.items=itemservies.getIt();

  showList.remove=function(val){
    itemservies.removes(val);
  };
}]);
