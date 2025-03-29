import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../prisma";

export async function POST(req: Request, res: NextApiResponse) {
  const projectData = await req.json();

  // console.log("projectData: ", projectData);

  try {
    if (!projectData) {
      return new Response(
        JSON.stringify({
          status: "projectData is missing in the request body",
        }),
        {
          status: 400,
        }
      );
    }

    const project = await prisma.project.create({
      data: {
        title: projectData.title,
        mainImageUrl: projectData.mainImage,
        imageUrls: {
          create: projectData.images.map((url: string) => ({ url })),
        },
        contents: {
          create: projectData.contents.map((paragraph: string) => ({
            paragraph,
          })),
        },
      },
    });
    return new Response(
      JSON.stringify({ status: "Project created successfully", project }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        status: "An error occurred while creating the project",
      }),
      {
        status: 500,
      }
    );
  }
}
