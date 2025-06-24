import express from 'express';
import userRoute from "./router/userRoute.js";
import cors from 'cors';

//here app stores instance of express application
//or we can also say app holds necessary "method" and properties
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())
app.use("/", userRoute); 


app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
});

// or we can also use this instead
// app.listen(port);
