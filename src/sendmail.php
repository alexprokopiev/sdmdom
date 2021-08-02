<?php

if ($_POST["phone"] == '') return 0;

$email = array('heatlead@yandex.ru', ''); // Кому
$from = "zayavka@site.ru"; // от кого

$to = implode(",", $email);
$leadtype = trim($_POST["leadtype"]);
$sitename = trim($_POST["city"]);
$sitetype = trim($_POST["type"]);
$utm_source = trim($_POST["utm_source"]);
$utm_medium = trim($_POST["utm_medium"]);
$utm_campaign = trim($_POST["utm_campaign"]);
$utm_term = trim($_POST["utm_term"]);
$utm_content = trim($_POST["utm_content"]);
$phone = trim($_POST["phone"]);
$client_project = trim($_POST["client_project"]);
$quest1 = trim($_POST["quest1"]);
$quest2 = trim($_POST["quest2"]);
$quest3 = trim($_POST["quest3"]);
$quest4 = trim($_POST["quest4"]);
$quest5 = trim($_POST["quest5"]);
$quest6 = trim($_POST["quest6"]);
$host = $_SERVER['SERVER_NAME'];

$subject = "Заявка (Кл. ДОМ) - " . $sitetype . " - " . $sitename . "\r\n";
$headers = "From: " . strip_tags($from) . "\r\n";
$headers .= "Reply-To: " . strip_tags($from) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$message = "<html><body style='font-family:Arial,sans-serif;'>\r\n";
$message .= "<h2>Тип заявки: " . $leadtype . "</h2>\r\n";

if (!empty($quest1)) {
	$message .= "<p><strong>Может быть, у Вас уже есть проект? Расскажите! </strong> " . $quest1 . "</p>\r\n";
}

if (!empty($quest2)) {
	$message .= "<p><strong>Уже определились с размерами дома? </strong> " . $quest2 . "</p>\r\n";
}

if (!empty($quest3)) {
	$message .= "<p><strong>Из какого материала планируете строить? </strong> " . $quest3 . "</p>\r\n";
}

if (!empty($quest4)) {
	$message .= "<p><strong>Какой стиль архитектуры Вам ближе всего? </strong> " . $quest4 . "</p>\r\n";
}

if (!empty($quest5)) {
	$message .= "<p><strong>Когда планируете начать строительство? </strong> " . $quest5 . "</p>\r\n";
}

if (!empty($quest6)) {
	$message .= "<p><strong>Кстати, у Вас уже есть участок? </strong> " . $quest6 . "</p>\r\n";
}

if (!empty($phone)) {
	$message .= "<p><strong>Телефон:</strong> " . $phone . "</p>\r\n";
}

if (!empty($utm_source)) {
	$message .= "<p><strong>Источник перехода:</strong> " . $utm_source . " " . $utm_medium . " " . $utm_campaign . " " . $utm_term . " " . $utm_content . "</p>\r\n";
}

$message .= "<p><strong>Адрес сайта: </strong> " . $host . "</p>\r\n";
$message .= "</body></html>\r\n";

mail($to, $subject, $message, $headers);
// header('Refresh: 0.5; url=https://leads4you.ru/kitchen3/');
