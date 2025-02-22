import { SiteHeader } from "@/components/site-header"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <p className="mb-4">Here you can find information about the services we offer.</p>
        {/* Add more content about services here */}
      </main>
    </div>
  )
}

