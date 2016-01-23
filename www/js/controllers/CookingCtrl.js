(function() {

    angular.module('recipeApp')
        .controller('CookingCtrl', function($scope, LocalStorage, $ionicPopup, $timeout, $q) {
            var vm = this,
                recipe = $scope.vm.recipe;
            $scope.vm.CookingCtrl = vm;

            vm.state = LocalStorage.getCooking(recipe);

            $scope.$watch(function() {
                    return vm.state;
                }, function() {
                LocalStorage.setCooking(recipe, vm.state);
                }, true
            );

            vm.toggleDoneAbove = function(step) {
                var newMark = !vm.state.steps[step].isPassed;

                for (var i = 0, len = recipe.steps.length; i < len && i <= step; i++) {
                    if (!vm.state.steps[i]) {
                        vm.state.steps[i] = {};
                    }
                    vm.state.steps[i].isPassed = newMark;
                }
            };

            vm.isDone = function(step){
                return vm.state.steps[step].isPassed;
            };

            vm.hasAlert = function(step){
                return !!vm.state.steps[step].alert && checkAlertValid(vm.state.steps[step].alert);
            };

            function checkAlertValid(time) {
                return time && (new Date().getTime() < time.getTime());
            }

            function addNotification(data, time){
                if (ionic.Platform.platform() != 'win32') {
                    return $q(function(resolve, reject){
                        cordova.plugins.notification.local.schedule({
                            id: data.id,
                            icon: 'res://icon.png',
                            smallIcon: 'res://icon.png',
                            title: data.title,
                            text: data.text,
                            at: time,
                            led: 'FFCC44'
                        });

                        cordova.plugins.notification.local.on("trigger", function(notification) {
                            if (notification.id == data.id) {
                                resolve();
                            }
                        });
                    });
                }

                return $timeout(function(){
                    console.log('NOTIF FIRE:', data, time);
                }, 5 * 1000);
            }

            function removeNotification(id){
                console.log('NOTIF REM:', id);

                if (ionic.Platform.platform() != 'win32') {
                    cordova.plugins.notification.local.cancel(id);
                }
            }

            vm.toggleAlert = function(step) {
                var stepData = recipe.steps[step],
                    id = (recipe.id + 1) * 1000 + step;

                if (!stepData) {
                    return;
                }

                if (vm.hasAlert(step)) {
                    console.log('removeNotification');
                    removeNotification(id);

                    vm.state.steps[step].alert = null;
                } else if (stepData.timeMin) {
                    var defaultText = stepData.timeMin + " min passed for step " + (step + 1) + " of " + recipe.steps.length,
                        at = new Date(new Date().getTime() + /*stepData.timeMin * 60*/ 10 * 1000);

                    addNotification({
                        id: id,
                        title: recipe.name,
                        text: stepData.alertText || defaultText
                    }, at).then(function(){
                        vm.state.steps[step].alert = null;
                    });

                    vm.state.steps[step].alert = at;
                }
            };

            vm.confirmClearData = function() {
                $ionicPopup.confirm({
                    title: 'Clear data?',
                    template: 'Are you sure you want to clear stored data?'
                }).then(function(res) {
                    if (res) {
                        LocalStorage.setCooking(recipe, {});
                        vm.state = LocalStorage.getDefaultCooking(recipe);
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