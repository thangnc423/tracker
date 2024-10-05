import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const createReviewSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
});

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation =  createReviewSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400});
    }
    const newReview = await prisma.review.create({
        data: { title: body.title, description: body.description }
    });
    return NextResponse.json(newReview, { status: 201 });

}