import { NextRequest, NextResponse } from 'next/server';
import { FashionTechAI } from '@/lib/agents/fashion-tech-core';

export async function POST(req: NextRequest) {
  try {
    const { requirements } = await req.json();
    
    if (!requirements) {
      return NextResponse.json({ error: 'Requirements are required' }, { status: 400 });
    }

    const fashionTechAI = new FashionTechAI();
    const project = await fashionTechAI.generateProject(requirements);
    
    return NextResponse.json({ 
      success: true, 
      project 
    });
    
  } catch (error) {
    console.error('Generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      error: 'Failed to generate project',
      details: errorMessage
    }, { status: 500 });
  }
}
