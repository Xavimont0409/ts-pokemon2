import { Router } from "express";
import { userPost } from "../handlers/user.handler";
import { userMiddleware } from "../middlewares/user.middleware";

const userRouter = Router();

userRouter.post("/", userMiddleware, userPost);

export default userRouter;
