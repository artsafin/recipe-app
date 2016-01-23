(function() {

    angular.module('recipeApp.repository', [])
        .factory('TagRepository', function(){

            var list = [];
            for (var k in Resources.Tags) if (Resources.Tags.hasOwnProperty(k)) {
                list.push(Resources.Tags[k]);
            }

            var cats = list.filter(function(item){
                return item.isCategory;
            });

            return {
                all: function(){
                    return list;
                },
                categories: function(){
                    return cats;
                },
                byId: function(id){
                    return Resources.Tags[id.toUpperCase()];
                }
            };
        })
        .factory('RecipeRepository', function() {

            return {
                byTag: function(tag) {
                    return Resources.Recipes.filter(function(item){
                        return item.hasTag(tag);
                    });
                },
                byId: function(id) {
                    return Resources.Recipes[id];
                }
            };
        })
        .factory('LocalStorage', function() {

            var cls = {
                getDefaultCooking: function(recipe){
                    var result = {
                        ingredients: {},
                        steps: {},
                        numPortions: recipe.numPortions
                    };

                    var i;
                    for (i=0; i< recipe.steps.length; i++) {
                        result.steps[i] = {};
                    }
                    for (i=0; i< recipe.ingredients.length; i++) {
                        result.ingredients[recipe.ingredients[i].name] = {};
                    }

                    return result;
                },
                getCooking: function(recipe) {
                    var cooking = cls.getDefaultCooking(recipe);

                    angular.extend(cooking, JSON.parse(localStorage.getItem('cooking-' + recipe.id)));

                    for (var k in cooking.steps) if (cooking.steps.hasOwnProperty(k)) {
                        cooking.steps[k].alert = null;
                    }

                    return cooking;
                },
                setCooking: function(recipe, cooking) {
                    localStorage.setItem('cooking-' + recipe.id, JSON.stringify(cooking));

                    return cooking;
                },
                isRecipeStarred: function(recipe){
                    var starred = cls.$getStarredHash();
                    return starred[recipe.id] !== null && starred[recipe.id] !== undefined;
                },
                setRecipeStar: function(recipe, v){
                    var starred = cls.$getStarredHash();

                    if (v) {
                        starred[recipe.id] = recipe.id;
                    } else {
                        delete starred[recipe.id];
                    }

                    localStorage.setItem('stars', JSON.stringify(starred));
                },
                $getStarredHash: function(){
                    return JSON.parse(localStorage.getItem('stars')) || {};
                },
                getStarredList: function(){
                    return Object.keys(cls.$getStarredHash());
                }
            };
            return cls;
        });

})();