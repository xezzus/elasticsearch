<?php
return function(){
    $db = $this->es();
    $list = $db->index('/_mapping')->get();
    return $list;
}
?>
