const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const sslRedirect = require('heroku-ssl-redirect');


// enable ssl redirect
app.use(sslRedirect());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//connect to db
mongoose.connect('mongodb+srv://Simon25500:7wzpfrc25500@cluster0-7cujc.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //Cors
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

// import all routes
const userRoutes = require('./server/routes/user');
const updateRoutes = require('./server/routes/update');
const associationRoutes = require('./server/routes/association');
const eventRoutes = require('./server/routes/event');
const missionRoutes = require('./server/routes/mission');
const categoryRoutes = require('./server/routes/category');
const nearRoutes = require('./server/routes/near')

//routes api
app.use('/api/auth', userRoutes);
app.use('/api/update', updateRoutes);
app.use('/api/association',associationRoutes);
app.use('/api/event',eventRoutes);
app.use('/api/mission', missionRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/near', nearRoutes);


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'/client/build/index.html'));
});



module.exports = app;