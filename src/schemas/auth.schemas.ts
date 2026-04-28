import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.email("올바른 이메일 형식이 아닙니다."),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    confirmPassword: z.string().min(1, "비밀번호 확인은 필수입니다."),
    nickname: z
      .string()
      .min(2, "닉네임은 2자 이상이어야 합니다.")
      .max(10, "닉네임은 10자 이하이어야 합니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
