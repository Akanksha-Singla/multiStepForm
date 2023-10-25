import {z} from 'zod'

export const personalInfoValidationSchema = z.object({
    id:z.number().optional(),
    name:z.string().min(3,{message:"Must contain atleast 3 characters"}),
    email:z.string().email({message:"An email is required"}),
    phoneNumber:z.string()
})

export type IPersonalInfo = z.infer<typeof personalInfoValidationSchema>;

export const selectValidationSchema = z.object({
    id:z.number().optional(),
   
    image:z.string().optional(),
    planName:z.string(),
    price: z.number()
})

export type ISelect = z.infer<typeof selectValidationSchema>

export const addOnValidationSchema = z.object({
    id: z.number().optional(),
    description: z.string(),
    planName: z.string(),
    price: z.number()
})

export type IAddOn = z.infer<typeof addOnValidationSchema>