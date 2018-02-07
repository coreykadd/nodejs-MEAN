var app = angular.module('postNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello World';

        $scope.posts = [
            {title: 'Post 1', upvotes: 5},
            {title: 'Post 2', upvotes: 10},
            {title: 'Post 3', upvotes: 15},
            {title: 'Post 4', upvotes: 8},
            {title: 'Post 5', upvotes: 3}
        ];
    }
])