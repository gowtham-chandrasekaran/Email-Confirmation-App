var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    auth: {
      user: "gowthambalboa330", // generated ethereal user
      pass: "Tester123", // generated ethereal password
    },
  });


 async function sendEmail(to){
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Gowtham ScriptChain" <gowthambalboa330@gmail.com>', // sender address
    to: to, // list of receivers
    subject: "ScriptChain internship assessment", // Subject line
    text: `Hello, ${to} !! I have completed the assessment successfully!`, // plain text body
    html: `<b>Hello, ${to} !! I have completed the assessment successfully!</b>`, // html body
  });
  console.log('mail sent');
}

module.exports = {sendEmail}