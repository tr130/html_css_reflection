<?php

try {
  $db = new PDO("mysql:host=localhost;port=3306;dbname=henrygol_latest");
  $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
  echo "Unable to connect";
  //echo $e->getMessage();
  exit;
}
