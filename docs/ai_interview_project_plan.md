# AI 면접 질문 연습 서비스 (Next.js + Supabase)

## 1. 프로젝트 개요
AI가 면접 질문을 생성하고 사용자의 답변에 대해 피드백을 제공하는 웹 서비스.

목표
- AI API 활용 경험
- Next.js Server Action 사용
- Supabase 기반 인증 및 데이터 저장

---

# 2. 기술 스택

Frontend
- Next.js (App Router)
- TypeScript
- TailwindCSS

Backend
- Next.js Server Actions

Database / Auth
- Supabase

AI
- OpenAI API 또는 Groq API

---

# 3. 핵심 기능

## 1. 회원가입 / 로그인
Supabase Auth 사용

기능
- 회원가입
- 로그인
- 로그아웃

---

## 2. 직무 선택
사용자가 연습할 직무 선택

예시
- Frontend
- Backend
- Game
- DevOps

---

## 3. AI 면접 질문 생성

AI에게 직무 기반 면접 질문 생성 요청

예시 프롬프트

```
프론트엔드 개발자 면접 질문을 3개 만들어줘.
각 질문은 짧고 명확하게 작성해줘.
```

---

## 4. 사용자 답변 입력

사용자는 질문에 대한 답변 작성

기능
- 답변 작성
- 답변 수정

---

## 5. AI 피드백

AI가 사용자의 답변을 평가

예시 프롬프트

```
다음 면접 답변을 평가해줘.

1. 장점
2. 개선할 점
3. 더 좋은 답변 예시
```

---

## 6. 기록 저장

사용자의 면접 기록 저장

저장 정보
- 질문
- 답변
- AI 피드백
- 직무
- 생성 날짜

---

# 4. 데이터베이스 설계

## users
Supabase Auth 사용

---

## interview_sessions

| column | type |
|------|------|
| id | uuid |
| user_id | uuid |
| job_role | text |
| created_at | timestamp |

---

## interview_questions

| column | type |
|------|------|
| id | uuid |
| session_id | uuid |
| question | text |

---

## interview_answers

| column | type |
|------|------|
| id | uuid |
| question_id | uuid |
| answer | text |
| feedback | text |
| created_at | timestamp |

---

# 5. 폴더 구조

```
app
  page.tsx
  login
    page.tsx
  dashboard
    page.tsx
  interview
    page.tsx

components
  QuestionCard.tsx
  AnswerInput.tsx
  FeedbackBox.tsx

lib
  supabase.ts
  ai.ts

actions
  generateQuestion.ts
  evaluateAnswer.ts
```

---

# 6. Server Action 예시

## 질문 생성

```ts
"use server"

export async function generateQuestion(job: string) {

}
```

---

# 7. 개발 순서

1. Next.js 프로젝트 생성
2. Supabase 연결
3. 로그인 기능
4. 직무 선택 페이지
5. AI 질문 생성
6. 답변 작성 기능
7. AI 피드백
8. 기록 저장
9. 기록 조회

---

# 8. 추가 기능 (선택)

## 면접 점수
AI가 답변 점수 평가

---

## 면접 히스토리
사용자가 이전 면접 기록 확인

---

## 질문 난이도
- Junior
- Mid
- Senior

---

# 9. 포트폴리오 포인트

이 프로젝트로 보여줄 수 있는 기술

- Next.js App Router
- Server Actions
- Supabase Auth
- 데이터베이스 설계
- AI API 연동

---

# 10. 확장 아이디어

- AI 음성 면접
- 실시간 면접 모드
- 커뮤니티 답변 공유

