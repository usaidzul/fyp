<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');


  if($postjson['aksi']=='add'){

  	$query = mysqli_query($mysqli, "INSERT INTO cars SET
      noPlate = '$postjson[noPlate]',
  		model = '$postjson[model]',
      user_id = '$postjson[user_id]',
  		created_at	  = '$today' 
  	");

  	$idcust = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true, 'car_id'=>$idcust));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='getdata'){
  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM cars where user_id = 2 ORDER BY car_id DESC LIMIT $postjson[start],$postjson[limit]");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
        'car_id' => $row['car_id'],
        'noPlate' => $row['noPlate'],
  			'model' => $row['model'],
  			'created_at' => $row['created_at'],

  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='update'){
  	$query = mysqli_query($mysqli, "UPDATE cars SET 
  		model='$postjson[model]' WHERE car_id='$postjson[car_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=='delete'){
  	$query = mysqli_query($mysqli, "DELETE FROM cars WHERE car_id='$postjson[car_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=="login"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM users WHERE name='$postjson[name]' AND password='$password'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'user_id' => $data['user_id'],
        'username' => $data['name'],
        'password' => $data['password']
      );

      if($data['status']=='y'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }

  elseif($postjson['aksi']=="register"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO users SET 
      name = '$postjson[name]',
      password = '$password',
      phoneNo = '$postjson[phoneNo]',
      address = '$postjson[address]',
      email = '$postjson[email]',
      status   = 'y'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }


?>