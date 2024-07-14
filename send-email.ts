const sgMail = require("@sendgrid/mail");

export const sendEmail = async (email: string, message: string) => {
  await sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.SENDGRID_EMAIL,
    from: process.env.SENDGRID_EMAIL,
    subject: "New Personal Site Inquiry",
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
                background-color: #fafafa;
                padding: 50px;
            }

            .info {
            color: #374151;
            }

            #banner {
                margin: 0 auto;
                background-color: white;
                width: 50%;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                padding: 16px;
            }

            #logo {
                height: 50px;
                width: 50px
            }

            #content {
                margin: 0 auto;
                background-color: white;
                width: 50%;
                border-radius: 20px;
            }

            #header {
                color: #374151;
                text-align: center;
            }

            #divider {
                border-bottom: 1px #E5E7EB solid;
                width: 100%;
                text-align: center;
            }

            #message {
                color: #e4e4e7;
                padding: 20px;
            }

            #link {
                text-align: center;
                font-size: 16px;
                margin: 0;
                border: 1px #3f3f46 solid;
                padding: 16px;
                border-radius: 10px;
                width: 50%;
            }

            #icon {
                color: #e4e4e7;
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
                <table id="content">
                    <tr>
                        <td class="center">
                            <h2 id="header">Personal Site Inquiry</h2>
                            <div id="divider"></div>
                            <div id="message">
                                <p class="info">Email: ${email}</p>
                                <p class="info">Message: ${message}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </html>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {}
};
