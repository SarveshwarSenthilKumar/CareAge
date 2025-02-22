import { SiteHeader } from "@/components/site-header"

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-6">Volunteer with Us</h1>
        <p className="mb-4">Learn about volunteer opportunities and how you can make a difference.</p>
        {/* Add more content about volunteering here */}
      </main>
    </div>
  )
}

