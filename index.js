import express from 'express';
import 'dotenv/config';
import {router} from './app/router.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.use (router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(` 🚀 Server is running on port ${port}`);
});