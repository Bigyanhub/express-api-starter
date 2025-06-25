import express from 'express';
import { addUser, deleteUser, updateUser, showAllUser } from '../controllers/user.js';
const route= express.Router();

// Define routes for user operations
route.post("/addUser", addUser)
route.post("/deleteUser/:id", deleteUser)
route.post("/updateUser/:id", updateUser)
route.get("/showAllUser", showAllUser)

export default route