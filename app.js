// var app = angular.module('myApp', []);
// app.controller('HomeController', function($scope){
//     $scope.message = 'Hello World';
// });


var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider 
        .when('/',{
            templateUrl : 'home.html',
            controller : 'HomeController'
        })
        .when('/blog',{
            templateUrl : 'blog.html', 
            controller : 'BlogController'
        })
        .when('/about',{
            templateUrl : 'about.html', 
            controller : 'AboutController'
        })
        .otherwise({redirectTo: '/'});
});
app.controller('HomeController', function($scope){
    $scope.message = 'Day la noi dung duoc gui tu HomeController';
});
app.controller('BlogController', function($scope){
    $scope.message = 'Day la noi dung duoc gui tu BlogController';
})
app.controller('AboutController', function($scope){
    $scope.message = 'Day la noi dung duoc gui tu AboutController';
})
