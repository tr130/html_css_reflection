<?php

session_start();

include('connection.php');

$error = array();

if ($_POST) {
  if (!empty($_POST["name"])) {
  $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
  $_SESSION["name"] = $name;
  } else {
    $error[] = "Please have a name.";
  }

  $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
  $_SESSION["email"] = $email;
  if (!$email) {
    $error[] = "Please provide a valid email address.";
  }

  $marketing = filter_input(INPUT_POST, "marketing", FILTER_VALIDATE_BOOLEAN);
  if (!$marketing) {
    $error[] = "In order to subscribe to our newsletter you must select that you are happy to receive marketing information.";
  }

  if (empty($error)) {
    try {
      $insert = $db->prepare("INSERT INTO newsletter (name, email, marketing) VALUES (:name, :email, :marketing)");
      $insert->bindParam(":name", $name, PDO::PARAM_STR);
      $insert->bindParam(":email", $email, PDO::PARAM_STR);
      $insert->bindParam(":marketing", $marketing, PDO::PARAM_BOOL);
      $insert->execute();
      $_SESSION["success"] = "Thank you for signing up to our marketing emails. Please check your inbox.";
      unset($_SESSION["name"]);
      unset($_SESSION["email"]);
    } catch (Exception $e) {
      echo $e->getMessage();
      exit;
    }
  }
}

$_SESSION["error"] = $error;
header('Location:../index.php#newsletter');
exit;



