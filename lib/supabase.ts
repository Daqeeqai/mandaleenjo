import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          company?: string;
          message: string;
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          company?: string;
          message: string;
        };
        Update: {
          name?: string;
          email?: string;
          company?: string;
          message?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          company: string;
          role: string;
          content: string;
          rating: number;
          image_url?: string;
          created_at: string;
        };
        Insert: {
          name: string;
          company: string;
          role: string;
          content: string;
          rating: number;
          image_url?: string;
        };
        Update: {
          name?: string;
          company?: string;
          role?: string;
          content?: string;
          rating?: number;
          image_url?: string;
        };
      };
    };
  };
};