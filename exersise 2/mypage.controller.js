var myapp=angular.module('myApp',[]);
myapp.controller('myController',['myService',function(myService){
  var list=this;

  list.txt1='';
  list.txt2='';
  list.message='';
  list.item={};

  list.additem=function(){
    myService.addSome(list.txt1,list.txt2).then(function(result){

      list.item=result;
      list.txt1='';
      list.txt2='';

    },function(error){

      list.message=error.message;

    });
  };

list.removeitem=function(indexer)
{
  console.log("Indexer:",indexer);
  myService.removeIt(indexer).then(function(result){

    list.item=result;
    console.log("list.item:",list.item);

  },function(error){
    list.message=error.message;
  });
};
}]);


myapp.service('myService',['$q',function($q){
  var service= this;

  var item=[];


  service.addSome=function(foods,quantities){

    var defered=$q.defer();
    var items={
      food:foods,
      quantity:quantities
    };

    var  result={message:''};
    if(item.push(items))
    {
      console.log("yha phucha bhosdka");
      defered.resolve(item);
    }
    else
    {
      result. message="Data can't be pushed.";
      defered.reject(result);
    }
    return defered.promise;
  };

  service.removeIt=function(index){
    var defered=$q.defer();
    if(item.splice(index,1))
    {
      defered.resolve(item);
    }
    else
    {
        result.message="Data cant be removed";
        defered.reject(result);
    }
    return defered.promise;
  };

}]);



myapp.controller('myController1',['myServices',function(myServices){
  var list=this;

  list.txt1='';
  list.txt2='';
  list.message='';
  list.item={};

  list.additem=function(){
    myServices.addSome(list.txt1,list.txt2).then(function(result){

      list.item=result;
      console.log("Its Called:",list.item);

    },function(error){

      list.message=error.message;

    });
  };

list.removeitem=function(indexer)
{

  myServices.removeIt(indexer).then(function(result){

    list.item=result;
    list.message='';

  },function(error){
    list.message=error.message;
  });
};
}]);


myapp.service('myServices',['$q',function($q){
  var service= this;

  var itemng=[];


  service.addSome=function(foods,quantities){

    var defered=$q.defer();
    var items={
      food:foods,
      quantity:quantities
    };

    var  result={message:''};

    var i=itemng.length;

    if(i<=2&&itemng.push(items))
    {
      console.log("length:",i);
      console.log("yha phucha bhosdka");
      defered.resolve(itemng);
    }
    else
    {
      result. message="Data can't be pushed";
      defered.reject(result);
    }
    return defered.promise;
  };

  service.removeIt=function(index){
    var defered=$q.defer();
    if(itemng.splice(index,1))
    {
      defered.resolve(itemng);
    }
    else
    {
        result.message="Data cant be removed";
        defered.reject(result);
    }
    return defered.promise;
  };

}]);

myapp.directive('myPage',function(){

  var ddo={
    templateUrl:'mypages.html',
    scope:{
      ctrllist:'=attr'
    }
  };
  return ddo;
});


myapp.directive('myPageses',function(){

  var ddo={
    templateUrl:'mypagin.html',
    scope:{
      ctrllist:'@listo'
    }
  };
  return ddo;
});

myapp.directive('listDirection',function(){
  var ddo={
    scope:{
      ctrlist:"=atom"
    },
    templateUrl:'mypages.view.html'
  };
  return ddo;
});
