import db from '../database/db.js';

export const getData = (req, res)=>{
  res.send('Hello, this is the data you requested! using getData controller');
};

// Function to insert a new user into the database
// This function expects the request body to contain 'name', 'email', and 'password'
export const postUser = (req, res)=>{
  const{ name, email, password} = req.body;
  // Check if all required fields are provided
  if (!name || !email || !password) {
    return res.send({ message: "All fields are required" });
  }
  const q1 = `INSERT INTO  user (name, email, password) VALUES (?, ?, ?)`;
  db.query(q1, [name, email, password], (err, result) => {
    if (err) {
      return res.send({ message: "Error inserting data", err });
    }
    // After successful insert, send response
    return res.send({ message: "Data inserted successfully", result });
  });
};

// Function to get all users from the database
  export const getAllUsers = (req, res)=>{
    const q2 = `SELECT * FROM user`;
    db.query(q2, (err, result)=>{
      if(err) {
        return res.send({message: "Error in fetching and selecting data", err});
      }
      return res.send({message: "Data fetched successfully", result});
    });
  };
  
  export const updateUser = (req, res)=>{
    const { id } = req.params
    const { name, email , password} = req.body

    const q = `UPDATE user SET name = ? , email = ? , password = ? WHERE id = ?`;
    db.query(q, [name , email, password, id], (err, result)=>{
      if(err) {
        return res.send({ message: "Error in updating data", err });
      }
      return res.send({ message: "Data updated successfully", result });
    });
  }

  export const deleteUser = (req, res)=>{
    const { id } = req.params;

    const q = `DELETE FROM user WHERE id = ?`;
    db.query(q, [id], (err, result) => {
      if (err) {
        return res.send({ message: "Error in deleting data", err });
      }
      return res.send({ message: "Data deleted successfully", result });
    });
  }