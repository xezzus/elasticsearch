$(function(){
    if(window.location.pathname == '/exit'){
        cookie.del('esconnect');
        window.location.href = '/';
    }
});
