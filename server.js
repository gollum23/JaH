var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public')); 

app.get('/', function(req, res) {
    res.render('index')
})
app.listen(3000, function (err) {
    if (err) return console.log('Hubo un problemita, pide le ayuda a Dios :D'), process.exit(1);

    console.log('Gracias Señor, porque todo está bien');

})