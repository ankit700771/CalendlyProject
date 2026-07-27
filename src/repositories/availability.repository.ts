import { prisma } from "../config/database.js";
import {
  CreateAvailabilityExceptionDto,
  CreateAvailabilityRuleDto,
  UpdateAvailabilityExceptionDto,
  UpdateAvailabilityRuleDto,
} from "../dtos/availability.repository.js";

export async function findRulesByUser(userId: number) {
  return prisma.availabilityRule.findMany({
    where: { userId },
    orderBy: [{ weekday: "asc" }, { startTime: "asc" }],
  });
}

export async function findActiveRulesByUser(userId: number) {
  return prisma.availabilityRule.findMany({
    where: { userId, isActive: true },
    orderBy: [{ weekday: "asc" }, { startTime: "asc" }],
  });
}

export async function findRuleById(ruleId: number) {
  return prisma.availabilityRule.findUnique({
    where: { id: ruleId },
  });
}

export async function createRule(
  userId: number,
  data: CreateAvailabilityRuleDto
) {
  return prisma.availabilityRule.create({
    data: { userId, ...data },
  });
}

export async function updateRule(
  ruleId: number,
  data: UpdateAvailabilityRuleDto
) {
  return prisma.availabilityRule.update({
    where: { id: ruleId },
    data,
  });
}

export async function removeRule(id: number) {
  return prisma.availabilityRule.delete({
    where: { id: id },
  });
}

export async function findExceptionsByUser(userId: number) {
  return prisma.availabilityException.findMany({
    where: { userId },
    orderBy: { date: "asc" },
  });
}

export async function findExceptionById(exceptionId: number) {
  return prisma.availabilityException.findUnique({
    where: { id: exceptionId },
  });
}

export async function createException(
  userId: number,
  data: CreateAvailabilityExceptionDto
) {
  const { date, ...rest } = data;
  return prisma.availabilityException.create({
    data: { userId, ...rest, date: new Date(`${date}T00:00:00.000Z`) },
  });
}

export async function updateException(
  exceptionId: number,
  data: UpdateAvailabilityExceptionDto
) {
  const { date, ...rest } = data;
  return prisma.availabilityException.update({
    where: { id: exceptionId },
    data: { ...rest, date: date ? new Date(`${date}T00:00:00.000Z`) : undefined },
  });
}

export async function removeException(id: number) {
  return prisma.availabilityException.delete({
    where: { id: id },
  });
}

export async function findExceptionByUserInRange(
  userId: number,
  startDate: Date,
  endDate: Date
) {
  return prisma.availabilityException.findMany({
    where: {
      userId,
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    orderBy: { date: "asc" },
  });
}