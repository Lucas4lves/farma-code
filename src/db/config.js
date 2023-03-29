const mongoose = require("mongoose");
let connectionUrl = "mongodb://mongo:Qds2cxy0mE8vOq5IrLzr@containers-us-west-182.railway.app:5705";

async function main()
{
    await mongoose.connect(connectionUrl);
    console.log("Conectado, otário");
}

main().catch(err => console.log(err));

module.exports = mongoose;
