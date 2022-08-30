<?php


$access_test = isset($_COOKIE["access_test"]) ? $_COOKIE['access_test'] : null;


if(gettype($_SERVER['REMOTE_ADDR']) == 'number'){
   $ip = $_SERVER['REMOTE_ADDR'];
}else{
   $ip = '1';
}

$user = Database::get('count_access','ip',$ip);

if($access_test != true){
   setcookie("access_test",true);
$date = new DateTime();

if(!empty($user)){
   $updateDate = $user['date'];
   $updateDate = $date->format('d/m-G:i'). ',' .$updateDate;
   Database::set('count_access','date', $updateDate, $ip);
   
   $access = Database::countAccess($ip);
   Database::set('count_access','access', $access, $ip);
   
}else{
   Database::create('count_access',$ip, $date->format('d/m-G:i'));
}
}

function getLastAccess($access){
   $firstComand = strpos($access, ',');
   
   if(!$firstComand){
      return str_replace('-', ' às ', $access);
   }
   
   $access = substr($access, 0, $firstComand);

   return str_replace('-', ' às ', $access);
}

