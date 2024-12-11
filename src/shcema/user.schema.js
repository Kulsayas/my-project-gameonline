import { z } from "zod";

export const createUserSchema = z.object({
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
  displayName: z.string.min(1, "Display Name is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
