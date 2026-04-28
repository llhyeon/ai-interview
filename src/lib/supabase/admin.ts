import "server-only";

import { createClient } from "@supabase/supabase-js";
import { clientEnv } from "@/lib/env/client";
import { serverEnv } from "./../env/server";

export const supabaseAdmin = createClient(clientEnv.supabaseUrl, serverEnv.supabaseAdminKey);
