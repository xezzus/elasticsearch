$(function(){
    $('#ESConnect input[name=BtnConnect]').on('click',function(){
        var host = $('#ESConnect input[name=host]').val();
        var port = $('#ESConnect input[name=port]').val();
        apps('esconnect',{host:host,port:port},function(res){
            if(res === false) {
                alert('Error');
                return false;
            } else {
                cookie.set('esconnect',true,Math.pow(10,10));
                window.location.href = '/';
            }
        });
    });
});
