import express from 'express';
import { getData, postUser , getAllUsers, updateUser, deleteUser} from '../controllers/user.js';

const route= express.Router();

route.get("/get-data", getData)
route.post("/post-user", postUser)
route.get("/get-all-users", getAllUsers)
route.post("/update-user/:id", updateUser)
route.post("/delete-user/:id", deleteUser)

export default route