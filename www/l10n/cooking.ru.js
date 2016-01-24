(function(l) {

    l("{{ timeMin }} min passed for step {{ stepCurrent }} of {{ stepTotal }}",
        "Шаг {{ stepCurrent }} из {{ stepTotal }}: время вышло ({{ timeMin }} мин)");

    l('Clear data?', 'Очистить данные?');
    l('Are you sure you want to reset Ingredients and Cooking data?', 'Вы уверены, что хотите сбросить ингредиенты и готовку?');

    l('Keep data', 'Оставить');
    l('Clear data', 'Очистить данные');
    l('Your meal is ready!', 'Ваше блюдо готово!');
    l('Next: ', 'Далее: ');

})(localize('ru'));