import { getProfile } from '@/http/get-profile'
import { UserAvatar } from './user-avatar'

export async function UserData() {
  const { user } = await getProfile()

  return (
    <div className="flex items-center justify-start gap-2 p-2">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        <UserAvatar />
      </div>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm font-medium">{user.name}</p>
        <p className="text-xs text-muted-foreground">{user.email}</p>
      </div>
    </div>
  )
}
