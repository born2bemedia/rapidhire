import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { name, email, phone, serviceType, description, goals, method, time, additional, } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"Rapid HR Connect" <noreply@rapidhrconnect.com >', // Sender address
      to: "noreply@rapidhrconnect.com ", // Change to your recipient's email
      subject: "Consultation Request Confirmation",
      text: `Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Service Type: ${serviceType}\n
      Detailed Description of Needs: ${description}\n
      Goals and Objectives: ${goals}\n
      Preferred Contact Method: ${method}\n
      Preferred Contact Time: ${time}\n
      Additional Information: ${additional}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Rapid HR Connect" <noreply@rapidhrconnect.com >', // Sender address
      to: email, // Client's email
      subject: "Consultation Request Confirmation",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
  <thead>
    <tr>
      <td>
        <img style="width: 100%" src="https://nextwavead.com/images/email_header.png" />
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 40px">
        <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${name},</h2>
        <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for requesting a consultation with Next Wave Ad!
</p>
        <p style="text-align: left; font-size: 16px;color:#202020;">We have successfully received your request and will review your details. A team member will  contact you shortly to schedule your consultation and discuss your marketing needs.
</p>
        <p style="text-align: left; font-size: 16px;color:#202020;">If you have any immediate questions or need further assistance, please do not hesitate to reply to this email or contact us at info@nextwavead.com..</p>
        <p style="text-align: left; font-size: 16px;color:#202020;">We look forward to connecting with you!</p>
        <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best regards,<br>Rapid HR Connect Team </h2>
      </td>
    </tr>
  </tbody>
  <tfoot >
				<td style="padding: 24px 40px;background: #222222;background-size:cover;font-size: 20px;text-decoration: none;color: #ffffff;text-align: center;">
					Thanks for using <a href="https://nextwavead.com/" style="color: #fff;font-size: 20px;text-decoration: none;color: #EB6418;">Next Wave Ad</a>
				</td>
			  </tfoot>
</table>
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    //await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}
