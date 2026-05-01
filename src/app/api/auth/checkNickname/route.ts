import { supabaseAdmin as supabase } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nickname } = await req.json();

    if (!nickname) return NextResponse.json({ message: "이메일이 필요합니다." }, { status: 400 });

    const { data, error } = await supabase
      .from("userinfo")
      .select("id")
      .eq("nickname", nickname)
      .maybeSingle();

    if (error) return NextResponse.json({ message: "서버 에러" }, { status: 500 });

    return NextResponse.json({
      available: !data,
    });
  } catch (err) {
    console.error(`닉네임 중복확인 중 에러: ${err}`);
    return NextResponse.json(
      {
        message: "잘못된 요청입니다.",
      },
      {
        status: 400,
      },
    );
  }
}
