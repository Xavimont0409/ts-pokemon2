import { Router } from "express";
import { typePost } from "../handlers/type.handler";
import { typeMiddleware } from "../middlewares/type.middleware";

const typeRouter = Router();

typeRouter.post('/', typeMiddleware, typePost )

export default typeRouter