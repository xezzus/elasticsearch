var cookie = {
    set:function(name,value,sec){ 
        var exdate=new Date(); 
        var sec=exdate.getSeconds()+sec; 
        exdate.setSeconds(sec); 
        document.cookie=name+ "=" +escape(value)+((sec==null) ? "" : ";expires="+exdate.toGMTString()+"; path=/;");
    },
    get:function(name){ 
        var start=document.cookie;
        var start = start.split(";");
        for(var key in start){
          var check = start[key].split('=');
          check[0] = check[0].replace(" ","");
          if(name==check[0]) {
            return unescape(check[1]);
          }
        }
        return '';
    },
    del:function(name){
        document.cookie = name+"=''; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
    },
    push:function(cookieName,data,sec){
        var dataCookie = cookie.get(cookieName);
        if(dataCookie != ''){
            var dataCookie = JSON.parse(dataCookie);
            var data = $.extend(dataCookie,data);
        }
        for(name in data){
            if(data[name] == false){
                //data[name] = '';
                //delete data[name];
            }
        }
        if(JSON.stringify(data) != '{}'){
            var data = JSON.stringify(data);
            cookie.set(cookieName,data,99999*99999);
        } else {
            cookie.del(cookieName);
        }
    },
    extend:function(cookie1,cookie2,sec){
        var data1 = this.get(cookie1);
        try{
            var data1 = JSON.parse(data1);
        } catch(e){
            var data1 = {};
        }
        var data2 = this.get(cookie2);
        try{
            var data2 = JSON.parse(data2);
        } catch(e){
            var data2 = {};
        }
        for(var i in data2){
            if(data2[i] == false) delete data1[i];
            else data1[i] = data2[i];
        }
        if(JSON.stringify(data1) != '{}'){
            var data1 = JSON.stringify(data1);
            cookie.set(cookie1,data1,99999*99999);
        } else {
            cookie.del(cookie1);
        }

    },
    pull:function(name){
        var data = this.get(name);
        try{
            var data = JSON.parse(data);
        } catch(e){
            var data = {};
        }
        for(var i in data){
            if(data[i] == false) delete data[i];
        }
        return data;
    }
}

