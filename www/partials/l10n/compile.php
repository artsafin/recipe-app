<?php

$opts = getopt('', ['lang:', 'src:', 'dst:']);

if (!isset($opts['lang']) || !isset($opts['src']) || !isset($opts['dst'])) {
    echo <<<USAGE
Usage: {$_SERVER['argv'][0]} --lang=LANG [--lang=LANG] --src=SOURCES --dst=DESTINATION

SOURCES: source dir with templates
DESTINATION: destination dir for compiled templates
LANG: languages to translate to

USAGE;
    exit(1);
}

if (!is_dir($opts['src']) || !is_readable($opts['src'])) {
    echo "Specified --src is not a directory or not readable\n";
    exit(1);
}

if (!is_dir($opts['dst']) || !is_readable($opts['dst'])) {
    if (mkdir($opts['dst'], 0777, true) === false) {
        echo "Specified --dst is not a directory, not readable and cannot create\n";
        exit(1);
    }
}

$opts['lang'] = is_array($opts['lang']) ? $opts['lang'] : [$opts['lang']];

function compile($src, $toLang) {
    global $lang, $strings;

    require_once __DIR__ . '/functions.php';
    $strings = require __DIR__ . '/strings.php';

    $lang = $toLang;

    ob_start();
    require $src;
    return ob_get_clean();
}

$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($opts['src']));
/** @var SplFileInfo $file */
foreach ($it as $file) {
    if ($file->getExtension() != 'php') {
        continue;
    }

    foreach ($opts['lang'] as $lang) {
        $path = rtrim($opts['dst'], DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $lang . $file->getBasename();

    }
}

