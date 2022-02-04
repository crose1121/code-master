const express = require("express");
const cors = require("cors")


const app = express();
const port = 8000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())


const routeFile = "recipe.routes" //change the routeFile for each project

require("./config/config");
require(`./routes/${routeFile}`)(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))