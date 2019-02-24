var http=require("http");
http.createServer(onRequest).listen(8000);
console.log("server is running........");
function onRequest(req,res)
{
      //return "i have done";
      //setTimeout(function(){return "its complited";},5000);
}
