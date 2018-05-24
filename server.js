const app=require("http");
app.createServer((req,res)=>{
	res.end("Hello World");
}).listen(3000,()=>{
	console.log("Started at 3000");
})