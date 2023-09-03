const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailProps {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async (name: string) => {
  const firstName = /[\s_]/.test(name) ? name.split(" ")[0] : name;
  const msg = {
    to: process.env.SENDGRID_EMAIL,
    from: process.env.SENDGRID_EMAIL,
    subject: "Thanks for subscribing!",
    html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You for Subscribing!</title>
      </head>
      <style>
        @media only screen and (max-width:480px){
            .body{
                padding: 0px
            }
        }
      </style>
      <table
        class="body"
        style="
          margin: 0 auto;
          font-family: Arial, sans-serif;
          border-radius: 20px;
          width: 100%;
        "
      >
        <tr>
          <td class="center" align="center" valign="top">
            <table
              class="container"
              style="
                margin: 0 auto;
                background-color: black;
                width: 100%;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                padding: 20px;
              "
            >
              <tr>
                <td class="center">
                  <center>
                    <a href="https://blakereimer.com">
                      <img
                      class="center"
                      src="https://raw.githubusercontent.com/ApolloEagle/personal-site/main/public/favicon.png"
                      style="height: 50px; width: 50px"
                    />
                    </a>
                  </center>
                </td>
              </tr>
            </table>
            <table
              class="container"
              style="
                margin: 0 auto;
                background-color: #18181b;
                width: 100%;
                border-bottom-right-radius: 20px;
                border-bottom-left-radius: 20px;
              "
            >
              <tr>
                <td class="center">
                  <h2 style="
                    color: #e4e4e7;
                    text-align: center;
                  ">Thanks for Subscribing! 🤘</h2>
                  <div style="
                    border-bottom: 1px #3f3f46 solid;
                    width: 100%;
                    text-align: center;
                  "></div>
                  <div style="
                    color: #e4e4e7;
                    padding: 20px;
                  ">
                    <p>Hey ${firstName}!</p>
                    <br />
                    <p>Thanks for signing up for Blake's email list!</p>
                    <p>
                      You'll be the first to hear about upcoming tour dates, music news
                      and more.
                    </p>
                    <br />
                    <p>Best,</p>
                    <p>Blakers</p>
                    <p style="
                      text-align: center;
                      font-size: 50px;
                      margin: 0;
                    ">
                      <a style="
                        color: #a1a1aa;
                        text-decoration: none;
                      " href="https://blakereimer.com/music">𝄞</a>
                    </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </html>    
    `,
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
