<?php
return function($host=false,$port=false){
    $file = __DIR__.'/../config/esconfig.json';
    if($host === false && $port === false){
        $config = file_get_contents($file);
        $config = json_decode($config,true);
    } else {
        $config['host'] = $host;
        $config['port'] = $port;
        file_put_contents($file,json_encode($config));
    }
    return ['host'=>$config['host'],'port'=>$config['port']];
}
?>
