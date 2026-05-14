import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-foreground">Giovanni Pio Martello</p>
          <p className="text-sm text-muted-foreground">Always learning. Always building.</p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/johnh-04/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/giovanni-pio-martello/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/gpmartello/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © {currentYear} Giovanni Pio Martello
        </p>
      </div>
    </footer>
  )
}