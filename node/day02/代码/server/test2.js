for (const key in global) {
  console.log(key);
}
/* 

DTRACE_NET_SERVER_CONNECTION
DTRACE_NET_STREAM_END
DTRACE_HTTP_SERVER_REQUEST
DTRACE_HTTP_SERVER_RESPONSE
DTRACE_HTTP_CLIENT_REQUEST
DTRACE_HTTP_CLIENT_RESPONSE
global
process
Buffer
clearImmediate
clearInterval
clearTimeout
setImmediate
setInterval
setTimeout

*/
console.log('------------------');
for (const key in console) {
  console.log(key);
}
/* 
log
debug
info
dirxml
warn
error
dir
time
timeEnd
timeLog
trace
assert
clear
count
countReset
group
groupCollapsed
groupEnd
table
Console
profile
profileEnd
timeStamp
context
*/
const http=require('http');
console.log('------------');
for (const key in http) {
  console.log(key);
}
/* 
_connectionListener
METHODS
STATUS_CODES
Agent
ClientRequest
IncomingMessage
OutgoingMessage
Server
ServerResponse
createServer
get
request
maxHeaderSize
globalAgent
*/
