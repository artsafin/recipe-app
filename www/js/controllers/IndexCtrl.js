(function() {
    function calcStat() {
        var cookingMinutes = 0;
        for (var i = 0, len= Resources.Recipes.length; i<len; i++) {
            cookingMinutes += Resources.Recipes[i].prepareMin + Resources.Recipes[i].cookMin;
        }
        return {
            totalRecipes: Resources.Recipes.length,
            cookingHours: Math.round(100 * (cookingMinutes / 60)) / 100
        };
    }

    angular.module('recipeApp')
        .controller('IndexCtrl', function($rootScope, $timeout, $ionicSideMenuDelegate, LocalStorage, CookingService) {
            var vm = this;

            vm.lastCooking = CookingService.loadLastCooking();

            $rootScope.$on('lastCookingChanged', function(e, cooking){
                vm.lastCooking = cooking;
            });

            vm.stat = LocalStorage.stat();
            if (!vm.stat) {
                vm.stat = LocalStorage.stat(calcStat());
            }

            function showMenu() {
                $ionicSideMenuDelegate.toggleLeft(true);
            }

            if (!vm.lastCooking) {
                ionic.Platform.ready(function() {
                    ionic.DomUtil.ready(function() {
                        $timeout(showMenu, 1);
                    });
                });
            }
        });

})();