(function() {

    angular.module('recipeApp.repository', [])
        .factory('TagRepository', function(){

            var list, cats;

            var cls = {
                all: function(){
                    if (!list) {
                        list = [];
                        for (var k in Resources.Tags) if (Resources.Tags.hasOwnProperty(k)) {
                            list.push(Resources.Tags[k]);
                        }
                    }
                    return list;
                },
                categories: function(){
                    if (!cats) {
                        cats = cls.all().filter(function(item) {
                            return item.isCategory;
                        });
                    }
                    return cats;
                },
                byId: function(id){
                    return Resources.Tags[id.toUpperCase()];
                }
            };

            return cls;
        })
        .factory('RecipeRepository', function() {

            var numByTag;

            function getNumByTag(tag) {
                if (!numByTag) {
                    numByTag = {};
                    for (var i = 0; i < Resources.Recipes.length; i++) {
                        for (var j = 0; j < Resources.Recipes[i].tags.length; j++) {
                            numByTag[Resources.Recipes[i].tags[j].id] = (numByTag[Resources.Recipes[i].tags[j].id] || 0) + 1;
                        }
                    }
                }
                return numByTag[tag.id] || 0;
            }

            return {
                numByTag: getNumByTag,
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
                getCookingById: function(id) {
                    return JSON.parse(localStorage.getItem('cooking-' + id));
                },
                setCooking: function(cooking) {
                    localStorage.setItem('cooking-' + cooking.id, JSON.stringify(cooking));
                },
                removeCooking: function(cooking) {
                    localStorage.removeItem('cooking-' + cooking.id);
                },
                setLastCooking: function(cooking) {
                    localStorage.setItem('last-cooking', cooking.id);
                },
                getLastCooking: function() {
                    return localStorage.getItem('last-cooking');
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
                },

                stat: function(value){
                    if (!value) {
                        return JSON.parse(localStorage.getItem('stat'));
                    } else {
                        localStorage.setItem('stat', JSON.stringify(value));
                        return value;
                    }
                }
            };
            return cls;
        });

})();