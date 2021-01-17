var http = require('http')

class bcnaRpc {
	constructor(hostname, port, user, pass) {
		this.hostname = hostname;
		this.port = port;
		this.user = user;
		this.pass = pass;
	}	
	call(method, params, cb) {
		var postData = JSON.stringify({
			method: method,
			params: params,
			id: '1'
		})		
		const options = {
			hostname: this.hostname,
			port: this.port,
			path: '/',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': postData.length,
			},
			auth: this.user + ':' + this.pass
		}
		const req = http.request(options, (res) => {
			this.cb_handleRequestResponse(res, cb)
		})		
		req.on('error', (error) => {
			cb(error.message)
		})		
		req.write(postData)
		req.end()		
	}
	cb_handleRequestResponse (res, cb) {
		var data = ''
		res.setEncoding('utf8')
		res.on('data', function (chunk) {
			data += chunk
		})
		res.on('end', function () {
			if (res.statusCode === 401) {
				cb(res.statusCode)
			} else {
				try {
					data = JSON.parse(data)
					cb(null, data)
				} catch(err){
					cb(err, null)
				}      
			}
		})
	} 
}

module.exports = bcnaRpc;
