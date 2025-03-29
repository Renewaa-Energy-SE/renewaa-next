import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../prisma";
import crypto from "crypto";
import { Role } from "@/components/Types";
import { toast } from "react-toastify";

const SECRET_KEY = process.env.SECRET_KEY || "1a2b3c4d5e6f7g8h9i";

export async function POST(req: Request, res: NextApiResponse) {
  const adminData = await req.json();

  // console.log("adminData: ", adminData);

  try {
    if (!adminData) {
      return new Response(
        JSON.stringify({
          status: "adminData is missing in the request body",
        }),
        {
          status: 400,
        }
      );
    }

    // Generate a random password
    const randomPassword = crypto.randomBytes(8).toString("hex");

    // Hash the password using the secret key
    const hashedPassword = hashPassword(randomPassword);

    const formData = new FormData();
    formData.append("email", adminData.email);
    formData.append("username", adminData.name);
    formData.append("password", randomPassword);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/newadminmail`,
      {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      toast.info("Email sent successfully");
      console.log("Email sent successfully");
    } else {
      toast.error("Error sending email");
      console.error("Error sending email");
    }

    const admin = await prisma.user.create({
      data: {
        name: adminData.name,
        username: adminData.name,
        email: adminData.email,
        role: "admin",
        password: hashedPassword,
      },
    });
    toast.info("Admin created successfully");
    return new Response(
      JSON.stringify({ status: "Admin created successfully", admin }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while creating the admin");
    return new Response(
      JSON.stringify({
        status: "An error occurred while creating the admin",
      }),
      {
        status: 500,
      }
    );
  }
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
