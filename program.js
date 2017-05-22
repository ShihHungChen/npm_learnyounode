
/***This is the lesson one***/
/*
console.log("HELLO WORLD");
*/

/***This is the lesson two***/
/*
var sum = 0;
for(var i = 2; i < process.argv.length; ++i ){
    sum += Number(process.argv[i]);
}
console.log(sum);
*/

/***This is the lesson three***/
/*
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var string = buf.toString();
var arr = string.split('\n');
console.log(arr.length - 1);
*/

/***This is the lesson four***/
/*
var fs = require('fs');
function logAnswer(){
    fs.readFile(process.argv[2], function readDone(err, Contents){
        
        if(err) throw err;
        
        var lines = Contents.toString().split('\n').length - 1;
        console.log(lines);
    })
}
logAnswer();
*/

/***This is the lesson five***/
/*
var fs = require('fs');
var dir = process.argv[2];
var extension = process.argv[3];
fs.readdir(dir, function listSpecifiedExtension(err, list){
    if(err)
        console.log(err);
    
    for(var i = 0; i < list.length; ++i){
        var file_name = list[i].split('.');
        if( file_name[1] === extension ){
            console.log(list[i]);
        }
    }
});
*/

/***This is lesson six***/
/*
var mymodule = require('./extractspecifiedfile.js');
mymodule(process.argv[2], process.argv[3], function (err, list){
    if(err)
        return console.error('There was an error: ',err);
    
    list.forEach(function(file){
       console.log(file);
    });
});
*/

/***This is the lesson seven***/
/*
var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
   response.setEncoding('utf8');
   response.on('data', console.log);
   response.on('err',console.error)
});
*/

/***This is the lesson eight***/
/*
var http = require('http');
var bl = require('bl');
var url = process.argv[2];
http.get(url, function(response){
   response.pipe(bl(function(err, data){
       if(err){
            return console.error("There was an error : ", err);
       }
       console.log(data.length);
       console.log(data.toString());
   })); 
});
*/

/***This is lesson nine***/
/*
// my answer
var http = require('http');
var bl = require('bl');
var container = [];
var finished = 0;
http.get(process.argv[2], function(response){
    response.pipe(bl(function(err,data){
        if(err){
            console.error('There was an error: ', err);
        }
        container[0] = data.toString();
        finished++;
    }));
})
http.get(process.argv[3], function(response){
    response.pipe(bl(function(err,data){
        if(err){
            console.error('There was an error: ', err);
        }
        container[1] = data.toString();
        finished++;
    }));
})
http.get(process.argv[4], function(response){
    response.pipe(bl(function(err,data){
        if(err){
            console.error('There was an error: ', err);
        }
        container[2] = data.toString();
        finished++;
    }));
})
function wait(){
    if(finished !== 3){
        setTimeout(wait, 2000);
    }
    else{
        for(var j = 0; j < 3; j++){
            console.log(container[j]);
        }
    }
}
wait();
//official solution
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/
