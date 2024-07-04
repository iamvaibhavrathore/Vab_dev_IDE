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

const PORT = process.env.PORT || 4000

dbConnect();
app.listen(PORT,()=>{
    console.log(`App running on PORT: ${PORT}`);
});