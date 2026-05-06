"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Github, Linkedin, Instagram } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Prevent scroll when mobile menu is open
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'unset'
    }

    return () => {
      document.documentElement.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.replace("#", ""))
      let foundActive = false

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // More strict condition: section must be more centered
          if (rect.top <= 100 && rect.bottom >= 200) {
            setActiveSection(section)
            foundActive = true
            break
          }
        }
      }

      // Reset active section when at the top of the page
      if (!foundActive) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
        } ${isOpen ? "hidden" : ""}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xl font-bold text-primary"
          >
            GPM
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                onClick={(e) => {
                  e.preventDefault()
                  const targetId = item.href.replace("#", "")
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    const rect = targetElement.getBoundingClientRect()
                    const offset = 120 // Offset to show section title clearly
                    window.scrollTo({
                      top: window.scrollY + rect.top - offset,
                      behavior: 'smooth'
                    })
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cv"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 shadow-sm hover:shadow-md"
            >
              CV
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer rounded-lg p-2 text-foreground hover:bg-secondary md:hidden flex items-center justify-center"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile nav - OUTSIDE header for proper stacking */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-background flex flex-col">

          {/* X button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground hover:bg-secondary rounded-lg cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="flex flex-col items-center mt-24 mb-2">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-4xl font-extrabold tracking-wide text-primary cursor-pointer hover:opacity-80 transition"
            >
              GPM
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 flex-1">


            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)

                  const targetId = item.href.replace("#", "")
                  const el = document.getElementById(targetId)

                  if (el) {
                    setTimeout(() => {
                      el.scrollIntoView({ behavior: "smooth" })
                    }, 300)
                  }
                }}
                className={`text-xl font-medium transition-colors ${activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-[80%] max-w-sm rounded-lg bg-primary px-6 py-3 text-center text-lg font-medium text-primary-foreground"
            >
              CV
            </Link>
            <div className="flex items-center justify-center gap-6 mt-4">
              <Link
                href="https://github.com/johnh-04/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/giovanni-pio-martello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.instagram.com/gpmartello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
