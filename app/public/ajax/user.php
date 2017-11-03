<?php
require '../../../config.php';

use app\models\user;



sleep (1);

$user = new user;
$id = $_GET['id'];


echo json_encode($user->find('id',$id)) ;
