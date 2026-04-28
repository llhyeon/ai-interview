import "server-only";

export const serverEnv = {
  supabaseAdminKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,

  // gemini api key
  geminiApiKey: process.env.GEMINI_API_KEY!,
};
