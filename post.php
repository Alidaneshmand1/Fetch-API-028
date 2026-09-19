<?php
header("Access-Control-Allow-Origin: *");
echo json_encode($_POST , JSON_PRETTY_PRINT);