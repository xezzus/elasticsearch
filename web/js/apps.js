function apps(Name,Query,Callback){
    var Send = {};
    Send[Name] = Query;
    var xhr = new XMLHttpRequest;
    xhr.open("POST",'', true);
    xhr.setRequestHeader('Accept','application/apps');
    xhr.send(JSON.stringify(Send));
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            var response = $.parseJSON(xhr.responseText);
            Callback(response[Name]);
        }
    }
}

