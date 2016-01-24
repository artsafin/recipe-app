window.Resources.init.push(function(R, t) {

    R.Units = {
        gram: new Unit(t('gr'), 'mass'),
        litre: new Unit(t('l'), 'volume')
    };

    R.Units.kg = new DerivedUnit(t('kg'), 1000, R.Units.gram);
    R.Units.millilitre = new DerivedUnit(t('ml'), 1 / 1000, R.Units.litre);
    R.Units.teaspoon = new DerivedUnit(t('teaspoon'), 5 / 1000, R.Units.litre);
    R.Units.tablespoon = new DerivedUnit(t('tablespoon'), 18 / 1000, R.Units.litre);

});