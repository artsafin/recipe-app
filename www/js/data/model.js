function Tag(id, name, isCategory) {
    this.id = id;
    this.name = name;
    this.isCategory = isCategory;
}

Tag.prototype.is = function(other){
    return this.id === other.id;
};

function Recipe(name, descr, tags, ingredients, steps, images, numPortions, prepareMin, cookMin, complexity) {
    this.id = null;
    this.name = name;
    this.descr = descr;
    this.tags = tags;
    this.ingredients = ingredients;
    this.steps = steps;
    this.images = images;

    this.numPortions = numPortions;
    this.prepareMin = prepareMin;
    this.cookMin = cookMin;
    this.complexity = complexity;
}

Recipe.prototype = {
    hasTag: function(tag){
        for (var t in this.tags) {
            if (this.tags[t].is(tag)) {
                return true;
            }
        }
        return false;
    }
};

var IngrSeverity = {
    OPTIONAL: 'optional',
    REQUIRED: 'required'
};

/*
 function Product(name, unitName) {
 this.name = name;
 this.unitName = unitName;
 }*/

function Ingredient(name, unitsPerPortion, unit, severity) {
    this.name = name;
    this.unitsPerPortion = unitsPerPortion;
    this.unit = unit;
    this.severity = severity;
}
Ingredient.prototype = {
    unitsToVolume: function(){
        if (this.unit.isVolume()) {
            return this.unit;
        }


    }
};

function Unit(name, type) {
    this.name = name;
    this.type = type;
}
Unit.prototype = {
    toString: function(){
        return this.name + "[" + this.type + "]";
    },
    isSameType: function(other){
        return this.type == other.type;
    }
};

function DerivedUnit(name, ratio, parent) {
    this.__proto__ = Object.create(parent);

    this.name = name;
    this.ratio = ratio;
}

function Step(text, timeMin, alertText) {
    this.text = text;
    this.alertText = alertText ? alertText : null;
    this.timeMin = timeMin;
}