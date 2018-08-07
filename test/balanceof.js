'use strict';

const config = require('../config/default');
var server = config.default;

const Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider(server.provider));


// body
var args = process.argv.splice(2);
if(args.length<1){
    console.log("please input address");
    return;
}

var addr = args[0]

var metacoin = new web3.eth.Contract(config.abi, server.contract);
metacoin.methods.balanceOf( addr ).call().then( function(v){
	console.log(v);
})
