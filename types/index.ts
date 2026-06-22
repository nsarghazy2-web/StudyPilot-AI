export type User = {
  id: string
  email: string
  full_name?: string
  created_at: string
}

export type Course = {
  id: string
  owner_id: string
  title: string
  description?: string
  created_at: string
}
