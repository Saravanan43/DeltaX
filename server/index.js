import  express  from "express";
import cors from 'cors';
import helmet from "helmet";


const delta=express();

delta.use(express.json());
delta.use(express.urlencoded({extended:false}));
delta.use(cors);
delta.use(helmet);



delta.get('/',(req,res) => res.json({Message:"Success"}));

delta.listen(3000,() => console.log('Running'));