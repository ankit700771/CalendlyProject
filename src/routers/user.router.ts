

import { Router } from "express";
import { findAllUsers, findUserById } from "../controllers/user.controller.js";

export const userRouter: Router = Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
