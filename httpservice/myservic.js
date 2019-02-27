myApp.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
myApp.service('tryservice',['$http','ApiBasePath',function($http,ApiBasePath){

  var service=this;
  //var error='http server could not connected';
  service.callitem=function(){
    var response=$http({
      method:"GET",
      url:(ApiBasePath + "/categories.json")
    });

    return response;

  };

  service.getItem=function(shortname){
      var response=$http({
        method:"GET",
        url:(ApiBasePath + "/menu_items.json"),
        params:{
          category:shortname
        }
      });
      return response;
  };

}]);
