import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { generateEmailTemplate } from "./emailTemplate";
import { companyInfo } from "@/lib/info";

const SMTP_HOST = process.env.SMTP_HOST!;
const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const REDIRECT_URI = process.env.REDIRECT_URI!;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;
const GMAILID = process.env.GMAILID!;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, vehicleType, message } = body;

  if (!name || !email || !phone || !vehicleType) {
    return NextResponse.json({ error: "All required fields must be provided." }, { status: 400 });
  }

  if (!SMTP_HOST || !CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN || !GMAILID) {
    console.error("Missing required environment variables");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    let accessToken;
    try {
      accessToken = await oAuth2Client.getAccessToken();
    } catch (error) {
      console.error("Error retrieving access token:", error);
      return NextResponse.json({ error: "Failed to authenticate email service" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: GMAILID,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token!,
      },
    } as SMTPTransport.Options);

    const emailTemplate = generateEmailTemplate({ name, email, phone, vehicleType, message });

    const mailOptions = {
      from: `"${companyInfo.name}" <${GMAILID}>`,
      to: email,
      cc: GMAILID,
      subject: "We’ve Received Your Submission",
      html: emailTemplate,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}