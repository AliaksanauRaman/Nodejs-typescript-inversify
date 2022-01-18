import { Router } from "express";

import { getUsersHandler } from "../handlers/get-users/handler";

const usersController = Router();

usersController.get('/', getUsersHandler);

export { usersController };
