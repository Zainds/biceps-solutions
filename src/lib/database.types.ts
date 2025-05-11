export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      classes: {
        Row: {
          id: number
          created_at: string
          name: string
          description: string
          image_url: string
          trainer_id: number
          duration: number
          max_participants: number
          level: string
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          description: string
          image_url: string
          trainer_id: number
          duration: number
          max_participants: number
          level: string
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          description?: string
          image_url?: string
          trainer_id?: number
          duration?: number
          max_participants?: number
          level?: string
        }
        Relationships: [
          {
            foreignKeyName: "classes_trainer_id_fkey"
            columns: ["trainer_id"]
            referencedRelation: "trainers"
            referencedColumns: ["id"]
          }
        ]
      }
      memberships: {
        Row: {
          id: number
          created_at: string
          name: string
          description: string
          price: number
          features: string[]
          duration: string
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          description: string
          price: number
          features: string[]
          duration: string
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          description?: string
          price?: number
          features?: string[]
          duration?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string
          avatar_url: string | null
          phone_number: string | null
          membership_id: number | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name: string
          avatar_url?: string | null
          phone_number?: string | null
          membership_id?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string
          avatar_url?: string | null
          phone_number?: string | null
          membership_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_membership_id_fkey"
            columns: ["membership_id"]
            referencedRelation: "memberships"
            referencedColumns: ["id"]
          }
        ]
      }
      trainers: {
        Row: {
          id: number
          created_at: string
          name: string
          bio: string
          image_url: string
          specialties: string[]
          experience_years: number
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          bio: string
          image_url: string
          specialties: string[]
          experience_years: number
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          bio?: string
          image_url?: string
          specialties?: string[]
          experience_years?: number
        }
        Relationships: []
      }
      bookings: {
        Row: {
          id: number
          created_at: string
          user_id: string
          class_id: number
          booking_date: string
          status: string
        }
        Insert: {
          id?: number
          created_at?: string
          user_id: string
          class_id: number
          booking_date: string
          status: string
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string
          class_id?: number
          booking_date?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_class_id_fkey"
            columns: ["class_id"]
            referencedRelation: "classes"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}