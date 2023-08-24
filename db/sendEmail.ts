const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailProps {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async () => {
  const msg = {
    to: "sobeksea@gmail.com", // Change to your recipient
    from: "sobeksea@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
};
