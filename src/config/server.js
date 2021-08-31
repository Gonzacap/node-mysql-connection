const express =require('express');
const path =require('path');
const bodyParser =require('body-parser');

const app = express();


//Settings

app.set('PORT', process.env.PORT || 3000);
app.set('vew engine', 'ejs');
app.set('views',path.join(__dirname, '../app/views'));

//Middlewares

app.use(bodyParser.urlencoded({extended: false}));

//

module.exports = app;