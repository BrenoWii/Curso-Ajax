<?php
require '../../../config.php';

use app\models\user;



sleep (2);

$user = new user;


echo json_encode($user->all()) ;
