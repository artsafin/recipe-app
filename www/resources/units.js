(function(R) {

    R.Units = {
        gram: new Unit('gr', 'mass'),
        litre: new Unit('l', 'volume')
    };

    R.Units.kg = new DerivedUnit('kg', 1000, R.Units.gram);
    R.Units.millilitre = new DerivedUnit('ml', 1 / 1000, R.Units.litre);
    R.Units.teaspoon = new DerivedUnit('teaspoon', 5 / 1000, R.Units.litre);
    R.Units.tablespoon = new DerivedUnit('tablespoon', 18 / 1000, R.Units.litre);

})(window.Resources);