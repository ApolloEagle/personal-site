const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface Message {
  to: string | undefined;
  from: string | undefined;
  subject: string;
  html: string;
}

export const sendEmail = async (name: string) => {
  const firstName = /[\s_]/.test(name) ? name.split(" ")[0] : name;
  const msg: Message = {
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
        <style>
            .container {
                margin: 0 auto;
                font-family: Arial, sans-serif;
                width: 100%;
                background-color: #3f3f46;
                padding: 50px;
            }
    
            #banner {
                margin: 0 auto;
                background-color: black;
                width: 50%;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                padding: 20px;
            }
    
            #logo {
                height: 50px;
                width: 50px
            }
    
            #content {
                margin: 0 auto;
                background-color: #18181b;
                width: 50%;
                border-bottom-right-radius: 20px;
                border-bottom-left-radius: 20px;
            }
    
            #header {
                color: #e4e4e7;
                text-align: center;
            }
    
            #divider {
                border-bottom: 1px #3f3f46 solid;
                width: 100%;
                text-align: center;
            }
    
            #message {
                color: #e4e4e7;
                padding: 20px;
            }
    
            #link {
                text-align: center;
                font-size: 50px;
                margin: 0;
            }
    
            #icon {
                color: #a1a1aa;
                text-decoration: none;
            }
    
            @media screen and (max-width: 768px) {
                .container {
                    padding: 0px;
                    background-color: transparent;
                }
    
                #banner {
                    width: 100%;
                }
    
                #content {
                    width: 100%;
                }
            }
        </style>
    </head>
    <table class="container">
        <tr>
            <td class="center" align="center" valign="top">
                <table id="banner">
                    <tr>
                        <td class="center">
                            <center>
                                <a href="https://blakereimer.com">
                                    <img id="logo" class="center"
                                        src="https://raw.githubusercontent.com/ApolloEagle/personal-site/main/public/favicon.png" />
                                </a>
                            </center>
                        </td>
                    </tr>
                </table>
                <table id="content">
                    <tr>
                        <td class="center">
                            <h2 id="header">Thanks for Subscribing! 🤘</h2>
                            <div id="divider"></div>
                            <div id="message">
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
                                <p id="link">
                                    <a id="icon" href="https://blakereimer.com/music">𝄞</a>
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
