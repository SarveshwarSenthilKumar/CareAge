import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <header className="w-full bg-[#C7D7DE]">
        <div className="max-w-[2000px] mx-auto w-full bg-[#C7D7DE]">
          <div
            className="relative w-full h-[140px] flex items-center justify-center"
            style={{ backgroundColor: "#B2D1D8" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-22%20at%204.26.14%E2%80%AFAM-dHRlrHVHlEBZtbGYvxdSvb1Le4w4dW.png"
              alt="CareAge - carrying support across generations"
              width={1400}
              height={300}
              className="w-full h-[140px] object-contain"
              priority
            />
            {/* Add background extensions on both sides */}
            <div className="absolute top-0 bottom-0 -left-[100vw] w-[100vw] bg-[#C7D7DE]" />
            <div className="absolute top-0 bottom-0 -right-[100vw] w-[100vw] bg-[#C7D7DE]" />
          </div>
        </div>
      </header>
      <nav className="bg-white border-b shadow-sm">
        <div className="container flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-primary hover:text-primary/90 font-medium text-sm">
              Home
            </Link>
            <Link href="/services" className="text-primary hover:text-primary/90 font-medium text-sm">
              Services
            </Link>
            <Link href="/volunteer" className="text-primary hover:text-primary/90 font-medium text-sm">
              Volunteer
            </Link>
            <Link href="/about" className="text-primary hover:text-primary/90 font-medium text-sm">
              About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-primary hover:text-primary/90 h-8 text-sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary text-white hover:bg-primary/90 h-8 text-sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

