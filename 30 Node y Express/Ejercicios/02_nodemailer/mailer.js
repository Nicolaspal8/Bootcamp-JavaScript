// Paso 1
const enviar = async (to, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nodemailerADL@gmail.com",
      pass: "vamoscontodo",
    },
  });
  let mailOptions = {
    from: "nodemailerADL@gmail.com",
    to,
    subject,
    text,
  };
  await transporter.sendMail(mailOptions);
};
// Paso 2
module.exports = enviar;
