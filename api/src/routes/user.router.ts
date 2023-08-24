import { Router } from "express";
import { userPost } from "../handlers/user.handler";

const userRouter = Router();

userRouter.post('/', userPost )

export default userRouter
