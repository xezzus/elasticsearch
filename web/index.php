<?php
require_once(__DIR__.'/../vendor/autoload.php');
(new humanity\Config(require_once(__DIR__.'/../config/main.php')));
(new humanity\Site);
?>
