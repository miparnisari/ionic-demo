angular.module('app.services', [])

.factory('SessionFactory', ['$http', function($http) {
	var sessions = [];
    return {
        GetSessions: function() { 
            return $http.get("http://localhost:5000/sessions")
	            .success(function(response){
	                sessions = response;
	                return response;
	            });
        },
        GetSession: function(sessionId) {
        	for(var i = 0; i < sessions.length; i++) {
        		if (sessions[i].id == sessionId) {
        			return sessions[i];
        		}
        	}
        }
    }
}])

.service('ContactService', ['$q', function($q) {
  var contacts = [];
  var loadContacts = function() {
    var options      = new ContactFindOptions();
    options.filter   = "";
    options.multiple = true;
    // options.desiredFields = [navigator.contacts.fieldType.displayName,
    //                           navigator.contacts.fieldType.id, 
    //                           navigator.contacts.fieldType.phoneNumbers];
    options.hasPhoneNumber = true;
    var deferred = $q.defer();
    navigator.contacts.find(['*'], 
          function(result) {
            contacts = result;
            deferred.resolve();
          },
          function(err) {
            deferred.reject();
          }, options);
    return deferred.promise;
  };
  
  return {
    getContacts: function() {
      var deferred = $q.defer();
      if (contacts.length == 0) {
       loadContacts().then(function() {
         deferred.resolve(contacts);
       })
      } else {
        deferred.resolve(contacts);
      }
      return deferred.promise;
    }
  }
}])