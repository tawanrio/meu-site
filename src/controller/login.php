<?php 

if(count($_POST) > 0) {
   $login = new User($_POST);
   if($login->validate()){
      require_once(VIEW_PATH . '/access.php');
   }else{
      $invalid = "<div role='alert' class='my-3 alert alert-danger'><span>E-mail ou Senha Inválido!</span></div>";
      require_once(VIEW_PATH . '/login.php');
   }
}else{
   require_once(VIEW_PATH . '/login.php');
}
