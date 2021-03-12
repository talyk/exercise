const express = require("express");
const api = require('./src/api/api');
const app = express();
const cors = require('cors');

// set port, listen for requests
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use('/api', api);

//error handler
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    res.status(err.status).json({
        code: err.status,
        message: err.message,
        success: err.success || false
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
