import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function LoginPage({ searchParams }: { searchParams: { flow?: string } }) {
  const flow = searchParams.flow || "default"

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          {/* Add login form here */}
          <p className="mt-4">
            Don't have an account?{" "}
            <Link href={`/signup?flow=${flow}`} className="text-primary hover:underline">
              Sign up
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

