angular.module('app.controllers', [])

.controller('homeCtrl', function($scope, $ionicPopup) {

	$scope.showPopup = function() {
		$ionicPopup.alert(
			{ title: 'The Login did not succeed.', 
			template: 'Please try again!' }
		);
	}
})

.controller('ContactsController', function($scope, ContactService, $ionicLoading) {
  $ionicLoading.show();
  ContactService.getContacts().then(function(contacts) {
    $scope.contacts = contacts;
    $ionicLoading.hide();
  });
})

.controller('SessionsController', function($scope, SessionFactory, $timeout) {
	$scope.loadingSessions = true;

	// simulate network latency
	$timeout(function () {
		// fetch sessions
		SessionFactory.GetSessions().success(function(response) {
	        $scope.sessions = response;
	        $scope.loadingSessions = false;
	    }).error(function(data) {
	    	console.log(data);
	    });
	}, 1000);
})

.controller('SessionController', function($scope, $stateParams, SessionFactory) {
	var sessionId = $stateParams.id;
    $scope.session = SessionFactory.GetSession(sessionId);
})