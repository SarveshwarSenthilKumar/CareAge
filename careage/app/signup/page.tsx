import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function SignupPage({ searchParams }: { searchParams: { flow?: string } }) {
  const flow = searchParams.flow || "default"

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
          {/* Add signup form here */}
          <p className="mt-4">
            Already have an account?{" "}
            <Link href={`/login?flow=${flow}`} className="text-primary hover:underline">
              Log in
            </Link>
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
            <Link
              href={flow === "volunteer" ? "/volunteer-flow" : flow === "request-help" ? "/request-help-flow" : "/"}
            >
              <Button variant="outline">Go Back</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

