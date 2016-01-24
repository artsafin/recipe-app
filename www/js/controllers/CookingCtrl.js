(function() {

    angular.module('recipeApp')
        .controller('CookingCtrl', function($scope, $ionicPopup, CookingService) {
            var vm = this,
                recipe = $scope.vm.recipe;
            $scope.vm.CookingCtrl = vm;

            vm.state = CookingService.loadCookingByRecipe(recipe);
            var alertSvc = new CookingService.CookingAlert(vm.state);

            vm.hasAlert = alertSvc.hasAlert.bind(alertSvc);
            vm.toggleAlert = function(step){
                var promise = alertSvc.toggleAlert(step);
                if (promise) {
                    promise.then(function(){
                        vm.toggleDone(step, true);
                    });
                }
                return promise;
            };

            $scope.$watch(function() {
                    return vm.state;
                }, function() {
                    CookingService.saveCooking(vm.state);
                }, true
            );

            vm.toggleDone = function(step, value) {
                var newMark = (value === undefined) ? !vm.state.steps[step].isPassed : value;

                vm.state.steps[step].isPassed = newMark;

                if (newMark) {
                    for (var i = 0, len = recipe.steps.length; i < len && i < step; i++) {
                        vm.state.steps[i].isPassed = newMark;
                    }
                }
            };

            vm.isDone = function(step){
                return vm.state.steps[step].isPassed;
            };

            vm.confirmClearData = function() {
                $ionicPopup.confirm({
                    title: trans('Clear data?'),
                    template: trans('Are you sure you want to reset Ingredients and Cooking data?'),
                    cancelText: trans('Keep data'),
                    okText: trans('Clear data'),
                    okType: 'button-assertive'
                }).then(function(res) {
                    if (res) {
                        vm.state = CookingService.resetCooking(vm.state, recipe);
                    }
                });
            };

            vm.incrNumPortions = function(by){
                if (by > 0) {
                    vm.state.numPortions = Math.min(20, 1 * vm.state.numPortions + by);
                } else if(by < 0) {
                    vm.state.numPortions = Math.max(1, 1 * vm.state.numPortions + by);
                }
            }
        });

})();