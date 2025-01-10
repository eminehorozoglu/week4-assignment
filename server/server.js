import express from "express";
import cors from "cors";
import joi from "joi";


const app=express();
app.use (cors());
app.use(express.json());


app.post("/messages", function (req, res) {
    console.log("This is the req.body", req.body);
    res.json({ status: "Message Received" });
  
  });

app.listen(8080, () => {
console.log(`server running on port 8080`);
})
app.get("/", (req,res)=>{
    res.json({message:"this is the root route."});
});

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = process.env.DATABASE_URL;

export const db = new pg.Pool({
    connectionString: dbConnection,
});

app.get("/guestbook", async (req,res) => {
    const query = await db.query (`select * from guestbook`);
    await res.json(query.rows);
});

app.post("/new-data", async (req, res) => {
   const data = req.body.formValues;
   const query = await db.query(
      `INSERT INTO guestbook (guest_name,guest_address,guest_number,guest_comment) VALUES ($1, $2, $3, $4)`,
     [data.guestname, data.guestaddress, data.guestnumber,data.guestcomment]
   );
await  res.json(query.rows);

  });

