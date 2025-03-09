import z from 'zod'

export const addChildSchema = z.object({
    name: z.string().nonempty(),
    dob: z.date(),
    profilePhoto: z.string().url().nullable(),
    show: z.boolean().default(true),
    story: z.string(),
    quote: z.string().nullable()
})
export const updateChildSchema = z.object({
    name: z.string().nullish(),
    dob: z.date().nullish(),
    profilePhoto: z.string().url().nullish(),
    show: z.boolean().nullish(),
    story: z.string().nullish(),
    quote: z.string().nullish()
})

export const contactSchema = z.object({
    reason: z.string(),
    fullNames: z.string().nullable(),
    phoneNumber: z.string().nullable(),
    email: z.string().nullable(),
    message: z.string(),
    childId: z.string().uuid().nullish(),
})