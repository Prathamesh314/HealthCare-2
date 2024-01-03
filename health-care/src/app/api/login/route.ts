import { User } from "@/entity/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Doctor } from "@/entity/Doctor";

export async function POST(req: NextRequest) {
  const { email, password, role } = await req.json();

  try {
    if (role === "user") {
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
        process.env.JWT_KEY || " "
      );

      //   console.log(token);

      const response = NextResponse.json({
        message: "Login Success",
        status: true,
      });

      response.cookies.set("login", token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        httpOnly: true, // This is a recommended security setting
      });

      return response;
    } 
    
    
    
    else {
      const doctor = await Doctor.findOne({
        email: email,
      });

      if (doctor == null) {
        throw new Error("Doctor not found!!");
      }

      const compare = await bcrypt.compareSync(password, doctor?.password);

      if (!compare) {
        throw new Error("Password not matched!!");
      }

      const token = jwt.sign(
        {
          _id: doctor?._id,
          name: doctor?.name,
        },
        process.env.JWT_KEY || " "
      );

      const response = NextResponse.json({
        message: "Login Success",
        status: true,
      });

      response.cookies.set("login", token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        httpOnly: true, // This is a recommended security setting
      });

      return response;
    }
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return NextResponse.json({
      message: "Credentials are not matching...",
    });
  }
}
