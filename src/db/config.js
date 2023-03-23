const mongoose = require("mongoose");
let connectionUrl = "mongodb://mongo:wObhqADcbV2rSOOsU4Sq@containers-us-west-47.railway.app:6993";

async function main()
{
    await mongoose.connect(connectionUrl);
    console.log("Conectado, otário");
}

main().catch(err => console.log(err));

module.exports = mongoose;
