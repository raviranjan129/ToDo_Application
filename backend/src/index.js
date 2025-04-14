import express from 'express';
import { StatusCodes } from "http-status-codes";
import connectDB from './config/dbConfig.js';
import cors from 'cors';
import apiRouter from './routes/apiRouter.js';

const PORT = 4000;
const app = express();

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded());

app.get("/ping", (req, res) => { 
    return res.status(StatusCodes.OK).json({ message: "pong" });
});

app.use('/api',apiRouter);

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});