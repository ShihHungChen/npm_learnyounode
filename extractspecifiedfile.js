module.exports = function (dir, extension, callback){
    
    var fs = require('fs');
    var path = require('path');
    fs.readdir(dir,function listspecifiedextension(err, list){
        if(err)
            return callback(err);
            
        list = list.filter(function(file){
           return path.extname(file) === '.' + extension;
        });
        callback(null, list);
    });
    
}