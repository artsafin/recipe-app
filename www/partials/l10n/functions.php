<?php

function trans($key){
    global $lang, $strings;

    return isset($strings[$lang][$key]) ? $strings[$lang][$key] : $key;
}