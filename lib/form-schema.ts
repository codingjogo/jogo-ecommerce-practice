import { z } from "zod";

export const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email(),
    role: z.enum(['BASIC', 'ADMIN']),
})

export const postsSchema = z.object({
    name: z.string().min(1, "name must contain 2 more characters"),
    age: z.number().min(1, "age must contain 2 more characters")
})