<?php
header('Content-Type: application/json');
$name = $_POST['name'];
$email = $_POST['email'];
$usermessage = $_POST['usermessage'];
$message = "Сообщение от пользователя: $name, $email, $usermessage";

$result = mail('akmolgt@gmail.com', 'Тема письма', $message);

echo json_encode(array(
    'status' => $result
));