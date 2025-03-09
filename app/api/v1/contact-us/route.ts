import { prismaClient } from '@/prisma';
import env from '@/utils/env';
import mailer from '@/utils/mailer';
import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from './validator';

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const body = await request.json();
        const data = contactSchema.parse(body)
        console.log(data);


        const message = await prismaClient.contact.create({
            data: {
                message: data.message,
                reason: '',
                phoneNumber: data.phoneNumber,
                email: data.email,
                fullNames: data.fullNames,
                isRead: false,
                childId: data.childId
            }
        })
        const mailerResponse = await mailer.sendMail({
            from: `Messages | Muze Tubyine WEBSITE <${process.env.SMTP_USERNAME}>`,
            to: env.PERMITTED_EMAILS,
            subject: `Message from ${data.fullNames} | What-IF Website`,
            html: `
            <p>${data.fullNames} (${data.email}) sent a message</p>
            <p>${data.message}</p>
            `
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false })
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        const messageId = req.nextUrl.searchParams.get('messageId')
        if (!messageId) {
            return NextResponse.json({ success: false })
        }
        await prismaClient.contact.delete({
            where: {
                id: messageId
            }
        })
        return NextResponse.json({ success: true })
    } catch (e: any) {
        return NextResponse.json({ success: false })
    }
}
export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const action = req.nextUrl.searchParams.get('action')
        const messageId = req.nextUrl.searchParams.get('messageId')
        if (!action || !messageId) {
            return NextResponse.json({ success: false })
        }
        const message = await prismaClient.contact.findUnique({
            where: {
                id: messageId
            }
        })
        if (action === 'read') {
            await prismaClient.contact.update({
                where: {
                    id: messageId
                },
                data: {
                    isRead: true
                }
            })
        }

        if (action === 'star') {
            await prismaClient.contact.update({
                where: {
                    id: messageId
                },
                data: {
                    isStarred: !message?.isStarred
                }
            })
        }

        return NextResponse.json({ success: true })
    } catch (e: any) {
        return NextResponse.json({ success: false })
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const messages = await prismaClient.contact.findMany({
            orderBy: {
                createdAt: 'desc',
            }
        })
        return NextResponse.json({ success: true, data: messages })
    } catch (e: any) {
        return NextResponse.json({ success: false })
    }
}