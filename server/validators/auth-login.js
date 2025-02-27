const { z } = require("zod");


///create object schema

const LoginSchema = z.object({
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email must be at most 255 characters long" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 characters long" })
    .max(1024, { message: "Password must be at most 1024 characters long" }),
});




module.exports = LoginSchema;