var myApp=angular.module('MenuCategoriesApp',[]);
myApp.controller('MenuCategoriesController',['tryservice',function(tryservice){

var item=this;

item.categories='';
item.short_name='';

  var promise=tryservice.callitem();

  promise.then(function(response){
    item.categories=response.data;

  },function(error){
    item.categories="There is an error while Fatching data";
  });

    item.logMenuItems=function(short_name)
    {
      var promises=tryservice.getItem(short_name);
      promises.then(function(response){
        console.log("response:",response.data);
        item.short_name=response.data;

      },function(error)
      {
          item.categories="There is an error while Fatching data";
      });

    };
}]);
