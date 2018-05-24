const express=require("express");

var app=express();

app.set("port",process.env.PORT || 3000);

//routes
app.get("/",(req,res)=>{
	res.type("text/plain");
	res.send("Meadowlark Travel");
});

app.get("/about",(req,res)=>{
	res.type("text/plain");
	res.send("About Meadowlark Travel");
});

app.use((req,res)=>{
	res.type("text/plain");
	res.status(404);
	res.send("404 - Not found");
});

app.use((err,req,res)=>{
	console.log(err.stack);
	res.type("text/plain");
	res.status(500);
	res.send("500 - Server error");
})

app.listen(
	app.get("port"),()=>{
		// console.log(process.env);
		console.log("Srver Started at ",app.get("port") );
	}
)