import { postsFormSchema } from "@/lib/form-schema";

export async function POST(request: Request) {
    const data = await request.json()

    // This will not return anything because it is stopped already in front-end
    // Then if there is no errors, then it will run the following codes
    const validatedPost = postsFormSchema.parse(data);
    
    return Response.json(validatedPost , {status: 201})
  }