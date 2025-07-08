export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applicant_submissions: {
        Row: {
          bio: string
          created_at: string | null
          email: string
          full_name: string
          headline: string
          id: string
          notes: string | null
          portfolio_url: string | null
          selected_skills: string[] | null
          skills: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          bio: string
          created_at?: string | null
          email: string
          full_name: string
          headline: string
          id?: string
          notes?: string | null
          portfolio_url?: string | null
          selected_skills?: string[] | null
          skills: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          bio?: string
          created_at?: string | null
          email?: string
          full_name?: string
          headline?: string
          id?: string
          notes?: string | null
          portfolio_url?: string | null
          selected_skills?: string[] | null
          skills?: string
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
      Household worker_skills: {
        Row: {
          Household worker_id: string | null
          id: string
          skill_id: string | null
        }
        Insert: {
          Household worker_id?: string | null
          id?: string
          skill_id?: string | null
        }
        Update: {
          Household worker_id?: string | null
          id?: string
          skill_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Household worker_skills_Household worker_id_fkey"
            columns: ["Household worker_id"]
            isOneToOne: false
            referencedRelation: "Household workers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Household worker_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["id"]
          },
        ]
      }
      Household workers: {
        Row: {
          availability: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          experience: string | null
          headline: string
          id: string
          location: string
          name: string
          portfolio_url: string | null
          updated_at: string | null
        }
        Insert: {
          availability?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          experience?: string | null
          headline: string
          id?: string
          location: string
          name: string
          portfolio_url?: string | null
          updated_at?: string | null
        }
        Update: {
          availability?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          experience?: string | null
          headline?: string
          id?: string
          location?: string
          name?: string
          portfolio_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      client_requests: {
        Row: {
          additional_details: string | null
          assigned_Household worker_id: string | null
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
          assigned_Household worker_id?: string | null
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
          assigned_Household worker_id?: string | null
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
            foreignKeyName: "client_requests_assigned_Household worker_id_fkey"
            columns: ["assigned_Household worker_id"]
            isOneToOne: false
            referencedRelation: "Household workers"
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
      link_Household worker_skills: {
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
