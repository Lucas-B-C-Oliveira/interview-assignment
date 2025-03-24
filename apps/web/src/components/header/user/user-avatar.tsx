import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getProfile } from '@/http/get-profile'

export async function UserAvatar() {
  const { user } = await getProfile()

  return (
    <Avatar className="h-9 w-9">
      <AvatarImage src={user.avatarUrl} alt={user.name} />
      <AvatarFallback>{user.email.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}
