var app = angular.module('postNews', ['ui.router']);

app.factory('posts', [function(){
    var o = {
        posts: []
    };
    return 0;
}]);

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
        $scope.test = 'Hello World';
        $scope.posts = posts.posts;

        $scope.posts = [
            {title: 'Post 1', upvotes: 5},
            {title: 'Post 2', upvotes: 10},
            {title: 'Post 3', upvotes: 15},
            {title: 'Post 4', upvotes: 8},
            {title: 'Post 5', upvotes: 3}
        ];

        $scope.addPost = function(){
            if(!$scope.title || $scope.title === ''){
                alert("Please enter title for post");
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
                comments: [
                    {author: 'John', body: 'Cool post', upvotes: 0},
                    {author: 'Dave', bodt: 'Random post', upvotes: 0}
                ]
            });
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function(post){
            post.upvotes++;
        };
    }
]);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
        });

        $stateProvider
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }
]);

app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts){
        $scope.post = posts.posts[$stateParams.id];

        /*$scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'John', body: 'Cool post', upvotes: 0},
                {author: 'Dave', bodt: 'Random post', upvotes: 0}
            ]
        });*/

        $scope.addComment = function(){
            if($scope.body === '') {return;}
            $scope.post.comments.push({
                body: $scope.body,
                aither: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };
    }
]);