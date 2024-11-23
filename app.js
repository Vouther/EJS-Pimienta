const express = require('express');
const app = express();

const path = require('path');

const mainRoute = require('./routers/main');

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',mainRoute);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});*/