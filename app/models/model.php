<?php


namespace app\models;

/**
 * Description of model
 *
 * @author Breno
 */
abstract class model {
    private $connection;
    
    
    public function __construct() {
        $this->connection= Connection::connect();
        
    }
    
    public function all() {
        
        $sql = "select *from {$this->table}";
        
        $all = $this->connection->prepare($sql);
        $all->execute();
        
        return $all->fetchAll();
        
    }
}
