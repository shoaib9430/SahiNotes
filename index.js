const express = require('express');
const app = express(); // server instance
const PORT = process.env.PORT || 5000;
const expressEjsLayouts = require('express-ejs-layouts');
require('./config/mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(expressEjsLayouts);

app.set('view engine', 'ejs');
app.set('views', "./views");

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets/'));

app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    
    try {
        console.log(`listening on port ${PORT}`);
    }catch(err) {
        console.log(`Servier give you error on port ${PORT}`);
    }
})