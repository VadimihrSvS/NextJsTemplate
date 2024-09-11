export const dynamic = 'force-static'
import prisma from '../../../lib/prisma';

export async function POST() {
    const res = await prisma.user.create({
        data: { name: user, role: "123" },
    });
    const data = await res.json()

    return Response.json({ data })
}