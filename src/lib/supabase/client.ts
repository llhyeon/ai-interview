"use client";

import { clientEnv } from "@/lib/env/client";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(clientEnv.supabaseUrl, clientEnv.supabaseAnonKey);
}
