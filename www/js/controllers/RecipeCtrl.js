(function() {

    angular.module('recipeApp')
        .controller('RecipeCtrl', function($scope, RecipeRepository, LocalStorage, $stateParams, $ionicTabsDelegate) {
            var vm = this;
            vm.cookingCtrl = {};

            vm.recipe = RecipeRepository.byId($stateParams.id);

            vm.isClearAllowed = function(){
                return $ionicTabsDelegate.$getByHandle('recipe-tabs').selectedIndex() > 0;
            };

            vm.isStarred = function(){
                return LocalStorage.isRecipeStarred(vm.recipe);
            };

            vm.toggleStar = function(){
                LocalStorage.setRecipeStar(vm.recipe, !vm.isStarred());
            }
        });

})();