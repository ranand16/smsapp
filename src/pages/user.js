import _ from 'lodash';

export default function($scope, $location, userFactory){
  $scope.name = '';
  $scope.getListMessages = function(){
    // $scope.name = item.name;
    console.log($scope);
    _.partial(userFactory.getListMessages, $scope, $location);
  }
  $scope.getContacts  = _.partial(userFactory.getContacts,$scope, $location);
  $scope.getContactInfo = _.partial(userFactory.getContactInfo,$scope, $location);
  $scope.createContact = _.partial(userFactory.createContact, $scope, $location);
  $scope.sendMessage = _.partial(userFactory.sendMessage, $scope, $location);
}
