<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//https://electrictoolbox.com/php-curl-user-agent/
$verbo = explode("/", $_SERVER['REQUEST_URI']);
$verbo = array_filter($verbo);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.github.com/search/users?q='.$verbo[2]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 GTB5');
$html = curl_exec($ch);
echo $html;
