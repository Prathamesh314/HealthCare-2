import { User } from "@/entity/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect_db } from "@/helper/db";

connect_db()
export async function POST(req: NextRequest) {
  const { email, password} =  await req.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    if (user === null) {
      throw new Error("User not found!!");
    }

    const compare = await bcrypt.compare(password, user?.password);

    if (!compare) {
      throw new Error("Password not matched !!");
    }

    const token = jwt.sign(
      {
        _id: user?._id,
        name: user?.name,
      },
      process.env.JWT_KEY ?? " "
    );

    const response = NextResponse.json({
      message: "Login Success",
      status: true,
    });

    response.cookies.set("login", token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      httpOnly: true, // This is a recommended security setting
    });

    return NextResponse.json(response);
      
  } catch (error) {
    console.log("Some error occurred in login")
    console.log(error)

  }
  
}
