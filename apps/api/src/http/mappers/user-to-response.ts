type User = {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
  createdAt: Date
}

type UserResponse = {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
  createdAtYear: number
}

export function mapUserToResponse(user: User): UserResponse {
  const year = user.createdAt.getFullYear()

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl,
    createdAtYear: year,
  }
}
