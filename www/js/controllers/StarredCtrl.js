(function() {

    angular.module('recipeApp')
        .controller('StarredCtrl', function(LocalStorage, RecipeRepository) {
            var vm = this;

            vm.getStarred = function() {
                return LocalStorage.getStarredList().map(function(item){
                    return RecipeRepository.byId(item);
                });
            };
        });

})();