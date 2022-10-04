const nodeMailer = require('nodemailer');
const { options } = require('../routes/post');

exports.sendEmail = async(options)=>{

    var transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "baab39819644a4",
          pass: "da84c5f6726522"
        }
      });
    const mailOptions = {
        from:"process.env.SMPT_MAIL",
        to: options.email,
        subject:options.subject,
        text: options.message,
    };
    await transporter.sendMail(mailOptions);
};