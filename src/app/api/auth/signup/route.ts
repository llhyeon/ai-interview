import { createClient } from "@/lib/supabase/client";
import { signupSchema } from "@/schemas/auth.schemas";
import { NextResponse } from "next/server";
import z, { success } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = signupSchema.safeParse(body); // 1. Zod 검증

    if (!result.success)
      return NextResponse.json(
        {
          success: false,
          message: "잘못된 요청입니다.",
          errors: z.flattenError(result.error),
        },
        {
          status: 400,
        },
      );

    const { email, password, nickname } = result.data;

    const supabase = await createClient();

    // 닉네임 중복 검사
    const { data: existingNickname } = await supabase
      .from("userinfo")
      .select("id")
      .eq("nickname", nickname)
      .maybeSingle();

    if (existingNickname) {
      return NextResponse.json(
        {
          success: false,
          message: "이미 사용 중인 닉네임입니다.",
        },
        { status: 409 },
      );
    }

    // 회원가입 진행
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError || !authData.user) {
      return NextResponse.json(
        {
          success: false,
          message: authError?.message ?? "회원가입 실패",
        },
        {
          status: 500,
        },
      );
    }

    // userinfo 테이블에 저장
    const { error: insertError } = await supabase.from("userinfo").insert({
      id: authData.user.id,
      email,
      nickname,
    });

    if (insertError) {
      return NextResponse.json(
        {
          success: false,
          message: "유저 정보 저장 실패",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "회원가입 성공",
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    console.error(`회원가입 중 에러: ${err}`);

    return NextResponse.json(
      {
        success: false,
        message: "서버 에러",
      },
      {
        status: 500,
      },
    );
  }
}
