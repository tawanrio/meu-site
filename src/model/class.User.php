<?php 

class User{
   public $user;

   public function __construct($user){
      $this->user = $user;
   }
   public  function validate(){
      $userBD = Database::get('usuarios','email', $this->user['email']);

      if(!empty($userBD)){
         if($this->user['pass'] === $userBD['pass']){
            return true;
         }else{
            return false;
         }
      }
   }
}