window.Resources.init.push(function(R, t) {
    var Tags = R.Tags,
        Units = R.Units,
        items = [];

    items.push(new Recipe(
        t('Борщ украинский'),
        t('Борщ украинский - описание'),
        [Tags.SOUP],
        [
            new Ingredient(t('Мясо (свинина или говядина)'), [300 / 4, Units.gram], IngrSeverity.REQUIRED),
            new Ingredient(t('Вода (кипяток)'), [2.1 / 4, Units.litre], IngrSeverity.REQUIRED),
            new Ingredient(t('Лук среднего размера'), [[1 / 4, Units.item], [75 / 4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Морковь среднего размера'), [[1 / 4, Units.item], [75 / 4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Помидоры (или консервированные томаты в собственном соку)'), [[3 / 4, Units.item], [250 / 4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Свекла маленького размера'), [[2 / 4, Units.item], [100 / 4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Картофель маленького размера (по 40-50 г)'), [4 / 4, Units.item], IngrSeverity.REQUIRED),
            new Ingredient(t('Капуста белокочанная (небольшая)'), [[1 / 4 / 4, Units.item], [2 / 4, Units.kg]], IngrSeverity.REQUIRED),
            new Ingredient(t('Зубчик чеснока'), [6 / 4, Units.item], IngrSeverity.REQUIRED),
            new Ingredient(t('Сок лимона или яблочный уксус'), [4 / 4, Units.tablespoon], IngrSeverity.REQUIRED),
            new Ingredient(t('Растительное масло'), [1 / 4, Units.tablespoon], IngrSeverity.REQUIRED),
            new Ingredient(t('Сахар'), [1 / 4, Units.tablespoon, '(без горки)'], IngrSeverity.REQUIRED),
            new Ingredient(t('Соль'), null, IngrSeverity.OPTIONAL),
            new Ingredient(t('Перец'), null, IngrSeverity.OPTIONAL),
            new Ingredient(t('Лавровый лист'), null, IngrSeverity.OPTIONAL)
        ], [
            new Step(t('Do this<br>Do this<br>Do this<br>Do this<br>Do this<br>Do this')),
            new Step(t('Do that'), 1)
        ], [
            'resources/img/borsh/1.jpg',
            'resources/img/borsh/2.jpg'
        ], 4, 20, 75, 3));

    items.push(new Recipe(
        t('Картофель с мясом'),
        t('Картофель с мясом - описание'),
        [Tags.MAIN, Tags.MEAT],
        [
            new Ingredient(t('Свинина / куриные бедра / куриное филе'), [400 / 4, Units.gram], IngrSeverity.REQUIRED),
            new Ingredient(t('Картофель средний'), [[7/4, Units.item], [8/4, Units.item], [800/4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Лук репчатый средний'), [[1/4, Units.item], [2/4, Units.item], [75/4, Units.gram], [150/4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Морковь средняя'), [[1/4, Units.item], [2/4, Units.item], [75/4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Чеснок'), null, IngrSeverity.OPTIONAL),
            new Ingredient(t('Растительное масло'), [2, Unit.tablespoon], IngrSeverity.REQUIRED),
            new Ingredient(t('Соль'), null, IngrSeverity.OPTIONAL),
            new Ingredient(t('Перец'), null, IngrSeverity.OPTIONAL),
            new Ingredient(t('Специи'), null, IngrSeverity.OPTIONAL)
        ], [
            new Step('Нарежьте мясо крупными кубиками по 4 см.<br>Лук и морковь нарежьте соломкой.<br>Нарежьте картофель дольками.'),
            new Step('Налейте на дно чаши мультиварки растительное масло.<br>Крышку не закрывайте'),
            new Step('<span class="step-multicooker-mode">ЖАРИТЬ</span> 40 минут'),
            new Step('Подождите 3 минуты, пока масло нагреется', 3, "Масло нагрелось"),
            new Step('Добавьте в чашу мясо и обжаривайте 10 минут', 10, "Мясо прожарилось"),
            new Step('Затем добавьте лук и морковь, продолжайте готовить еще 5 минут, периодически помешивая', 5, "Лук и морковь прожарились"),
            new Step('Добавьте нарезанный дольками картофель и продолжайте обжаривать, также периодически помешивая'),
            new Step('За 10 минут до окончания программы добавьте соль, перец, мелко рубленный чеснок и специи по вкусу')
        ], [
            'resources/img/potato_meat/1.jpg',
            'resources/img/potato_meat/2.jpg'
        ], 4, 15, 40, 1));

    items.push(new Recipe(
        t('Гречка с грибами и свининой'),
        t('Гречка с грибами и свининой - описание'),
        [Tags.MAIN, Tags.MEAT, Tags.CEREALS],
        [
            new Ingredient(t('Гречка'), [4 / 4, Units.cup], IngrSeverity.REQUIRED),
            new Ingredient(t('Лук репчатый средний'), [[1/4, Units.item], [100/4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Морковь средняя'), [[2/4, Units.item], [300/4, Units.gram]], IngrSeverity.REQUIRED),
            new Ingredient(t('Вода или куриный бульон'), [6/4, Unit.item], IngrSeverity.REQUIRED),
            new Ingredient(t('Растительное масло'), [4/4, Unit.tablespoon], IngrSeverity.REQUIRED),
            new Ingredient(t('Зубчик чеснока'), [1/4, Units.item], IngrSeverity.REQUIRED),
            new Ingredient(t('Свинина'), [300/4, Units.gram], IngrSeverity.REQUIRED),
            new Ingredient(t('Грибы'), [200/4, Units.gram], IngrSeverity.REQUIRED),
            new Ingredient(t('Соль'), null, IngrSeverity.OPTIONAL),
            new Ingredient(t('Сливочное масло'), null, IngrSeverity.OPTIONAL),
            new Ingredient(t('Специи'), null, IngrSeverity.OPTIONAL)
        ], [
            new Step('Порубите мелко лук, чеснок, морковь натрите на терке, свинину нарежьте небольшими кубиками (1х1 см), грибы нарежьте пластинами.'),
            new Step('Налейте подсолнечное масло во внутреннюю чашу мультиварки, добавьте лук, чеснок, морковь.'),
            new Step('<span class="step-multicooker-mode">ЖАРИТЬ</span> 20 минут'),
            new Step('Обжарьте лук, чеснок, морковь, помешивая в течение 10 минут', 10),
            new Step('Добавьте свинину и грибы и обжарьте их, помешивая до конца программы.', 10),
            new Step('Насыпьте гречку, залейте ее водой или куриным бульоном'),
            new Step('Закройте крышку мультиварки. <span class="step-multicooker-mode">КАША</span> - 20 минут')
        ], [
            'resources/img/potato_meat/1.jpg',
            'resources/img/potato_meat/2.jpg'
        ], 4, 10, 40, 2));

    items.push(new Recipe(
        t('Яблочный пирог'),
        t('Яблочный пирог - описание'),
        [Tags.DESSERT],
        [
            new Ingredient(t('Яйца'), [4 / 10, Units.item], IngrSeverity.REQUIRED),
            new Ingredient(t('Сахар'), [[300/10, Units.gram], [1.375/10, Units.cup]], IngrSeverity.REQUIRED),
            new Ingredient(t('Сливочное масло'), 'для смазывания чаши', IngrSeverity.REQUIRED),
            new Ingredient(t('Мука'), [[300/10, Unit.item], [1.5/10, Unit.cup]], IngrSeverity.REQUIRED),
            new Ingredient(t('Ванильный сахар'), [1/10, Unit.teaspoon], IngrSeverity.REQUIRED),
            new Ingredient(t('Яблоко крупное'), [[2/10, Units.item], [250/10, Units.gram]], IngrSeverity.REQUIRED)
        ], [
            new Step('Смажьте внутреннюю чашу мультиварки сливочным маслом, посыпьте сахаром.'),
            new Step('Очистите яблоки от кожуры и нарежьте их тонкими ломтикаи, разложите на дне мультиварки так, чтобы между яблоками оставалось еще немного свободного места.'),
            new Step('Яйца взбейте до образования очень плотной белой пены (с помощью ручного блендера со специальной насадкой-миксером на самой высокой скорости).'),
            new Step('Продолжая взбивать, постепенно добавьте сахар и ванильный сахар'),
            new Step('Уменьшите скорость блендера до минимума и, продолжая взбивать, частями добавьте всю муку'),
            new Step('Вылейте тесто на яблоки. Обращайтесь с тестом как можно бережнее, чтобы не повредить пузырьки воздуха, которые обеспечат пирогу пышность и объем'),
            new Step('Поместите чашу в мультиварку и закройте крышку'),
            new Step('<span class="step-multicooker-mode">ПЕЧЬ</span> 45 минут, 150&deg;C'),
            new Step('По окончании программы откройте крышку мультиварки и осторожно достаньте внутреннюю чашу. Дайте пирогу остыть в течение 30 минут.', 30, "Пирог остыл"),
            new Step('Выложите пирог на блюдо, аккуратно перевернув внутреннюю чашу, чтобы на блюде низ пирога оказался верхом')
        ], [
            'resources/img/apple_pie/1.jpg'
        ], 10, 15, 45, 2));

    for (var i = 0, len = items.length; i < len; i++) {
        items[i].id = i;
    }

    R.Recipes = items;
});