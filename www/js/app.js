angular.module('recipeApp', ['ionic', 'recipeApp.repository'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '',
            abstract: true,
            templateUrl: 'partials/layout-sidemenu.html'
        })

        // Recipes section
        .state('home.index', {
            url: '/index',
            templateUrl: 'partials/index.html'
        })
        .state('home.categories', {
            url: '/catalog/categories',
            templateUrl: 'partials/catalog/categories.html'
        })
        .state('home.recipes', {
            url: '/catalog/categories/:id',
            templateUrl: 'partials/catalog/recipes.html'
        })
        .state('home.recipe', {
            url: '/catalog/recipe/:id',
            templateUrl: 'partials/catalog/recipe.html'
        })
        .state('home.recipe.ingredients', {
            url: '/ingredients'
        })
        .state('home.recipe.steps', {
            url: '/steps'
        })

        // Starred section
        .state('home.starred', {
            url: '/starred',
            templateUrl: 'partials/starred.html'
        })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/index');

});
