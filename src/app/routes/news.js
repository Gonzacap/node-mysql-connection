
const dbConnection = require('../../config/dbConnection');

module.exports = (app) => {

    const connection = dbConnection();

    app.get('/', (req, res) => {

        connection.query('SELECT * FROM news', (error, resultado) =>{

            if(error){
                console.log('Oops! Ha ocurrido un error al conectar con la bd');
            }
            else{
                res.render('news/news.ejs', { news: resultado });
            }
        });
        
    });

    app.post('/news', (req, res) =>{

        const {title, news} = req.body;

        connection.query('INSERT INTO news SET?', 
        {title: title, news: news }, 
        (error, resultado) =>{

            if(error){
                console.log('Oops! Ha ocurrido un error al conectar con la bd');
            }
            else{
                res.redirect('/');
            }

        });

    });

};