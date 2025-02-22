import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HandHeart, HeartHandshake } from "lucide-react"
import { Nanum_Myeongjo as Jeju_Myeongjo } from "next/font/google"

const jejuMyeongjo = Jeju_Myeongjo({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted">
        <div className="text-center">
          <h1 className={`text-5xl font-bold mb-12 ${jejuMyeongjo.className}`}>Welcome to CareAge</h1>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/volunteer-flow" className="w-80 h-80">
              <Button
                size="lg"
                className="w-full h-full p-6 rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <span className="text-3xl mb-2">Become a</span>
                <span className="text-3xl mb-4">Volunteer</span>
                <HandHeart size={120} />
              </Button>
            </Link>
            <Link href="/request-help-flow" className="w-80 h-80">
              <Button
                size="lg"
                className="w-full h-full p-6 rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <span className="text-3xl mb-2">Request</span>
                <span className="text-3xl mb-4">Help</span>
                <HeartHandshake size={120} />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

