const express = require("express");
const cors = require('cors');
const app = express();
const middleware = require('./middleware');
const port = 3000
const corsOption = {
    origin: '', // Allow only requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials like cookies or authorization headers
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOption));
app.use(express.json());

//app.use(middleware.authMiddleware());

const mainRouter = require('./routes/index');



app.use('/api/v1', mainRouter);


app.listen(port);