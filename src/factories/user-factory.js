import _ from 'lodash';
import angular from 'angular';
//import authTokenFactory from './authToken-factory';

const userFactory = angular.module('app.userFactory',[])
.factory('userFactory',($http, $q)=>{

  function createContact($scope, $location){
  $http.post('/api/savecontact',{
  name: $scope.name,
  phone: $scope.phone,
  email: $scope.email,
  address: $scope.address
  }).then((response) => {
    $scope.saved = response.data.successMessage;
    $scope.notSaved = response.data.failureMessage;
    $scope.name = '';
    $scope.email = '';
    $scope.address = '';
  });
  $location.path('/home');
 }

 function sendMessage($scope, $location){
  $https.post(`https://rest.nexmo.com/sms/json?from=HAPPiE&to=${$scope.to}&type=text&text=${$scope.content}&api_key=b50e360e&api_secret=593b5a65564de835`)
  .then((res)=> {
    console.log(res);
    console.log('done');
  });
  $http.post('/api/savemessages',{
    content: $scope.content,
    to: $scope.to
   }).then((response) => {
     // console.log(response);
     $scope.sent = response.data.successMessage;
     $scope.notSent = response.data.failureMessage;
     $scope.content = '';
     $scope.to = '';
   });
   $location.path('/home');
  }

  function getListMessages($scope, $location){
   $http.get('/api/messages')
   .then((response)=>{
     console.log(response);
     $scope.msgs = response.data.messages;
   });
  }

  function getContacts($scope, $location){
    $http.get('/api/contacts')
    .then((response) => {
      // console.log(response.data);
      $scope.list = response.data.contacts;
      // console.log(response.data.contacts);
      // console.log($scope.list);
    });
  }

  function getContactInfo($scope, $location){
    $http.post('/api/contactInfo',{
    name: $scope.name
    }).then((response) => {
      // console.log($scope);
      console.log(response);
      $scope.name = response.data.name;
      $scope.phone = response.data.phone;
      $scope.email = response.data.email;
      $scope.address = response.data.address;
      $location.path('/contactinfo');
      // console.log("o/p");
      // console.log($scope.todos);
    });
  }

   return {
    getListMessages,
    getContacts,
    getContactInfo,
    createContact,
    sendMessage
  };
})

export default userFactory;
