import { Router } from "express";
import { typePost, typeGet } from "../handlers/type.handler";
import { typeMiddleware } from "../middlewares/type.middleware";

const typeRouter = Router();

typeRouter.post('/', typeMiddleware, typePost )
typeRouter.get('/', typeGet)

export default typeRouter