// import prisma from "../../../../prisma";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function POST(req: Request) {
//   // console.log("context_123: ", context);
//   try {
//     // console.log("context_123: ", context);
//     const data = await req.json();
//     console.log("formdata: ", data);
//     const { id } = data;
//     console.log("id_received: ", data?.id);
//     const project = await prisma.project.findUnique({
//       where: {
//         id: parseInt(data?.id),
//       },
//       include: {
//         contents: true,
//         imageUrls: true,
//       },
//     });

//     if (!project) {
//       return NextResponse.json({ error: "Project not found" }, { status: 404 });
//     }

//     return NextResponse.json({ project });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "An error occurred while fetching the project" },
//       { status: 500 }
//     );
//   }
// }

import prisma from "../../../../prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: Request) {
  // console.log("context_123: ", context);
  try {
    // console.log("context_123: ", context);
    const data = await req.json();
    // console.log("formdata: ", data);
    const { id } = data;
    // console.log("id_received: ", data?.id);
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(data?.id),
      },
      include: {
        contents: true,
        imageUrls: true,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while fetching the project" },
      { status: 500 }
    );
  }
}
