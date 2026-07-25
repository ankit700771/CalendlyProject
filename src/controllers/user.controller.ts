import { Request, Response } from "express";
import { findAllUsersService, findUserByIdService, createUserService } from "../services/users.service.js";
import { sendSuccess } from "../utils/api-response.js";
import { notFound } from "../utils/api-error.js";

export async function findAllUsers(_req: Request, res: Response) {
    const users = await findAllUsersService();
    sendSuccess(res, users);
}

export async function findUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id as any);
    const user = await findUserByIdService(id);
    if (user) {
        sendSuccess(res, user);
    } else {
        notFound('User not found')
    }
}

export async function createUser(req: Request, res: Response) {
    const newUser = await createUserService(req.body);
    sendSuccess(res, newUser, 201, 'User created successfully');
}

