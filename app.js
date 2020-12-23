const express = require('express');
const app = express();
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('template/layout', {
        titulo: 'Inicio',
        subtitulo: 'Página de inicio'
    });
});
app.get('/servicios', (req, res) => {
    res.render('template/layout', {
        titulo: 'Servicios',
        subtitulo: 'Estás en la página de servicios'
    });
});
app.use((req,res,next) => {
    res.status(404).render('template/layout', {
        titulo: '404',
        subtitulo: `El recurso solicitado '${req.url}' no fue encontrado`
    });
});

app.listen(port, () => {
  console.log(`Servidor a su servicio en http://localhost:${port}`);
});