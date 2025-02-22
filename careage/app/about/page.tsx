import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-6">About CareAge</h1>
        <p className="mb-4">Learn about our mission, vision, and the impact we're making in the community.</p>
        {/* Add more content about the organization here */}
      </main>
    </div>
  )
}

