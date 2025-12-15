import express from "express";
import { Request,Response } from "express";
const app = express();
const items: { id: number; name: string; price: number }[] = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Banana", price: 0.59 },
  { id: 3, name: "Orange", price: 0.79 },
  { id: 4, name: "Grapes", price: 2.99 },
  { id: 5, name: "Mango", price: 1.49 },
];

app.post("/paginated",(req:Request,res:Response)=>{
    const page:number = Number(req.query.page) || 1
    const limit:number = Number(req.query.limit) || 10

    const sIndex=(page-1)*limit
    const eIndex=page* limit 
    const newItems=items.slice(sIndex,eIndex);
    res.json({

    })
});

app.listen(8000, () => {
  console.log("server is working");
});
