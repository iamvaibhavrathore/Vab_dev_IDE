import express, { Request, Response } from 'express'; // ES2020 syntex
import cors from "cors";
import { config } from 'dotenv';
import { dbConnect } from './lib/dbConnect';
import { compilerRouter } from './routes/compilerRouter';

const app = express();


app.use(express.json());
app.use(cors());
config();

app.use("/compiler", compilerRouter);

dbConnect();
app.listen(4000,()=>{
    console.log("http://localhost:4000");
});