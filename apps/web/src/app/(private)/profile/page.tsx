import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ProfileUserAvatar } from './profile-user-avatar'
import { getProfile } from '@/http/get-profile'

export default async function Profile() {
  const { user } = await getProfile()

  console.log('user', user)

  return (
    <div>
      <ProfileUserAvatar />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Your personal information and account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
                <div className="text-sm font-medium text-muted-foreground">
                  Name
                </div>
                <div className="sm:col-span-2">{user.name}</div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
                <div className="text-sm font-medium text-muted-foreground">
                  Email
                </div>
                <div className="sm:col-span-2">{user.email}</div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
                <div className="text-sm font-medium text-muted-foreground">
                  Member since
                </div>
                <div className="sm:col-span-2">{user.createdAtYear}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Edit Profile</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
