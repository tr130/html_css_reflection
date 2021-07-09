<?php

include('inc/connection.php');

try {$posts = $db->query('SELECT * FROM posts ORDER BY posted_date DESC LIMIT 3');
$posts = $posts->fetchAll(PDO::FETCH_ASSOC);}
catch(Exception $e) {
  echo $e->getMessage();
}

foreach($posts as $post) {
  $output = '<div class="col-xs-12 col-md-6 my-col-xl-4" id="latest_' . $post['id'];
  $output .= '"> <div class="latest_card card latest-' . $post['color'];
  $output .= '"> <div class="latest_img_container">';
  $output .= '<a href="' . $post['link'] . '">';
  $output .= '<img src="img/' . $post['img'] . '" class="latest_img card-img-top" alt="' . $post['alt'] . '"></a>';
  $output .= '<a href="' . $post['topic_link'] . '" class="latest_topiclink">' . $post['topic'] . '</a></div>';
  $output .= '<div class="card-body"><a href="' . $post['link'] . '" class="latest_titlelink">' . $post['title'] . '</a>';
  $output .= '<p class="latest_firstlines">' . $post['first_lines'] . '</p>';
  $output .= '<a class="btn latest_btn" href="' . $post['link'] . '">Read more</a>';
  $output .= '<div class="latest_byline"><img class="latest_authorimg" src="img/' . $post['author_img'] . '" alt="author">';
  $output .= '<div><p class="latest_postedby">' . $post['posted_by'] . '</p>';
  $output .= '<p class="latest_posteddate">' . $post['posted_date'] . '</p></div></div></div></div></div>';

  echo $output;
}