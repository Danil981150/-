<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$mess = $_POST['mess'];

	$subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

	$success = mail("kollleeb@yandex.ru", $subject, $mess, $headers);
	echo $success

	$nameSecond = $_POST['name1'];
	$phoneSecond = $_POST['phone1'];

	$subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
	$headers = "From: $nameSecond\r\nReply-to: $phoneSecond\r\nContent-type: text/html; charset=utf-8\r\n";

	$success = mail("kollleeb@yandex.ru", $subject, $headers);
	echo $success;
?>