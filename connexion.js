const { MongoClient } = require('mongodb')

//Server Running
const url = 'mongodb://127.0.0.1:27017/catalogo_autos'

// DataBase name
const dbName = 'catalogo_autos';

async function conexionMongoDb(obj_auto) {
    const client = new MongoClient(url);


    try {
        // Connect to the database
        await client.connect();
        console.log("Conectado a la base de datos ")

        const db = client.db(dbName)


        //Database Collection
        const colletion = db.collection('auto')

        //Inserting singles document
        await colletion.insertOne(obj_auto);
        console.log('Single document inserted successfully')

        /*  Insertar multiples documentos
            await colletion.insertMany(UbicacionVentas)
            console.log('Multiple document inserted successfully')
        */
    } catch (error) {
        console.log('Error connecting to the database', error);
    } finally{
        //Close the connection when done
        await client.close();
        console.log('Conection Cerrada')
    }
}

///Exportar

module.exports = {
    "ConexionMongoDb" : conexionMongoDb
}