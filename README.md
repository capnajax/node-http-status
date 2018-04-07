# http-status-codes

Constants enumerating the HTTP status codes. Based on status codes defined in multiple RFCs plus common non-standard codes.

Completely library agnostic. No production dependencies.

## Installation

```console
npm install http-status-codes --save
```

## Usage (express 4.x)

```javascript
var HttpStatus = require('http-status-codes');

response
	.status(HttpStatus.OK)
	.send('ok');

response
	.status(HttpStatus.INTERNAL_SERVER_ERROR)
	.send({
		error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
	});
```

## Codes

Constant                            | Code  | Status Text
------------------------------------|-------|-----------------------------------
ACCEPTED                            | 202   | Accepted
ALREADY_REPORTED                    | 208   | Already Reported
BAD_GATEWAY                         | 502   | Bad Gateway
BAD_REQUEST                         | 400   | Bad Request
BANDWIDTH_LIMIT_EXCEEDED            | 509   | Bandwidth Limit Exceeded
BLOCKED_BY_PARENTAL_CONTROLS        | 450   | Blocked by Windows Parental Controls
CLIENT_CLOSED_REQUEST               | 499   | Client Closed Request
CONFLICT                            | 409   | Conflict
CONTINUE                            | 100   | Continue
CREATED                             | 201   | Created
EARLY_HINTS                         | 103   | Early Hints
ENHANCE_YOUR_CALM                   | 420   | Enhance your calm
EXPECTATION_FAILED                  | 417   | Expectation Failed
FAILED_DEPENDENCY                   | 424   | Failed Dependency
FORBIDDEN                           | 403   | Forbidden
GATEWAY_TIMEOUT                     | 504   | Gateway Timeout
GONE                                | 410   | Gone
HTTP_VERSION_NOT_SUPPORTED          | 505   | HTTP Version Not Supported
IM_USED                             | 226   | IM Used
IM_A_TEAPOT                         | 418   | I'm a teapot
INSUFFICIENT_SPACE_ON_RESOURCE      | 419   | Insufficient Space on Resource
INSUFFICIENT_STORAGE                | 507   | Insufficient Storage
INTERNAL_SERVER_ERROR               | 500   | Server Error
LENGTH_REQUIRED                     | 411   | Length Required
LOCKED                              | 423   | Locked
LOOP_DETECTED                       | 508   | Loop Detected
METHOD_NOT_ALLOWED                  | 405   | Method Not Allowed
MISDIRECTED_REQUEST                 | 421   | Misdirected Request
MOVED_PERMANENTLY                   | 301   | Moved Permanently
MOVED_TEMPORARILY                   | 302   | Moved Temporarily
MULTI_STATUS                        | 207   | Multi-Status
MULTIPLE_CHOICES                    | 300   | Multiple Choices
NETWORK_AUTHENTICATION_REQUIRED     | 511   | Network Authentication Required
NETWORK_READ_TIMEOUT                | 598   | Network Read Timeout Error
NETWORK_CONNECT_TIMEOUT             | 599   | Network Connect Timeout Error
NO_CONTENT                          | 204   | No Content
NO_RESPONSE                         | 444   | No Response
NON_AUTHORITATIVE_INFORMATION       | 203   | Non Authoritative Information
NOT_ACCEPTABLE                      | 406   | Not Acceptable
NOT_EXTENDED                        | 510   | Not Extended
NOT_FOUND                           | 404   | Not Found
NOT_IMPLEMENTED                     | 501   | Not Implemented
NOT_MODIFIED                        | 304   | Not Modified
OK                                  | 200   | OK
PARTIAL_CONTENT                     | 206   | Partial Content
PAYMENT_REQUIRED                    | 402   | Payment Required
PERMANENT_REDIRECT                  | 308   | Permanent Redirect
PRECONDITION_FAILED                 | 412   | Precondition Failed
PRECONDITION_REQUIRED               | 428   | Precondition Required
PROCESSING                          | 102   | Processing
PROXY_AUTHENTICATION_REQUIRED       | 407   | Proxy Authentication Required
REQUEST_HEADER_FIELDS_TOO_LARGE     | 431   | Request Header Fields Too Large
REQUEST_TIMEOUT                     | 408   | Request Timeout
REQUEST_TOO_LONG                    | 413   | Request Entity Too Large
REQUEST_URI_TOO_LONG                | 414   | Request-URI Too Long
REQUESTED_RANGE_NOT_SATISFIABLE     | 416   | Requested Range Not Satisfiable
RETRY_WITH                          | 449   | Retry With
RESET_CONTENT                       | 205   | Reset Content
SEE_OTHER                           | 303   | See Other
SERVICE_UNAVAILABLE                 | 503   | Service Unavailable
SWITCHING_PROTOCOLS                 | 101   | Switching Protocols
TEMPORARY_REDIRECT                  | 307   | Temporary Redirect
TOO_MANY_REQUESTS                   | 429   | Too Many Requests
UNAUTHORIZED                        | 401   | Unauthorized
UNAVAILABLE_FOR_LEGAL_REASONS       | 451   | Unavailable For Legal Reasons
UNPROCESSABLE_ENTITY                | 422   | Unprocessable Entity
UNSUPPORTED_MEDIA_TYPE              | 415   | Unsupported Media Type
USE_PROXY                           | 305   | Use Proxy
UPGRADE_REQUIRED                    | 426   | Upgrade Required
VARIANT_ALSO_NEGOTIATES             | 506   | Variant Also Negotiates

### Usage

Option 1: Full import of package

```typescript
import * as HttpStatus from 'http-status-codes'

response
	.status(HttpStatus.OK)
	.send('ok')

response
	.status(HttpStatus.INTERNAL_SERVER_ERROR)
	.send({
		error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
	})
```

Option 2: Selective import

```typescript
import { OK, getStatusText } from 'http-status-codes'

response
	.status(OK)
	.send(getStatusText(OK))
```
