const mongoose = require("mongoose");
let connectionUrl = "mongodb+srv://abner:abner@cluster0.rhlo08z.mongodb.net/?retryWrites=true&w=majority";

async function main()
{
    await mongoose.connect(connectionUrl);
    console.log("Conectado, otário");
}

main().catch(err => console.log(err));

module.exports = mongoose;