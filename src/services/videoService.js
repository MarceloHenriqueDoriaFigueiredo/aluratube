import { createClient } from "@supabase/supabase-js";

const PROJETC_URL = "https://npnjodczlwlgxgyesqus.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbmpvZGN6bHdsZ3hneWVzcXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjMxMzgsImV4cCI6MTk4MzczOTEzOH0.zLLsi-5ZpdiHaMBDlGfSr0osj_Jv6cQNBeWufXXuIF0"
const supabase = createClient(PROJETC_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");

        }
    }
}