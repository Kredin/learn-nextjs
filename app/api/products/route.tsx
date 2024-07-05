import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const product = await prisma.products.findMany()
  return NextResponse.json(product);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  
  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price
    }
  })

  return NextResponse.json(
    newProduct,
    { status: 201 }
  );
}
