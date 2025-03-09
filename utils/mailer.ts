import { createTransport } from 'nodemailer';
import env from './env';

const mailer = createTransport({
    host: env.SMTP_SERVER,
    secure: true,
    port: 465,
    debug: true,
    auth: {
        user: env.SMTP_USERNAME,
        pass: env.SMTP_PASSWORD,
    },
});

mailer.verify((error: any, success: any) => {
    if (error) {
        console.error("SMTP Connection failed", 'NodeMailerConn')
    } else if (success) {
        console.log('Smtp service connected', 'NodeMailerConn');
    }
});

export default mailer;