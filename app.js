//============================================
// All Require Statements
//============================================
let express     = require("express");
let app         = express();
let bodyParser  = require("body-parser");
let mongoose    = require("mongoose")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));





//============================================
// Connecting with DB and Creating Schemas
//============================================

mongoose.connect("mongodb://localhost/dscclub");

let postSchema = new mongoose.Schema({
    title :String,
    image :String,
    description:String,
    dateCreated:{type:Date,default:Date.now}

});

var dscposts = mongoose.model("posts",postSchema);

dscposts.create({
    title : "Hello",
    image : "Image",
    description : "Description"
});



//============================================
// ROUTES 
//============================================

//INDEX ROUTE

app.get("/",function(req,res){
    res.render("homepage.ejs");
})

//POSTS PAGE  ROUTE

app.get("/posts",function(req,res){
    res.send("Posts Page !");
})

//REGISTER PAGE ROUTE

app.get("/register",function(req,res){
    res.render("register.ejs")
})





//=============================================
// SERVER Connection 
//=============================================
app.listen(3000,function(){
    console.log("Server Started at port 3000 !");
})

