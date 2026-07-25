

import { Router } from "express";
import { findAllUsers, findUserById, createUser, updateUser, removeUser } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.dtos.js";
export const userRouter: Router = Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
userRouter.post('/', validate(createUserSchema), createUser);
userRouter.patch('/:id', validate(updateUserSchema), updateUser);
userRouter.delete('/:id', removeUser);
