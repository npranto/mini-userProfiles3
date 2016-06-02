angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
  	var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    })
    .then(function(response){
    	var actualData = response.data.data;
    	for (var i = 0; i < actualData.length; i++) {
    		actualData[i].first_name = "Ralf";
    	}
    	deferred.resolve(actualData);
    })
    return deferred.promise;
  }

});
