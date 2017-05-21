module.exports = function (dir, extension, callback){
    
    var fs = require('fs');
    fs.readdir(dir,function listspecifiedextension(err, list){
        if(err)
            return callback(err);
            
        var arr = [];
        for(var i = 0; i < list.length; ++i){
            var file_name = list[i].split('.');
            if(file_name[1] === extension){
                arr.push(list[i]);
            }
        }
        callback(null, arr);
    });
    
}