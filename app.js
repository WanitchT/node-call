const express = require('express');

const {logIntercepter} = require('./middleware/logMiddleware');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const apiRoute = require('./routes/apiRoute');

const app = express();

app.use(express.static('./public/'))
app.use(express.json());
app.use(logIntercepter);

app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/api', apiRoute);

app.listen(3000);
