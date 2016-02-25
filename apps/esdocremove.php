<?php
return function($id,$index){
    $db = $this->es();
    $res = $db->index($index.'/'.$id)->delete();
    return $res;
}
?>
