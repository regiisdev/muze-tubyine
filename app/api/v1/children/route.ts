import { prismaClient } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import { addChildSchema, updateChildSchema } from "../contact-us/validator";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const body = await request.json();
        const data = addChildSchema.parse(body)

        const message = await prismaClient.child.create({
            data: {
                name: data.name,
                dob: data.dob,
                profilePhoto: data.profilePhoto,
                show: data.show,
                story: data.story,
                quote: data.quote
            }
        })
        return NextResponse.json({ success: true })
    } catch (error) {

        return NextResponse.json({ success: false })

    }
}


export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        const childId = req.nextUrl.searchParams.get('childId')
        if (!childId) {
            return NextResponse.json({ success: false })
        }
        await prismaClient.child.delete({
            where: {
                id: childId
            }
        })
        return NextResponse.json({ success: true })
    } catch (e: any) {
        return NextResponse.json({ success: false })
    }
}
export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const childId = req.nextUrl.searchParams.get('childId')
        const body = await req.json();
        const data = updateChildSchema.parse(body)

        if (!childId) {
            return NextResponse.json({ success: false })
        }
        await prismaClient.child.update({
            where: {
                id: childId
            },
            data: {
                name: data.name ?? undefined,
                dob: data.dob ?? undefined,
                profilePhoto: data.profilePhoto,
                show: data.show ?? undefined,
                story: data.story ?? undefined,
                quote: data.quote
            }
        })
        return NextResponse.json({ success: true })
    } catch (e: any) {
        return NextResponse.json({ success: false })
    }
}