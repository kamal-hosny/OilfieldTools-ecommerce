import { string, z } from "zod";

const registerSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, {
      message: "Email address is required",
    })
    .email(),
  companyName: string().min(1, { message: "Company name is required" }),
  phoneNumber: z.string(),
  password:  z
  .string()
  .min(8, { message: "Password must be at least 8 characters longs" })
  .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
    message: "Password should contain at least 1 special character",
  })
  ,
  comfirmPassword: z
    .string()
    .min(1, { message: "Confirm Password is required" })
}).refine((input) => input.password === input.comfirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
})

type registerType = z.infer<typeof registerSchema>;

export { registerSchema, type registerType }