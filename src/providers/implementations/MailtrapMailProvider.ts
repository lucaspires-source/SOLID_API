import { IMailProvider, Imessage } from "../ImailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
export class MailtraoMailProvider implements IMailProvider {
private transporter : Mail;
    constructor() { 
        this.transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port:2525,
        auth : {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    })
    }


async sendMail(message: Imessage): Promise<void> {
 await this.transporter.sendMail({
     to:{
         name:message.to.name,
        address:message.to.email
     },
     from:{ 
         name: message.from.name,
         address: message.from.email,
     },

     subject: message.subject,
     html: message.body
 })
}

}