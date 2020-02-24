var express = require('express');
    app = express();
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
    res.send("HI THERE FROM THE ROOT ROUTE ");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/todos', todoRoutes);

app.listen(3000 , function() {
    console.log('App is running ' + 3000);
})    