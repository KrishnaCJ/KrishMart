const nodemailer = require("nodemailer");
const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
};

const sendOTPEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      Service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "password Reset OTP",
      text: `your otp for password reset is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

module.exports = { generateOTP, sendOTPEmail };
