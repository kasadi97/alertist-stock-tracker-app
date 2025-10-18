import nodemailer from 'nodemailer'
import { NEWS_SUMMARY_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from './templates'

export const  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    }
})

export const sendWelcomeEmail = async ({email, name, intro}:WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
    .replace('{{name}}', name)
    .replace('{{intro}}', intro);

    const mailOptions = {
        from: '"Alarmist" <alarmist@kasadi.com>',
        to: email,
        subject: 'Welcome to Alarmist - your stock market toolkit is ready!',
        text: 'Thanks for joining Alarmist',
        html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions)
}

export const sendNewsSummaryEmail = async (
    {email, date, newsContent}:
    {email: string; date: string; newsContent: string}):Promise<void> => {
        const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
        .replace('{{date}}', date)
        .replace('{{newsContent}}', newsContent);

        const mailOptions = {
            from: '"Alarmist News" <alarmist@kasadi.com>',
            to: email,
            subject: `Daily News Summary for ${date}`,
            text: `Here is your news summary for ${date}`,
            html: htmlTemplate,
        };
        await transporter.sendMail(mailOptions)
}