import express from 'express';
import { getData, postUser } from '../controllers/user.js';

const route= express.Router();

route.get("/get-data", getData)
route.post("/post-user", postUser)

export default route