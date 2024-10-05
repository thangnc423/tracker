import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const createReviewSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    // validating user input body
    const validation = createReviewSchema.safeParse(body);
    if (!validation.success) {
        // client sent invalid data
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    try {
        const newReview = await prisma.review.create({
            data: { title: body.title, description: body.description },
        });
        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        console.error("Error creating review:", JSON.stringify(error, null, 2)); // Log full error
        return NextResponse.json({ error: "Database operation failed" }, { status: 500 });
    }
}