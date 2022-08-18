const express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'))

app.listen(3000, () => console.log('app runing'));
