/**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and
 * RFC7538 (Permanent Redirect) are supported.
 *
 * Based on the org.apache.commons.httpclient.HttpStatus Java API.
 *
 * Ported by Bryce Neal.
 */

protocols = require('./protocols');

var statusCodes = {},
	defaultProtocol = protocols.constants.HTTP11

statusCodes[exports.CONTINUE 			= 100] = "Continue";
statusCodes[exports.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
statusCodes[exports.PROCESSING 			= 102] = "Processing";
statusCodes[exports.EARLY_HINTS 		= 103] = "Early Hints";

statusCodes[exports.OK 					= 200] = "OK";
statusCodes[exports.CREATED 			= 201] = "Created";
statusCodes[exports.ACCEPTED 			= 202] = "Accepted";
statusCodes[exports.NON_AUTHORITATIVE_INFORMATION = 203] = "Non Authoritative Information";
statusCodes[exports.NO_CONTENT 			= 204] = "No Content";
statusCodes[exports.RESET_CONTENT 		= 205] = "Reset Content";
statusCodes[exports.PARTIAL_CONTENT 	= 206] = "Partial Content";
statusCodes[exports.MULTI_STATUS 		= 207] = "Multi-Status";
statusCodes[exports.ALREADY_REPORTED 	= 208] = "Already Reported"
statusCodes[exports.IM_USED 			= 226] = "IM Used";

statusCodes[exports.MULTIPLE_CHOICES 	= 300] = "Multiple Choices";
statusCodes[exports.MOVED_PERMANENTLY 	= 301] = "Moved Permanently";
statusCodes[exports.MOVED_TEMPORARILY 	= 302] = "Moved Temporarily";
statusCodes[exports.SEE_OTHER 			= 303] = "See Other";
statusCodes[exports.NOT_MODIFIED 		= 304] = "Not Modified";
statusCodes[exports.USE_PROXY 			= 305] = "Use Proxy";
statusCodes[exports.TEMPORARY_REDIRECT 	= 307] = "Temporary Redirect";
statusCodes[exports.PERMANENT_REDIRECT 	= 308] = "Permanent Redirect";

statusCodes[exports.BAD_REQUEST 				= 400] = "Bad Request";
statusCodes[exports.UNAUTHORIZED 				= 401] = "Unauthorized";
statusCodes[exports.PAYMENT_REQUIRED 			= 402] = "Payment Required";
statusCodes[exports.FORBIDDEN 					= 403] = "Forbidden";
statusCodes[exports.NOT_FOUND 					= 404] = "Not Found";
statusCodes[exports.METHOD_NOT_ALLOWED		 	= 405] = "Method Not Allowed";
statusCodes[exports.NOT_ACCEPTABLE 				= 406] = "Not Acceptable";
statusCodes[exports.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
statusCodes[exports.REQUEST_TIMEOUT 			= 408] = "Request Timeout";
statusCodes[exports.CONFLICT 					= 409] = "Conflict";
statusCodes[exports.GONE 						= 410] = "Gone";
statusCodes[exports.LENGTH_REQUIRED 			= 411] = "Length Required";
statusCodes[exports.PRECONDITION_FAILED 		= 412] = "Precondition Failed";
statusCodes[exports.REQUEST_TOO_LONG 			= 413] = "Request Entity Too Large";
statusCodes[exports.REQUEST_URI_TOO_LONG		= 414] = "Request-URI Too Long";
statusCodes[exports.UNSUPPORTED_MEDIA_TYPE 		= 415] = "Unsupported Media Type";
statusCodes[exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "Requested Range Not Satisfiable";
statusCodes[exports.EXPECTATION_FAILED 			= 417] = "Expectation Failed";
statusCodes[exports.IM_A_TEAPOT 				= 418] = "I'm a teapot";
statusCodes[exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "Insufficient Space on Resource";
statusCodes[exports.ENHANCE_YOUR_CALM 			= 420] = "Enhance your calm";
statusCodes[exports.MISDIRECTED_REQUEST 		= 421] = "Misdirected Request";
statusCodes[exports.UNPROCESSABLE_ENTITY 		= 422] = "Unprocessable Entity";
statusCodes[exports.LOCKED 						= 423] = "Locked";
statusCodes[exports.FAILED_DEPENDENCY  			= 424] = "Failed Dependency";
statusCodes[exports.UPGRADE_REQUIRED 			= 426] = "Upgrade Required";
statusCodes[exports.PRECONDITION_REQUIRED 		= 428] = "Precondition Required";
statusCodes[exports.TOO_MANY_REQUESTS 			= 429] = "Too Many Requests";
statusCodes[exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";
statusCodes[exports.NO_RESPONSE 				= 444] = "No Response";
statusCodes[exports.RETRY_WITH 					= 449] = "Retry With";
statusCodes[exports.BLOCKED_BY_PARENTAL_CONTROLS = 450] = "Blocked by Windows Parental Controls";
statusCodes[exports.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "Unavailable For Legal Reasons";
statusCodes[exports.SSL_CERTIFICATE_ERROR 		= 495] = "SSL Certificate Error"
statusCodes[exports.SSL_CERTIFICATE_REQUIRED 	= 496] = "SSL Certificate Required"
statusCodes[exports.HTTP_REQUEST_TO_HTTPS_PORT 	= 497] = "HTTP Request Sent to HTTPS Port"
statusCodes[exports.CLIENT_CLOSED_REQUEST 		= 499] = "Client Closed Request";

statusCodes[exports.INTERNAL_SERVER_ERROR 		= 500] = "Server Error";
statusCodes[exports.NOT_IMPLEMENTED 			= 501] = "Not Implemented";
statusCodes[exports.BAD_GATEWAY 				= 502] = "Bad Gateway";
statusCodes[exports.SERVICE_UNAVAILABLE 		= 503] = "Service Unavailable";
statusCodes[exports.GATEWAY_TIMEOUT 			= 504] = "Gateway Timeout";
statusCodes[exports.HTTP_VERSION_NOT_SUPPORTED 	= 505] = "HTTP Version Not Supported";
statusCodes[exports.VARIANT_ALSO_NEGOTIATES 	= 506] = "Variant Also Negotiates";
statusCodes[exports.INSUFFICIENT_STORAGE		= 507] = "Insufficient Storage";
statusCodes[exports.LOOP_DETECTED 				= 508] = "Loop Detected";
statusCodes[exports.BANDWIDTH_LIMIT_EXCEEDED 	= 509] = "Bandwidth Limit Exceeded";
statusCodes[exports.NOT_EXTENDED 				= 510] = "Not Extended";
statusCodes[exports.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";
statusCodes[exports.NETWORK_READ_TIMEOUT 		= 598] = "Network Read Timeout Error";
statusCodes[exports.NETWORK_CONNECT_TIMEOUT 	= 599] = "Network Connect Timeout Error";

statusCodes[exports.INFORMATION 	= '1xx'] = "Information";
statusCodes[exports.SUCCESS 		= '2xx'] = "Success";
statusCodes[exports.REDIRECTION 	= '3xx'] = "Redirection";
statusCodes[exports.CLIENT_ERROR 	= '4xx'] = "Client Error";
statusCodes[exports.SERVER_ERROR 	= '5xx'] = "Server Error";

exports.constants = protocols.constants;

exports.setDefaultProtocol = function (protocol) {
	if (protocols.hasOwnProperty(protocol)) {
		defaultProtocol = protocol;
	} else {
		throw new Error("Protocol is not supported: " + protocol);
	}
}

/**
 *	@method getStatusDetails
 *	Return details of the status code.
 *	@param {Number} statusCode - the status to look up
 *	@param {String} [protocol = defaultProtocol] the protocol to look up the standard for.
 */
exports.getStatusDetails = function(statusCode, protocol) {
	protocol | (protocol = defaultProtocol);
	if (protocols[protocol].codes.hasOwnProperty(statusCode)) {
		result = {
			code: statusCode,
			text: exports.getStatusText(statusCode), // throws error if status code does not exist
			series: (Math.floor(statusCode / 100)) + 'xx',
			rfc: protocols[protocol].codes[statusCode]
		};
		result.series = result.series + ' ' + statusCodes[result.series];
		return result;
	} else {
		throw new Error("Status code " + statusCode + " does not exist in protocol " + protocol);
	}
}

/**
 *	@method getStatusText
 *	Return details of the status code. Throws if the status code is not part of the protocol.
 *	@param {Number} statusCode - the status to look up
 *	@param {String} [protocol = defaultProtocol] the protocol to look up the text for.
 */
exports.getStatusText = function(statusCode, protocol) {
	protocol | (protocol = defaultProtocol);
	if (protocols[protocol].codes.hasOwnProperty(statusCode)) {
		return statusCodes[statusCode];
	} else {
		throw new Error("Status code " + statusCode + " does not exist in protocol " + protocol);
	}
};
