import Link from "next/link"
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react"
import { Typewriter } from "./typewriter"

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 px-6 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg shadow-primary/10 md:h-40 md:w-40">
            <Image
              src="../public/profile.jpeg"
              alt="Giovanni Pio Martello"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Giovanni Pio Martello
        </h1>
        
        <p className="mb-6 text-lg text-primary font-medium md:text-xl">
          Computer Science & Automation Engineering Student
        </p>
        
        <p className="mb-6 text-lg text-muted-foreground md:text-xl">
          I&apos;m a{" "}
          <Typewriter 
            words={["Web Developer", "Freelancer", "AI Enthusiast", "Space Tech Explorer"]} 
          />
        </p>
        
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Freelance web developer building custom websites and web applications 
          with scalable architecture and performance-oriented design. Passionate about 
          AI, robotics, and space technologies.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground shadow-sm transition-all hover:bg-secondary hover:shadow-md"
          >
            Learn more
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/johnh-04/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/giovanni-pio-martello/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/gpmartello/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
    </section>
  )
}
