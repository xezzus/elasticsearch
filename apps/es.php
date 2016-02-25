<?php
return function(){
    if(!isset(self::$memory['dbEs'])){
        $config = $this->esconfig();
        self::$memory['dbEs'] = new humanity\ElasticSearchRaw($config['host'],$config['port']);
    }
    return self::$memory['dbEs']; 
}
?>
