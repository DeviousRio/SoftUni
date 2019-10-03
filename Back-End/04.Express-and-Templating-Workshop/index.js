global.__basedir = __dirname;
const dbConnector = require('./config/db');
dbConnector().then(() => {
    const config = require('./config/config')
    const app = require('express')();

    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
}).catch(console.error);


// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const connectionStr = 'mongodb://localhost:27017';
// const client = new MongoClient(connectionStr);

// client.connect(function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const db = client.db('testdb');
//     const users = db.collection('users');
//     users.deleteMany({ name: 'Stamat' }).then(deletedEntity => {
//         console.log(deletedEntity);
//     });
//     users.insert({ name: 'Stamat' }).then(user => {
//         console.log(user);
//     });
// });