import dotenv from "dotenv";
dotenv.config();

import express from "express";


const app = express();


app.use(express.json());


//Default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend Project" });
});


//Default Error Handler
app.use((err, req, res, next) => {
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatus = err.status || 500;
  res.status(ErrStatus).json({ message: ErrMessage });
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on port:", port);
  
});