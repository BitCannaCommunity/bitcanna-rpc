const bcnaRpc = require('@bitcannacommunity/bitcanna-rpc');
const bitCanna = new bcnaRpc('localhost', '9888', 'rpcUsername', 'rpcPass');

bitCanna.call('sendtoaddress', ['Adress_bitcann', 'Value'], function (err, resB) {
	if (err !== null) {
		console.log('Bitcanna RPC error: ' + err )
	} else {
		console.log(resB.result)		
	}
})

