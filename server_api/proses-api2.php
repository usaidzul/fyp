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

  	$query = mysqli_query($mysqli, "INSERT INTO services SET
      date	  = '$today', 
      type = '$postjson[type]',
      car_id = '$postjson[car_id]'
  	");

  	$idcust = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true, 'id'=>$idcust));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='getdata'){
  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM services where car_id = 2 ORDER BY id DESC LIMIT $postjson[start],$postjson[limit]");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
        'id' => $row['id'],
        'date' => $row['date'],
        'type' => $row['type'],

  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }

  elseif($postjson['aksi']=='update'){
  	$query = mysqli_query($mysqli, "UPDATE services SET 
  		model='$postjson[model]' WHERE id='$postjson[id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=='delete'){
  	$query = mysqli_query($mysqli, "DELETE FROM services WHERE id='$postjson[id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  /*elseif($postjson['aksi']=="login"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM users WHERE name='$postjson[name]' AND password='$password'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'car_id' => $data['car_id'],
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
  }*/


?>