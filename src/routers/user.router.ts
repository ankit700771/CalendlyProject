

import { Router } from "express";
import { findAllUsers, findUserById, createUser } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../dtos/user.dtos.js";
export const userRouter: Router = Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
userRouter.post('/', validate(createUserSchema), createUser);
