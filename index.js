import express from "express";

const app = express()
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res)=>{
    return res.json({msg: 'Helloe from the server'});
})

app.listen(PORT, ()=>{
    console.log(`Server running at PORT 8000`);
})