import express from 'express';
import connectDB from './connectDb.js';
import dotenv from 'dotenv';
import todoRouter from './routes/todo-routes.js'
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

const PORT = process.env.PORT;

app.use('/api', todoRouter);

connectDB();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get(/.*/, (_,res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist","index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

