<?php
// отключаем проверку CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: content-type');


$name = "Данные не получены";
$phone = "Данные не получены";

if(isset($_POST['username'])) $name = $_POST['username'];
if (isset($_POST['userphone'])) $phone = $_POST['userphone'];

echo "Имя клиента: $name Номер телефона клиента: $phone";


?>
