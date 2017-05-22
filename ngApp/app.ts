namespace node {

    angular.module('node', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider
    ) => {
        filepickerProvider.setKey('A7ymYvTXHTrdPeTSsKCoUz');

        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: node.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('addPhoto', {
                url: '/add',
                templateUrl: '/ngApp/views/addPhoto.html',
                controller: node.Controllers.AddController,
                controllerAs: 'vm'
            })
            .state('editPhoto', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/editPhoto.html',
                controller: node.Controllers.EditController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
