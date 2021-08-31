const app = require('./config/server');

require('./app/routes/news')(app);

//Starting the Server

app.listen(app.get('PORT'), () => {

    console.log('server on port '+app.get('PORT'));
});

