$(function(){
    // Exet
    if(window.location.pathname == '/exit'){
        cookie.del('esconnect');
        window.location.href = '/';
    }
    // Remove Doc
    $('#docs .glyphicon-remove').on('click',function(x){
        var id = $(x.target).data('id');
        var index = $('#docs').data('index');
        apps('esdocremove',{index:index,id:id},function(res){
            if(res.found === true){
                window.location.href='/index/'+index;
            }
        });
    });
});
