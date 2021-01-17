![bitcannaRpp](https://i.imgur.com/wW9bgsF.png)
 
 
# Bitcanna-rpc

*   [What is it?](#what-is-it "What is it?")
*   [Installation](#installation "Installation")
*   [Usage](#usage "Usage")


## What is it? 
Bitcanna-rpc is a library that allows you to interact with the json-rpc part of a bitcanna client (regardless of the coin)
A simple initialization with the client's rpc identifier and you will be able to recover all the information from bitcanna-cli

## Installation 

1/ In your nodeJs project, create `.npmrc` file and add this:
	
	@bitcannacommunity:registry=https://npm.pkg.github.com 

2/ Install lib:

`npm install @bitcannacommunity/bitcanna-rpc`

## Usage  

    const bcnaRpc = require('@bitcannacommunity/bitcanna-rpc');
    const bitCanna = new bcnaRpc('localhost', '9888', 'rpcUsername', 'rpcPass');
    
    bitCanna.call('getinfo', [], function (err, resB) {
    	if (err !== null) {
    		console.log('Bitcanna RPC error: ' + err )
    	} else {
    		console.log(resB.result)		
    	}
    })
