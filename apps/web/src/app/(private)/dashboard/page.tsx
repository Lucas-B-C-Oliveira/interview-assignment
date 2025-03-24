export default function Dashboard() {
  return (
    <div>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto p-4 md:p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to your dashboard overview.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard title="Total Users" value="12,345" />
            <DashboardCard title="Revenue" value="$34,567" />
            <DashboardCard title="Active Projects" value="25" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium">Recent Activity</h3>
              <div className="space-y-4">
                <ActivityItem
                  title="Project Created"
                  description="New project 'Marketing Campaign' was created"
                  time="2 hours ago"
                />
                <ActivityItem
                  title="Task Completed"
                  description="Task 'Update documentation' was marked as complete"
                  time="5 hours ago"
                />
                <ActivityItem
                  title="New Comment"
                  description="John Doe commented on 'Q4 Planning'"
                  time="Yesterday"
                />
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium">Upcoming Tasks</h3>
              <div className="space-y-4">
                <TaskItem
                  title="Quarterly Review"
                  description="Prepare presentation for quarterly review"
                  dueDate="Tomorrow"
                />
                <TaskItem
                  title="Client Meeting"
                  description="Meeting with ABC Corp to discuss new requirements"
                  dueDate="In 2 days"
                />
                <TaskItem
                  title="Release Planning"
                  description="Plan next release cycle and prioritize features"
                  dueDate="Next week"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  )
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string
  description: string
  time: string
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}

function TaskItem({
  title,
  description,
  dueDate,
}: {
  title: string
  description: string
  dueDate: string
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="h-5 w-5 mt-0.5 rounded-full border border-primary flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs font-medium text-primary">{dueDate}</p>
      </div>
    </div>
  )
}
