export type Database = {
    public: {
      Tables: Record<string, {
        Row: Record<string, unknown>
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
      }>
      Views: Record<string, {
        Row: Record<string, unknown>
      }>
      Functions: Record<string, {
        Args: Record<string, unknown>
        Returns: unknown
      }>
    }
  }