var app = angular.module('postNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello World';

        $scope.posts = [
            'Post 1',
            'Post 2',
            'Post 3',
            'Post 4',
            'Post 5'
        ];
    }
])