require('dotenv').config();
const port=process.env.PORT || 10000;
const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
const connecttomongo= require("./models/db");
connecttomongo();

app.use(cors());

 app.get("/", (req, resp) => {
	resp.send("Hello world");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});
app.use(express.json());

app.use('/reg',require ("./routes/reg"));


//app.post("/", (req, resp) => {

	//resp.send("App is Working");
  //  const input = new InputModel(req.body);
    //input.save();
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
//});


//app.get('/getInputs',(req,res)=>{
//	InputModel.find()
//	.then(inputs=> res.json(inputs))
//	.catch(err => res.json(err))
//})

   app.listen(port, function() {
    console.log("Server started on port "+port);
  });
  
