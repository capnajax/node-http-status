const
	HTTP10 = 'HTTP/1.0'
	HTTP11 = 'HTTP/1.1',
	HTTP2 = 'HTTP/2',
	HTCPCP = 'HTCPCP',
	HTCPT = 'HTCPCP-TEA',
	WEBDAV = 'WebDAV',
	NON_STANDARD = 'non-standard';

var	standards = [

		{	rfc: 1945,
			title: 'Hypertext Transfer Protocol -- HTTP/1.0',
			protocol: HTTP10,
			defines: [
				200, 201, 202,      204,
				300, 301, 302,      304,
				400, 401,      403, 404,
				500, 501, 502, 503
			]
		},{
			rfc: 2068,
			title: 'Hypertext Transfer Protocol -- HTTP/1.1',
			protocol: HTTP11,
			defines: [
				100, 101, 
				200, 201, 202, 203, 204, 205, 206,
				300, 301, 302, 303, 304, 305,
				400, 401, 402, 403, 404, 405, 406, 407, 408, 409,
				410, 411, 412, 413, 414, 415,
				500, 501, 502, 503, 504, 505,
			],
			reserves: [306]
		},{
			rfc: 2295,
			title: 'Transparent Content Negotiation in HTTP',
			protocol: HTTP11,
			defines: [506]
		},{
			rfc: 2616,
			title: 'Hypertext Transfer Protocol -- HTTP/1.1',
			protocol: HTTP11,
			defines: [307, 416, 417]
		},{
			rfc: 2774,
			title: 'An HTTP Extension Framework',
			protocol: HTTP11,
			defines: [510]
		},{
			rfc: 2817,
			title: 'Upgrading to TLS Within HTTP/1.1',
			protocol: HTTP11,
			defines: [426]
		},{
			rfc: 3229,
			title: 'Delta encoding in HTTP',
			protocol: HTTP11,
			defines: [226]
		},{
			rfc: 6585,
			title: 'Additional HTTP Status Codes',
			protocol: HTTP11,
			defines: [428, 429, 431, 511]
		},{
			rfc: 7231,
			title: 'Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content',
			protocol: HTTP11,
			defines: [
				100, 101, 
				200, 201, 202, 203, 204, 205,
				300, 301, 302, 303,      305,      307,
				400,      402, 403, 404, 405, 406,      408, 409,
				410, 411,      413, 414, 415,      417,
				                              426,
				500, 501, 502, 503, 504, 505,
			],

		},{
			rfc: 7232,
			title: 'Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests',
			protocol: HTTP11,
			defines: [304, 412]
		},{
			rfc: 7233,
			title: 'Hypertext Transfer Protocol (HTTP/1.1): Range Requests',
			protocol: HTTP11,
			defines: [206, 416]
		},{
			rfc: 7235,
			title: 'Hypertext Transfer Protocol (HTTP/1.1): Authentication',
			protocol: HTTP11,
			defines: [206, 401, 407, 416]
		},{
			rfc: 7538,
			title: 'The Hypertext Transfer Protocol Status Code 308 (Permanent Redirect)',
			protocol: HTTP11,
			defines: [206, 416]
		},{
			rfc: 7694,
			title: 'Hypertext Transfer Protocol (HTTP) Client-Initiated Content-Encoding',
			protocol: HTTP11,
			defines: [415]
		},{
			rfc: 7725,
			title: 'An HTTP Status Code to Report Legal Obstacles',
			protocol: HTTP11,
			defines: [451]
		},{
			rfc: 8297,
			title: 'An HTTP Status Code for Indicating Hints',
			protocol: HTTP11,
			defines: [103]
		},{
			rfc: 7540,
			title: "Hypertext Transfer Protocol Version 2 (HTTP/2)",
			protocol: HTTP2,
			extends: HTTP11,
			defines: [421],
			removes: [101]
		},{
			rfc: 2324,
			title: 'Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)',
			extends: 2068,
			protocol: HTCPCP,
			defines: [418]
		},{
			rfc: 7168,
			title: 'The Hyper Text Coffee Pot Control Protocol for Tea Efflux Appliances (HTCPCP-TEA)',
			extends: 2324,
			protocol: HTCPT,
			defines: [300, 403, 418]
		},{ 
			rfc: 2518,
			title: 'HTTP Extensions for Distributed Authoring -- WEBDAV',
			extends: HTTP11,
			protocol: WEBDAV,
			defines: [201, 204, 207, 403, 405, 409, 412, 415, 423, 502, 507]
		},{
			title: 'HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)',
			rfc: 4918,
			protocol: WEBDAV,
			defines: [207, 422, 423, 424, 507]
		},{
			title: 'Binding Extensions to Web Distributed Authoring and Versioning (WebDAV)',
			rfc: 5842,
			protocol: WEBDAV,
			defines: [208, 508]

		},{
			rfc: 8144,
			title: 'Use of the Prefer Header Field in Web Distributed Authoring and Versioning (WebDAV)',
			protocol: WEBDAV,
			defines: [412]
		},{
			// all non-standard stati
			rfc: -1,
			protocol: NON_STANDARD,
			defines: [420, 444, 449, 450, 494, 495, 496, 497, 499, 509, 598, 599],
		}
	],
	protocols = {};

// sort by RFC, but put HTTP/1.1 and HTTP2 standards last
standards.sort((a,b) => {
	var result,
		precedence = x => {
			switch(x.protocol) {
			case HTTP2:
				return 2;
			case HTTP11:
				return 1;
			default:
				return 0;
			}
		},
		pa = precedence(a),
		pb = precedence(b);

	if (pa == pb) {
		result = a.rfc - b.rfc;
	} else {
		result = pa - pb;
	}
	return result;
});

var allProtocols = new Set();
standards.forEach((standard) => {
	standard.protocol && allProtocols.add(standard.protocol);
})

function rollProtocol(protocol) {
	var protocolName, lastRfc, rfcs, defines={}, result;

	if (typeof protocol === 'string') {
		protocolName = protocol;
	} else {
		lastRfc = protocol;
		protocolName = standards.find(p => p.rfc == lastRfc);
		protocolName && (protocolName = protocolName.protocol);
	}

	rfcs = standards.filter(s => {
			var accept = true;
			if (protocolName != NON_STANDARD) {
				accept = accept && ( !lastRfc || s.rfc <= lastRfc);
				accept = accept && ( protocolName == s.protocol);
			}
			return accept;
		});

	if (rfcs.length > 0 && rfcs[0].extends) {
		rfcs = rollProtocol(rfcs[0].extends).rfcs.concat(rfcs);
	}

	rfcs.forEach(rfc => {
			rfc.defines && rfc.defines.forEach(code => {
					defines[code] = rfc.rfc;
				});
		});

	result = {
		name: protocolName,
		rfcs: rfcs,
		codes: defines
	}
	return result;
}


allProtocols.forEach(p => {
	protocols[p] = rollProtocol(p);
});

module.exports = {
	HTTP10	: protocols[HTTP10],
	HTTP11	: protocols[HTTP11],
	HTTP2	: protocols[HTTP2],
	HTCPCP	: protocols[HTCPCP],
	HTCPT	: protocols[HTCPT],
	WEBDAV	: protocols[WEBDAV],
	NON_STANDARD : protocols[NON_STANDARD],
	constants : {
		HTTP10	: 'HTTP10',
		HTTP11	: 'HTTP11',
		HTTP2	: 'HTTP2',
		HTCPCP	: 'HTCPCP',
		HTCPT	: 'HTCPT',
		WEBDAV	: 'WEBDAV',
		NON_STANDARD : 'NON_STANDARD'
	}
}