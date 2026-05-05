"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

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
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
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
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    }`}>
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
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href.replace("#", "")
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
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-foreground hover:bg-secondary md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-sm md:hidden overflow-y-auto">
          <div className="flex flex-col items-center gap-8 pt-12 pb-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  
                  const targetId = item.href.replace("#", "")
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className={`text-xl font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
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
              className="rounded-lg bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary/90 shadow-sm hover:shadow-md"
            >
              CV
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
