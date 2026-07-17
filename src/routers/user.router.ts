

import { Router } from "express";
import { findAllUsers, findUserById, createUser } from "../controllers/user.controller.js";

export const userRouter: Router = Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
userRouter.post('/', createUser);
