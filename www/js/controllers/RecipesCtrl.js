(function() {

    angular.module('recipeApp')
        .controller('RecipesCtrl', function(TagRepository, RecipeRepository, LocalStorage, $stateParams) {
            var vm = this;

            vm.tag = TagRepository.byId($stateParams.id);

            vm.getRecipes = function(){
                return RecipeRepository.byTag(vm.tag);
            };

            vm.isStarred = function(recipe) {
                return LocalStorage.isRecipeStarred(recipe);
            };
        });

})();