const { z } = require("zod");


///create object schema

const singupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(45, { message: "Username must be at most 45 characters long" }),

  fullname: z
    .string({ required_error: "Fullname is required" })
    .trim()
    .min(4, { message: "Fullname must be at least 4 characters long" })
    .max(45, { message: "Fullname  must be at most 45 characters long" }),
  
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




module.exports = singupSchema;