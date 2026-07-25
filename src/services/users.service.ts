import { CreateUserDto } from "../dtos/user.dtos.js";
import { getAll, getById, findByEmail, createUser } from "../repositories/user.repository.js";
import { notFound } from "../utils/api-error.js";


export async function findAllUsersService() {
  const users = await getAll();
  return users;
}

export async function findUserByIdService(id: number) {
  const user = await getById(id);
  if(!user) {
    throw notFound('User not found');
  }
  return user;
}

export async function createUserService(data: CreateUserDto) {
  const existingUser = await findByEmail(data.email);
  if(existingUser) {
    throw notFound('User already exists');
  }

  return createUser(data);
}

