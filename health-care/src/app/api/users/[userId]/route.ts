import {User} from "@/entity/User";
import { connect_db } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";
connect_db();
export async function GET(req: NextRequest, {params}:{params: any}){    
    try {
        const {userId} = params;
        
        const user = await User.findById(
            {
                _id: userId
            }
        );

        return NextResponse.json({
            user: user,
        });
    } catch (error) {
        console.log("Some error occurred");
        console.log(error);
    }
}

export async function DELETE(req: NextRequest, {params}:{params: any}){
    try {
        const {userId} = params;
        await User.findByIdAndDelete(userId);
        return NextResponse.json({
            message: "User deleted successfully"
        });
    } catch (error) {
        console.log("Some error occurred");
        console.log(error);
    }
}

function handleError(message: string): any {
    return NextResponse.json({
      error: message,
    });
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }): Promise<any> {
    try {
      const { userId } = params;
      const { fname, lname, profile_photo } = await req.json();
  
      let user = await User.findById(userId);
  
      if (!user) {
        return handleError(`Cannot find user with userId: ${userId}`);
      }
  
      user.fname = fname;
      user.lname = lname;
      user.profile_photo = profile_photo;
  
      await user.save();
  
      return NextResponse.json({
        message: 'User updated successfully',
      });
    } catch (error) {
      console.error('Some error occurred:', error);
      return handleError('Error updating user');
    }
  }