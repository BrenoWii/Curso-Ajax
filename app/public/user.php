<?php
require '../../config.php';

use app\models\user;

$user = new user;


echo json_encode($user->all()) ;
