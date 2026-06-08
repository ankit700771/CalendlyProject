import { Request, Response } from "express";
import { findAllUsersService, findUserByIdService } from "../services/users.service.js";

export async function findAllUsers(_req: Request, res: Response) {
    const users = await findAllUsersService();
    res.json(users);
}

export async function findUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id as any);
    const user = await findUserByIdService(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}
