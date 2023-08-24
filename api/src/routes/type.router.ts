import { Router } from "express";
import { typePost } from "../handlers/type.handler";

const typeRouter = Router();

typeRouter.post('/', typePost )

export default typeRouter