import z from "zod"

export const signUpSchema = z.object({
    username : z.string().min(3, "Username Should be minimum of 3 character long"),
    email : z.string().email(),
    password : z.string().min(6, "Passsword should be at leat of 6 character long")
})