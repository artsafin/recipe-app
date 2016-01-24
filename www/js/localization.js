strings = {};

function localize(lang) {
    if (!strings[lang]) {
        strings[lang] = {};
    }
    return function(key, value){
        strings[lang][key] = value;
    };
}

function translate(lang, fallbackT) {
    fallbackT = fallbackT ? fallbackT : function(key) { return key; };

    if (!strings[lang]) {
        return fallbackT;
    }
    return function(key){
        return strings[lang][key] ? strings[lang][key] : fallbackT(key);
    };
}
