import { api } from './api-client'

interface GetProfileResponse {
  user: {
    id: string
    name: string | undefined
    email: string
    avatarUrl: string | undefined
    createdAtYear: number
  }
}

export async function getProfile() {
  const result = await api.get('profile').json<GetProfileResponse>()

  return result
}
