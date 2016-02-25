<?php
return function($host=false,$port=false){
    if($host === false && $port === false){
        $config = $this->esconfig();
        $host = $config['host'];
        $port = $config['port'];
    } else {
        $this->esconfig($host,$port);
    }
    $db = $this->es();
    $info = $db->index()->get();
    if(isset($info['version'])) return $info;
    else return false;
}
?>
