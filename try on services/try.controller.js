var myApp=angular.module('myApp',[]);
myApp.controller('myController',['itemservice',function(itemservice){

  var item=this;
  item.txt1='';
  item.txt2='';

  item.try_click=function(){
    var promiseItem=itemservice.Additem(item.txt1);
    promiseItem.then(function(result){
      item.txt2=result;

    },function(error){
      item.txt2=error.message;
      console.log("now error called",error.message);
    });


  };


}]);
