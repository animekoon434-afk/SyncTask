import express from 'express';
const app = express();
import connectDB from './connectDb.js';
import dotenv from 'dotenv';
import todoRouter from './routes/todo-routes.js'

dotenv.config();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.use('/api', todoRouter);

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

console.log('Express server setup complete.');