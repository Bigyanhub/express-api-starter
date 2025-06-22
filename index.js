import express from 'express';
import userRoute from "./router/userRoute.js";
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())
app.use("/", userRoute); 


app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
});
