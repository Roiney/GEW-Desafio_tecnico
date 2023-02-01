import { Router } from "express";
import { CreateUserControllers } from "./controllers/CreateUserControllers";

const routes = Router();

routes.post("/cadastro", new CreateUserControllers().handle);
routes.post("/login", new CreateUserControllers().getRole)

export { routes }