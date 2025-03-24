import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getProfile } from '@/http/get-profile'

export async function ProfileUserAvatar() {
  const { user } = await getProfile()

  return (
    <div className="mb-8 flex flex-col items-center space-y-4 text-center sm:flex-row sm:space-x-6 sm:space-y-0 sm:text-left">
      <Avatar className="h-24 w-24">
        <AvatarImage src={user.avatarUrl} alt={user.name} />
        <AvatarFallback>
          {user?.name
            ?.split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-3xl font-bold">Welcome {user.name}</h1>
        <p className="text-muted-foreground">{user.email}</p>
      </div>
    </div>
  )
}
