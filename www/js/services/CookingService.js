(function() {

    function AlertService(cooking) {
        this.cookingSteps = cooking.steps;
        this.recipe = cooking.recipe;
    }

    AlertService.prototype = {
        $checkAlertValid: function(time) {
            return time && (new Date().getTime() < time.getTime());
        },
        hasAlert: function(step) {
            return !!this.cookingSteps[step].alert && this.$checkAlertValid(this.cookingSteps[step].alert);
        },
        getDefaultText: function(step) {
            var stepData = this.recipe.steps[step];
            return stepData.timeMin + " min passed for step " + (step + 1) + " of " + this.recipe.steps.length;
        },
        toggleAlert: function(step) {
            var me = this,
                stepData = me.recipe.steps[step],
                id = (me.recipe.id + 1) * 1000 + step;

            if (!stepData) {
                return;
            }

            if (this.hasAlert(step)) {
                AlertService.NotificationService.remove(id);

                me.cookingSteps[step].alert = null;
            } else if (stepData.timeMin) {
                var at = new Date(new Date().getTime() + /*stepData.timeMin * 60*/ 5 * 1000);

                AlertService.NotificationService.add({
                    id: id,
                    title: me.recipe.name,
                    text: stepData.alertText || me.getDefaultText(step)
                }, at).then(function() {
                    me.cookingSteps[step].alert = null;
                });

                me.cookingSteps[step].alert = at;
            }
        }
    };

    function getDefaultCooking(recipe) {
        var result = {
            id: recipe.id,
            recipe: recipe,
            ingredients: {
                count: 0
            },
            steps: {
                passed: 0
            },
            numPortions: recipe.numPortions
        };

        var i;
        for (i = 0; i < recipe.steps.length; i++) {
            result.steps[i] = {};
        }
        for (i = 0; i < recipe.ingredients.length; i++) {
            result.ingredients[recipe.ingredients[i].name] = {};
        }

        return result;
    }

    angular.module('recipeApp')
        .factory('CookingService', function($rootScope, NotificationService, RecipeRepository, LocalStorage) {
            AlertService.NotificationService = NotificationService;

            var svc = {
                CookingAlert: AlertService,
                loadLastCooking: function(){
                    var last = LocalStorage.getLastCooking();

                    return (last !== null) ? svc.loadCooking(last) : null;
                },
                loadCooking: function(id) {
                    var cooking = LocalStorage.getCookingById(id);

                    if (cooking) {
                        var passedSteps = 0, ingrCount = 0, k;
                        for (k in cooking.steps) if (cooking.steps.hasOwnProperty(k)) {
                            cooking.steps[k].alert = null;
                            passedSteps += (cooking.steps[k].isPassed ? 1 : 0);
                        }

                        for (k in cooking.ingredients) if (cooking.ingredients.hasOwnProperty(k)) {
                            ingrCount += ((cooking.ingredients[k] === true) ? 1 : 0);
                        }

                        cooking.steps.passed = passedSteps;
                        cooking.ingredients.count = ingrCount;
                        cooking.recipe = RecipeRepository.byId(cooking.id);
                    }
                    return cooking;
                },
                loadCookingByRecipe: function(recipe) {
                    var cooking = svc.loadCooking(recipe.id);

                    return cooking ? cooking : getDefaultCooking(recipe);
                },
                resetCooking: function(cooking, recipe){
                    LocalStorage.removeCooking(cooking);

                    return getDefaultCooking(recipe);
                },
                saveCooking: function(cooking) {
                    var clone = angular.merge({}, cooking);
                    delete clone.recipe;

                    LocalStorage.setCooking(clone);
                    LocalStorage.setLastCooking(clone);

                    $rootScope.$emit('lastCookingChanged', cooking);
                }
            };

            return svc;
        });
})();