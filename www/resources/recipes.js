window.Resources.init.push(function(R, t) {
    var Tags = R.Tags,
        Units = R.Units,
        items = [
        new Recipe(t('Borsch'), t('Very good and tasty'), [Tags.SOUP, Tags.MAIN_COURSE], [
            new Ingredient(t('Cabbage'), 1 / 4, Units.gram, IngrSeverity.OPTIONAL),
            new Ingredient(t('Small potatoes'), 2, Units.gram, IngrSeverity.REQUIRED),
            new Ingredient(t('Beet root'), 2, Units.litre, IngrSeverity.REQUIRED)
        ], [
            new Step(t('Do this<br>Do this<br>Do this<br>Do this<br>Do this<br>Do this')),
            new Step(t('Do that'), 1)
        ], [
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=Borsch%20thumbnail1&w=350&h=150',
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=Borsch%20thumbnail2&w=350&h=150'
        ], 4, 20, 120, 2),

        new Recipe(t('Zrazy'), t('Very good and tasty'), [Tags.MAIN_COURSE], [
            new Ingredient(t('Mince meat'), 1 / 4, Units.gram, IngrSeverity.REQUIRED),
            new Ingredient(t('Small potatoes'), 2, Units.gram, IngrSeverity.REQUIRED)
        ], [], [
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=Zrazy%20thumbnail1&w=350&h=150',
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=Zrazy%20thumbnail2&w=350&h=150'
        ], 4, 20, 120, 2)
    ];

    for (var i = 0, len = items.length; i < len; i++) {
        items[i].id = i;
    }

    R.Recipes = items;
});