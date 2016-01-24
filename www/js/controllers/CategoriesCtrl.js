(function(){

    angular.module('recipeApp')
        .controller('CategoriesCtrl', function(TagRepository, RecipeRepository){
            this.getCategories = TagRepository.categories;

            this.getNumRecipesInTag = function(tag){
                return RecipeRepository.numByTag(tag);
            }
        });

})();