import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  deleteEmployees,
  updateEmployees,
  getEmployee,
} from "../controllers/employees.controller.js";
const router = Router();
router.get("/employees", getEmployees);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmployees);

router.get("/employees/:id", getEmployee);
router.delete("/employees/:id", deleteEmployees);

export default router;
