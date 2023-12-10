import {z} from 'zod'
 
export const registerValidator= z.object({
    name: z.string({required_error : 'Name is Required'}).min(3).max(20),
    email : z.string({required_error: 'Email is Required'}).email({message : 'invalid Email'}),
    lastname : z.string({required_error : 'Lastname is Required'}).min(3).max(20),
    password : z.string({required_error : 'Password is Required'}).min(6,{message :'Password must be at least 6 characters'}).max(20),

})

export const loginValidator = z.object({
    email : z.string({required_error: 'Email is Required'}).email({message : 'invalid Email'}),
    password : z.string({required_error : 'Password is Required'}).max(20),
})