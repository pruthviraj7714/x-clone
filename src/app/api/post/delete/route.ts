import authOptions from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const postId = req.nextUrl.searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        {
          message: "No Post ID found!",
        },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        {
          message: "User not found!",
        },
        { status: 403 }
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        id: Number(session.user.id),
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found!",
        },
        { status: 403 }
      );
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return NextResponse.json(
        {
          message: "No Post found!",
        },
        { status: 404 }
      );
    }

    if (post.userId !== user.id) {
      return NextResponse.json(
        {
          message: "You are not authorized to delete this post!",
        },
        { status: 403 }
      );
    }

    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json(
      {
        message: "Post deleted successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      {
        message: "An error occurred while deleting the post.",
      },
      { status: 500 }
    );
  }
}
