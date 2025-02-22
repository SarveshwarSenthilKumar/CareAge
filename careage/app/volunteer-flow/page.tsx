import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogIn, UserPlus } from "lucide-react"

export default function VolunteerFlowPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Become a Volunteer</h1>
          <p className="mb-8 text-xl">To become a volunteer, please log in or sign up.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/login?flow=volunteer" className="w-64 h-64">
              <Button
                size="lg"
                className="w-full h-full p-4 rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <span className="text-3xl mb-4">Log In</span>
                <LogIn size={80} />
              </Button>
            </Link>
            <Link href="/signup?flow=volunteer" className="w-64 h-64">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-full p-4 rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <span className="text-3xl mb-4">Sign Up</span>
                <UserPlus size={80} />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

