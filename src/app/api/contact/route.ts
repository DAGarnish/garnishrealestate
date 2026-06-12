import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL || '';
const adapter = new PrismaNeon({ connectionString });

const prisma = new PrismaClient({ adapter });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, origin, location, budget, timeline, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const enquiry = await prisma.contactEnquiry.create({
      data: {
        name,
        email,
        phone,
        origin,
        location,
        budget,
        timeline,
        message,
      },
    });

    // Send email using Gmail
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
        subject: `New Consultation Request from ${name}`,
        html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f3f4f6; padding: 30px 20px;">
  <div style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    
    <div style="background-color: #000433; padding: 25px 20px; text-align: center; border-bottom: 4px solid #00847b;">
      <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">Garnish Real Estate</h1>
      <p style="color: #00deb6; margin: 8px 0 0 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">New Consultation Request</p>
    </div>
    
    <div style="padding: 35px 30px;">
      <p style="font-size: 16px; color: #000433; margin-top: 0; line-height: 1.5;">You have received a new consultation request from <strong>${name}</strong>.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
        <tr>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; width: 35%; color: #5e6573; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #000433; font-size: 15px; font-weight: 500;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #5e6573; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px;"><a href="mailto:${email}" style="color: #00847b; text-decoration: none; font-weight: 600;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #5e6573; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #000433; font-size: 15px;">${phone || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #5e6573; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Origin</td>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #000433; font-size: 15px;">${origin || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #5e6573; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Location</td>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #000433; font-size: 15px;">${location || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #5e6573; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Budget</td>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #000433; font-size: 15px; font-weight: 600;">${budget || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #5e6573; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Timeline</td>
          <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #00847b; font-size: 15px; font-weight: 600;">${timeline || '-'}</td>
        </tr>
      </table>
      
      <div style="margin-top: 35px; background-color: #f8f9fa; border-left: 4px solid #00847b; padding: 20px; border-radius: 0 6px 6px 0;">
        <h3 style="margin-top: 0; font-size: 12px; color: #00847b; text-transform: uppercase; letter-spacing: 1px;">Message / Requirements</h3>
        <p style="color: #000433; font-size: 15px; line-height: 1.6; margin-bottom: 0;">${message ? message.replace(/\n/g, '<br>') : '<span style="color: #9ca3af; font-style: italic;">No additional message provided.</span>'}</p>
      </div>
    </div>
    
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #f0f0f0;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was sent automatically from your Garnish Real Estate website.</p>
    </div>
  </div>
</div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We still return success since the DB record was created
    }

    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to store contact information', details: error.message },
      { status: 500 }
    );
  }
}

import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token');
    if (!token || token.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const enquiries = await prisma.contactEnquiry.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json({ success: true, data: enquiries }, { status: 200 });
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve contacts', details: error.message },
      { status: 500 }
    );
  }
}
