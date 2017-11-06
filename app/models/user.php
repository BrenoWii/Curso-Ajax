<?php


namespace app\models;


class user extends model{
    protected  $table= 'users';
    
    public function create($name,$email) {
        
        $sql = "INSERT INTO {$this->table} (nome,email) values (:name,:email )";
        $create = $this->connection->prepare($sql);
        $create->bindValue(':name',$name);
        $create->bindValue(':email',$email);
        $create->execute();
        return $this->connection->lastInsertId();

        
    }
    
    
}
