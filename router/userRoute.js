import express from 'express';
import { getData, postUser , getAllUsers} from '../controllers/user.js';

const route= express.Router();

route.get("/get-data", getData)
route.post("/post-user", postUser)
route.get("/get-all-users", getAllUsers)

export default route