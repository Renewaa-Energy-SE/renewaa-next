import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/app/lib/actions";
import prisma from "../../../../prisma";
import crypto from "crypto";
import { Role } from "@/components/Types";

const SECRET_KEY = process.env.SECRET_KEY || "1a2b3c4d5e6f7g8h9i";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // Find the user in the database
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user || user.password !== hashPassword(password)) {
    return new Response(
      JSON.stringify({
        status: "Invalid credentials",
      }),
      {
        status: 401,
      }
    );
  }
  // Convert the user data to a plain object
  const userData = {
    id: user.id,
    email: user.email,
    username: user.username,
    role: user.role,
    name: user.name,
    password: user.password,
  };

  // const response = await authenticate(null, new FormData());
  // response.user = userData;

  return new Response(
    JSON.stringify({ status: "Log in successfully", userData }),
    { status: 200 }
  );
}

// Function to hash the password with a fixed length
function hashPassword(password: string): string {
  const hash = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(password)
    .digest("hex");
  const fixedLengthHash = hash.slice(0, 32); // Truncate the hash to 32 characters

  return fixedLengthHash;
}
