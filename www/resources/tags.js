window.Resources.init.push(function(R, t) {

    R.Tags = {
        BREAKFAST: new Tag('BREAKFAST', t('Breakfast'), true),
        SOUP: new Tag('SOUP', t('Soup'), true),
        MAIN: new Tag('MAIN', t('Main courses'), false),
        MEAT: new Tag('MEAT', t('Meat'), true),
        FISH: new Tag('FISH', t('Fish'), true),
        VEGETABLES: new Tag('VEGETABLES', t('Vegetables'), true),
        CEREALS: new Tag('CEREALS', t('Cereals'), true),
        DESSERT: new Tag('DESSERT', t('Desserts'), true)
    };
});