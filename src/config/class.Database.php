<?php 

class Database{
  
   public static function conection(){
      $host = 'localhost';
      $user = 'root';
      $pass = '';
   
      try {
         $pdo = new PDO("mysql:dbname=tawanriodb;host=$host",$user,$pass);
      } catch (PDOException $er) {
         echo "ERRO COM O BANCO DE DADOS: ". $er->getMessage();
      } catch(Exception $er){
         echo "ERRO GENERICO: ".$er->getMessage();
      }  

      return $pdo;
   }

   public static function getAcessAll(){
      $get = "SELECT access FROM count_access" ;
      $query = self::conection()->query($get);
      $query = $query->fetchAll(PDO::FETCH_ASSOC);
      $access = 0;

      foreach($query as $key => $value){
         $access += $value['access'];
      }
      return $access;
   }
   public static function getAll($table){
      $get = "SELECT * FROM $table" ;
      $query = self::conection()->query($get);
      $query = $query->fetchAll(PDO::FETCH_ASSOC);

      return $query;
   }

   public static function get($table, $column, $value){
      $get = "SELECT * FROM $table WHERE $column = '$value'";
      $query = self::conection()->query($get);
      $query = $query->fetch(PDO::FETCH_ASSOC);
      
      return $query;
   }
   
   public static function set($table,$column, $value, $ip){
      $set = "UPDATE $table SET $column = '$value' WHERE ip = '$ip'";
      $query = self::conection()->query($set);

   }
   
   public static function create($table,$ip, $date){
      $create = "INSERT INTO $table (ip, date, access) VALUES ('$ip','$date',1)";
      $query = self::conection()->query($create);
   }
   
   public static function countAccess($ip){
      $user = self::get('count_access','ip',$ip);
      $date = $user['date'];

      $arrDate = count(explode(',', $date));

      return $arrDate;
   }

}
