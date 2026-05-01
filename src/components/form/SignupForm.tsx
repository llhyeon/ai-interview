"use client";

import { checkNickname } from "@/api/checkNickname";
import FormField from "@/components/form/FormField";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { signupSchema, SignupSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type NicknameCheckStatus = "idle" | "available" | "duplicate";

function SignupForm() {
  const [nicknameCheckStatus, setNicknameCheckStatus] = useState<NicknameCheckStatus>("idle");
  const [isChecking, setIsChecking] = useState(false); // 현재 닉네임 중복 검사 중

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  // 닉네임 중복 확인
  const onCheckNickname = async () => {
    setIsChecking(true);
    const isValid = await trigger("nickname");
    if (!isValid) return;

    const nickname = getValues("nickname");
    try {
      const { available } = await checkNickname(nickname);
      if (available) {
        setNicknameCheckStatus("available");
        toast.success("사용 가능한 닉네임입니다.");
      } else {
        setNicknameCheckStatus("duplicate");
        toast.error("사용할 수 없는 닉네임입니다.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsChecking(false);
    }
  };

  const onSubmit = (data: SignupSchema) => {
    if (nicknameCheckStatus !== "available") return;
  };

  return (
    <>
      <CardHeader className="text-center text-3xl border-b">회원가입</CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}>
          <FormField
            label="이메일"
            placeholder="이메일을 입력해주세요."
            register={register("email")}
            error={errors.email?.message}
          />
          <FormField
            label="비밀번호"
            inputType="password"
            placeholder="비밀번호를 입력해주세요."
            register={register("password")}
            error={errors.password?.message}
          />
          <FormField
            label="비밀번호 확인"
            inputType="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <FormField
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            button
            buttonText="중복확인"
            onClick={onCheckNickname}
            register={register("nickname", {
              onChange: () => {
                if (nicknameCheckStatus != "idle") setNicknameCheckStatus("idle");
              },
            })}
            error={errors.nickname?.message}
            buttonDisabled={isChecking}
          />
          <Button
            type="submit"
            className="w-full mt-4"
            disabled={nicknameCheckStatus != "available"}>
            회원가입
          </Button>
        </form>
      </CardContent>
    </>
  );
}

export default SignupForm;
