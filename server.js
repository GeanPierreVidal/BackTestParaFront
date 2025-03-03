var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var cors=require("cors");


var port=process.env.PORT || 10010;

app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('public'));
app.use(cors());

app.get("/",function(req,res){
    res.send("Servicios para archivo plano");
});

require("./routers/routerIndex")(app);

app.listen(port, function () {
    console.log("MICROSERVICIO para archivo plano READY PORT:" + port);
});

//run script assign port command