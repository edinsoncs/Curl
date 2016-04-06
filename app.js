var express = require('express');
var servidor = express();

//Importamos curl
var Curl = require('node-libcurl').Curl;

var curl = new Curl();

curl.setOpt('URL', 'http://tradingserverbinary.zulutrade.com/');
curl.setOpt('FOLLOWLOCATION', true);

curl.on('end', function(status, body, head){
	console.info(status);
	console.info('---------');
	console.info(head);
	console.info(body);
	//Ceramos con curl
	this.close();

});


curl.on( 'error', curl.close.bind( curl ) );
curl.perform();


function puerto(port){
	port =  3000;
	
	return port
}
function name(n){
	var name = ' en el Puerto: ';
	return n + name;
}

servidor.listen(puerto(), function(){
	console.log(name('CorriendoServer') + puerto());
});

