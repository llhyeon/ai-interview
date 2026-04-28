export const checkNickname = async (nickname: string) => {
  const response = await fetch("/api/auth/checkNickname", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname }),
  });

  if (!response.ok) throw new Error("중복확인 실패");

  return response.json();
};
