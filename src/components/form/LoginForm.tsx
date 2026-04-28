"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function LoginForm() {
  return (
    <>
      <CardHeader className="text-center text-3xl border-b">LOGIN</CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="id">ID</Label>
            <Input className="placeholder:text-xs" id="id" placeholder="ID를 입력해주세요" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="pw">PW</Label>
            <Input className="placeholder:text-xs" id="pw" placeholder="비밀번호를 입력해주세요" />
          </div>
          <Button className="w-full">CONFIRM</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="w-full flex text-xs">
          <span className="mr-auto">아직 계정이 없으신가요?</span>
          <Link className="text-blue-800" href={"/auth/signup"}>
            회원가입
          </Link>
        </p>
      </CardFooter>
    </>
  );
}

export default LoginForm;
