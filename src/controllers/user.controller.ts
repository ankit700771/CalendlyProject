import { Request, Response } from "express";
import { findAllUsersService } from "../services/users.service.js";

export async function findAllUsers(_req: Request, res: Response) {
    const users = await findAllUsersService();
    res.json(users);
}
