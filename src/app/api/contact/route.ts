import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';
import { NextResponse } from 'next/server';

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

    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to store contact information', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
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
