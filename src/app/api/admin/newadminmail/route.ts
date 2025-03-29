import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const details = await req.json();
  try {
    if (!details) {
      return new Response(
        JSON.stringify({
          status: "updatedValues is missing in the request body",
        }),
        {
          status: 400,
        }
      );
    }
    const { email, username, password } = details;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_SENDER,
        pass: process.env.NEXT_PUBLIC_EMAIL_SENDER_PWD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
      to: email,
      subject: `Admin Credentials for RENEWAA`,
      text: `
        username: ${username}
        password: ${password}
      `,
    };

    return new Promise<Response>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(
            new Response(
              JSON.stringify({
                status: "Error",
              }),
              {
                status: 500,
              }
            )
          );
        } else {
          console.log("Email sent: " + info.response);
          resolve(
            new Response(
              JSON.stringify({
                status: "Success",
              }),
              {
                status: 200,
              }
            )
          );
        }
      });
    });
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ status: "An error occurred while sending email" }),
      {
        status: 500,
      }
    );
  }
}
