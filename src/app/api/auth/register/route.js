import { postUser } from "@/actions/server/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing fields" }),
        {
          status: 400,
        }
      );
    }

    const result = await postUser({ email, password, name });

    if (!result.insertedId) {
      return new Response(
        JSON.stringify({ success: false, message: "User already exists" }),
        {
          status: 400,
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "User registered successfully",
      }),
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, message: "Server Error" }),
      {
        status: 500,
      }
    );
  }
}
