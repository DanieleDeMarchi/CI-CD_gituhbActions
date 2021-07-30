const createError = require('http-errors');
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

// Instantiate express
const app = express();
// Set our port
const port = process.env.PORT || 8000;

// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register our routes in app
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // send error 
    res.status(err.status || 500);
    res.send(err.message);
});

// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


// Export our app for testing purposes
module.exports = app;