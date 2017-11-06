<?php

require '../../../config.php';

use app\models\user;


$name= filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING);
$email= filter_input(INPUT_POST,'email',FILTER_SANITIZE_STRING);


$user = new user;
$cadastrado= $user->create($name, $email);

if ($cadastrado){
    
    echo'sucesso';
    
}else{
    echo 'falha';
}
