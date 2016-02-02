// Create app

var myApp = angular.module('myApp', ['ui.router', 'firebase'])

// Configure app
myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    }) 
    
    $stateProvider.state('content', {
        url: '/content',
        templateUrl: 'templates/content.html',
        controller: 'ContentController'
    })   
    
    $stateProvider.state('blog', {
        url: '/blog',
        templateUrl: 'templates/blog.html',
        controller: 'BlogController'
    })
})

// Home page controller: define $scope.number as a number
myApp.controller('HomeController', function($scope) {
    $scope.info = 'information'
})

// Content controller: define $scope.url as an image
myApp.controller('ContentController', ["$scope", "$firebaseArray", 
   function($scope, $firebaseArray) {
       var ref = new Firebase("https://yongjp94.firebaseio.com/projects")
       $scope.projects = $firebaseArray(ref)
}])

myApp.controller('BlogController', ["$scope", "$firebaseArray", 
    function($scope, $firebaseArray) {
        var ref = new Firebase("https://yongjp94.firebaseio.com/blogs")
        $scope.blogs = $firebaseArray(ref)

}])