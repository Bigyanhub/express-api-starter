import db from '../database/db.js';

export const getData = (req, res)=>{
  res.send('Hello, this is the data you requested! using getData controller');
};

export const postUser = (req, res)=>{
  const{ name, email, password} = req.body;
  
    const q1 = `INSERT INTO  user (name, email, password) VALUES (?, ?, ?)`;
    db.query(q1, [name, email, password], (err, result) => {
      if (err) {
        return res.send({ message: "Error inserting data", err });
      }
      // After successful insert, send response
      return res.send({ message: "Data inserted successfully", result });
    });
  };

  export const getAllUsers = (req, res)=>{
    const q2 = `SELECT * FROM user`;
    db.query(q2, (err, result)=>{
      if(err) {
        return res.send({message: "Error in fetching and selecting data", err});
      }
      return res.send({message: "Data fetched successfully", result});
    });
  };;