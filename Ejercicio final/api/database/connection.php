<?php
    require '../../api/configuration/config.php';

    class Database{
        private $host;
        private $db_name;
        private $username;
        private $password;
        public $conn;
        
        public function __construct(){
            $this->conn = null;
            $this->host = constant('DB_HOST');
            $this->db_name = constant('DB_NAME');
            $this->username = constant('DB_USER');
            $this->password = constant('DB_PASSWORD');
        }
            

        public function getConnection(){
            $this->conn = null;

            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
            }

            return $this->conn;
        }
    }
?>