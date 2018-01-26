var http = require('http');
var requests = 0;
var podname = process.env.HOSTNAME;
var startTime;
var host;
var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Hello Kubernetes bootcamp! | Running on: ");
  response.write(host);
  response.end(" | v=1\n");
  console.log("Running On:" , host, "| Total Requests:", ++requests,"| App Uptime:", (new Date() - startTime)/1000 , "seconds", "| Log Time:", new Date());
}
var www = http.createServer(handleRequest);
www.listen(8081, function () {
    startTime = new Date();
    host = process.env.HOSTNAME;
    console.log("Kubernetes Bootcamp App Started At:", startTime, "| Running On: " , host, "\n");
});
