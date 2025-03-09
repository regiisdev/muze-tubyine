import z from 'zod';

const envSchema = z.object({
    SMTP_SERVER: z.string(),
    SMTP_USERNAME: z.string(),
    SMTP_PASSWORD: z.string(),
    DATABASE_URL: z.string(),
    PERMITTED_EMAILS: z.string(),

    // Google Credentials
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
});

const env = envSchema.parse({ ...process.env });
export default env;