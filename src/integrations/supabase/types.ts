export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      applicant_submissions: {
        Row: {
          bio: string | null
          created_at: string | null
          email: string | null
          full_name: string
          headline: string | null
          id: string
          language: string | null
          notes: string | null
          phone_number: string | null
          portfolio_url: string | null
          selected_skills: string[] | null
          skills: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          email?: string | null
          full_name: string
          headline?: string | null
          id?: string
          language?: string | null
          notes?: string | null
          phone_number?: string | null
          portfolio_url?: string | null
          selected_skills?: string[] | null
          skills?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string
          headline?: string | null
          id?: string
          language?: string | null
          notes?: string | null
          phone_number?: string | null
          portfolio_url?: string | null
          selected_skills?: string[] | null
          skills?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_services: {
        Row: {
          created_at: string | null
          description: string
          display_order: number | null
          icon_name: string
          id: string
          image_url: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          display_order?: number | null
          icon_name: string
          id?: string
          image_url?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          display_order?: number | null
          icon_name?: string
          id?: string
          image_url?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      caregiver_care_services: {
        Row: {
          care_service_id: string
          caregiver_id: string
          created_at: string | null
          id: string
        }
        Insert: {
          care_service_id: string
          caregiver_id: string
          created_at?: string | null
          id?: string
        }
        Update: {
          care_service_id?: string
          caregiver_id?: string
          created_at?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "caregiver_care_services_care_service_id_fkey"
            columns: ["care_service_id"]
            isOneToOne: false
            referencedRelation: "care_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "caregiver_care_services_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
        ]
      }
      caregiver_experiences: {
        Row: {
          caregiver_id: string
          country: string
          created_at: string | null
          end_date: string | null
          id: string
          job_details: string | null
          start_date: string | null
        }
        Insert: {
          caregiver_id: string
          country: string
          created_at?: string | null
          end_date?: string | null
          id?: string
          job_details?: string | null
          start_date?: string | null
        }
        Update: {
          caregiver_id?: string
          country?: string
          created_at?: string | null
          end_date?: string | null
          id?: string
          job_details?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "caregiver_experiences_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
        ]
      }
      caregiver_languages: {
        Row: {
          caregiver_id: string
          created_at: string | null
          id: string
          language: string
          proficiency_level: string
        }
        Insert: {
          caregiver_id: string
          created_at?: string | null
          id?: string
          language: string
          proficiency_level: string
        }
        Update: {
          caregiver_id?: string
          created_at?: string | null
          id?: string
          language?: string
          proficiency_level?: string
        }
        Relationships: [
          {
            foreignKeyName: "caregiver_languages_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
        ]
      }
      caregiver_skills: {
        Row: {
          caregiver_id: string | null
          id: string
          skill_id: string | null
        }
        Insert: {
          caregiver_id?: string | null
          id?: string
          skill_id?: string | null
        }
        Update: {
          caregiver_id?: string | null
          id?: string
          skill_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "caregiver_skills_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "caregiver_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["id"]
          },
        ]
      }
      caregivers: {
        Row: {
          age: number | null
          availability: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          day_off: string | null
          education_details: string | null
          education_level: string | null
          employment_type: string | null
          experience: string | null
          headline: string
          id: string
          location: string
          marital_status: string | null
          name: string
          nationality: string | null
          portfolio_url: string | null
          religion: string | null
          updated_at: string | null
          visa_expiry: string | null
          visa_status: string | null
        }
        Insert: {
          age?: number | null
          availability?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          day_off?: string | null
          education_details?: string | null
          education_level?: string | null
          employment_type?: string | null
          experience?: string | null
          headline: string
          id?: string
          location: string
          marital_status?: string | null
          name: string
          nationality?: string | null
          portfolio_url?: string | null
          religion?: string | null
          updated_at?: string | null
          visa_expiry?: string | null
          visa_status?: string | null
        }
        Update: {
          age?: number | null
          availability?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          day_off?: string | null
          education_details?: string | null
          education_level?: string | null
          employment_type?: string | null
          experience?: string | null
          headline?: string
          id?: string
          location?: string
          marital_status?: string | null
          name?: string
          nationality?: string | null
          portfolio_url?: string | null
          religion?: string | null
          updated_at?: string | null
          visa_expiry?: string | null
          visa_status?: string | null
        }
        Relationships: []
      }
      client_requests: {
        Row: {
          additional_details: string | null
          assigned_caregiver_id: string | null
          created_at: string | null
          id: string
          location: string
          mobile: string
          name: string
          notes: string | null
          phone_prefix: string
          service_needed: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          additional_details?: string | null
          assigned_caregiver_id?: string | null
          created_at?: string | null
          id?: string
          location: string
          mobile: string
          name: string
          notes?: string | null
          phone_prefix: string
          service_needed: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          additional_details?: string | null
          assigned_caregiver_id?: string | null
          created_at?: string | null
          id?: string
          location?: string
          mobile?: string
          name?: string
          notes?: string | null
          phone_prefix?: string
          service_needed?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_requests_assigned_caregiver_id_fkey"
            columns: ["assigned_caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
        ]
      }
      skills: {
        Row: {
          category: string | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      convert_skills_to_array: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      link_caregiver_skills: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
