myApp.service('itemservies',[function(){

    var service=this;

    var item=[];

    service.addIt=function(foods,quantities){
      var items={
        food:foods,
        quantity:quantities
      };
      item.push(items);
    };

    service.getIt=function(){
      return item;
    };

    service.removes=function(vals){
      item.splice(vals,1);
    };
}]);
