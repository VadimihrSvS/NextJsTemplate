import prisma from '../../lib/prisma';

// PUT /api/addUser
export async function handle(req, res) {
    const { user } = req.body;
    const addUser = await prisma.user.create({
        data: { name: user, role: "123" },
    });
    res.json(addUser);
}