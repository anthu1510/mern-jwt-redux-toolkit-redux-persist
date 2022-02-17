require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./src/main");

const server = http.createServer(app);

const port = process.env.PORT;
const connectionString = process.env.MONGODB_URL;

mongoose.connect(connectionString)
.then(result => {
        server.listen(port, () => {
            console.log(`server started at ${port}`);
        });
})
.catch(err => console.log(err));

