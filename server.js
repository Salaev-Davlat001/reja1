const http = require("http");
const mongodb = require ("mongodb");

let db;
const connectionString = "mongodb+srv://salaevdavlat0:lr9sho2825LNpVBc@dylan.gqrh9.mongodb.net/";
mongodb.connect(
    connectionString, {
    useNewUrlParser:true,
    useUnifiedTopology:true,

 }, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("Mongo DB connection is succeed")
        module.exports = client;
        const server = http.createServer(app);
let PORT = 3011;
server.listen(PORT, function (){
    console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`)
    
});
    }
 } );  

 const app = require("./app");

