import express from 'express';
import routerApi from './routes/routes.js';

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/whatsapp', routerApi);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});