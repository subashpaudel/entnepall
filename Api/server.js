const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');
    const infoRoute = require('./routes/info.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    

    const app = express();
    app.use(express.static(__dirname + "src")); 
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html")); 
});
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/appointment', infoRoute);
    const port = process.env.PORT || 8080;



    


    

    const server = app.listen(port,function(){
        console.log('Listening on port ' + port);
    });