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