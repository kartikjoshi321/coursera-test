myApp.service('itemservice',['$q',function($q){

    var service=this;
    var result=
    {
      message:''
    };
    var myway="You enterd sir";
    service.Additem=function(val){
        var defered=$q.defer();
        if(val.toLowerCase()!=='kartik')
        {

          defered.resolve(myway);
        }
        else {
          result.message="kartik you are not allowed here bro...sry";
          console.log("Its called :");
          defered.reject(result);
        }
        return defered.promise;
    };
}]);
