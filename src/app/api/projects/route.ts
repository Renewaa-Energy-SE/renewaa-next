import prisma from "../../../../prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Parse and validate page
    let page = parseInt(searchParams.get("page") || "1", 10);
    if (isNaN(page) || page < 1) {
      page = 1;
    }

    // Parse and validate limit
    let limit = parseInt(searchParams.get("limit") || "10", 10);
    const MAX_LIMIT = 50;
    if (isNaN(limit) || limit < 1) {
      limit = 10;
    }
    if (limit > MAX_LIMIT) {
      limit = MAX_LIMIT;
    }

    const skip = (page - 1) * limit;

    // Fetch projects with pagination
    const projects = await prisma.project.findMany({
      skip,
      take: limit,
      include: {
        contents: true,
        imageUrls: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Get total count for pagination metadata
    const total = await prisma.project.count();

    return NextResponse.json({
      projects,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while fetching projects" },
      { status: 500 }
    );
  }
}
