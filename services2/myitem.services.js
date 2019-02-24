myApp.service('itemservies',['validatingitem','$q',function(validatingitem,$q){

    var service=this;

    var item=[];

    service.addIt=function(foods,quantities){
      var promisename=validatingitem.checkname(foods);
      var promisequantity=validatingitem.checkquantity(quantities);

      $q.all([promisename,promisequantity]).then(function(response){
        var items={
          food:foods,
          quantity:quantities
        };
        item.push(items);

      },function(error){

        console.log("Error message:",error.message);
      });

    };

    service.getIt=function(){
      return item;
    };

    service.removes=function(vals){
      item.splice(vals,1);
    };
}]);

myApp.service('validatingitem',['$q','$timeout',function($q,$timeout){

  var factory=this;
  factory.checkname=function(name){
    var defered=$q.defer();
    var result={
      message:''
    };

    $timeout(function(){
      if(name.toLowerCase().indexOf('cookie')=== -1)
      {
        defered.resolve(result);
      }
      else {
        result.message="Dont eat cookie";
        defered.reject(result);
      }

    },3000);

    return defered.promise;
  };

  factory.checkquantity=function(quantity){

    var defered=$q.defer();

    var result={
      message:''
    };

    $timeout(function(){

      if(quantity<6)
      {
        defered.resolve(result);
      }
      else {
        result.message='Its too much quantity';
        defered.reject(result);
      }

    },3000);

      return defered.promise;

  };


}]);
