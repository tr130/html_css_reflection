<?php

include('inc/connection.php');

try {$posts = $db->query('SELECT * FROM posts ORDER BY posted_date DESC LIMIT 3');
$posts = $posts->fetchAll(PDO::FETCH_ASSOC);}
catch(Exception $e) {
  echo $e->getMessage();
}
