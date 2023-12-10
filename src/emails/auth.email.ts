

import { Request } from "express";
import { Resend } from "resend";

const resend = new Resend("re_LizipwxQ_713DnyUfqvPwxGset5rtraE7");

export const resendEmail = async(req : Request)=>{

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: req.body.email,
      subject: `Welcome To Thee Columns ${req.body.name}`,
      html: "<strong>it works!</strong>",
    });
    console.log({Transapcion : data})
    return data
  } catch (error) {
    console.error('error al enviar el correo', error)
  }
};


// import nodemailer, { createTransport } from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "01e84996181015",
//     pass: "3feb240dc04c89",
//   },
// });

// export const sendmail = async (req: Request, ) => {

//   try {
//     const info = await transporter.sendMail({
//       from: "ThreeColumns@gmail.com",
//       to: req.body.email,
//       subject: `Welcome to Columns ${req.body.name}`,
//       html: "<h1>Hola desde Node.js</h1>",
//     });
//     console.log(info.messageId);
//     return info;
//   } catch (error) {
//     console.error("error al enviar correo", error);
//   }
// };
