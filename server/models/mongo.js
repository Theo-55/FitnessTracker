/*  B"H
*/

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://web:<password>@cluster0.memar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const isConnected = client.connect();


module.exports = {
    client, isConnected
}