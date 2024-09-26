import prisma from "@/lib/db";
import { userSchema } from "@/lib/form-schema";

export async function POST(request: Request) {
    const data = await request.formData();

    const name = data.get('name')
    const age = data.get('age')
    const email = data.get('email')
    const role = data.get('role')

    const newPost = {
        name,
        age: Number(age),
        email,
        role
    }

    const validatedNewUser = userSchema.parse(newPost);

    try {
        await prisma.user.create({
            data: validatedNewUser
        })
    } catch (error) {  
        console.log('[USERS_POST]:' + error)
    }

    return Response.json(validatedNewUser, {status: 201})
}