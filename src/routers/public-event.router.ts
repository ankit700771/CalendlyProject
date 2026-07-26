import { Router } from "express";
import { getPublicEventType } from "../controllers/event-type.controllers.js";

export const publicEventRouter: Router = Router(); // middleware to handle public event routes

publicEventRouter.get('users/:userId/event-types/:slug', getPublicEventType);