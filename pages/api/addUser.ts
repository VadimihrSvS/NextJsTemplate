import prisma from '../../lib/prisma';

// PUT /api/addUser
export default async function handle(req, res) {
    if (req.method === 'POST') {
        const { user } = req.body;
        const addUser = await prisma.user.create({
            data: { name: user, role: "123" },
        });
        res.status(201).json(addUser);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }

}