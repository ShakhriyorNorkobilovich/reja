const http = require("http");
// const fs = require("fs");
// const app = require("./app");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://shaxroyorbek2101:Z@rifa3112@cluster0.rs251bp.mongodb.net/Reja";
mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        //console.log(client);
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3007;
        server.listen(PORT, function () {
        console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
});


