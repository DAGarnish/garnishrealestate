import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';
import { cookies } from 'next/headers';

neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL || '';
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  // Check auth
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');
  if (!token || token.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const params = await props.params;
    const id = parseInt(params.id, 10);
    await prisma.contactEnquiry.delete({
      where: { id },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to delete contact', details: error.message }, { status: 500 });
  }
}
