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

  // Funzione helper per ripulire gli stili del body
  const resetBodyStyles = () => {
    document.body.style.overflow = ""
    document.body.style.position = ""
    document.body.style.width = ""
    document.body.style.height = ""
  }

  // Blocca rigidamente lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.height = "100%"
    } else {
      resetBodyStyles()
    }

    return () => resetBodyStyles()
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

          if (rect.top <= 90 && rect.bottom >= 200) {
            setActiveSection(section)
            foundActive = true
            break
          }
        }
      }

      if (!foundActive) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Funzione di scroll millmetrica corretta per sbloccare il body prima del calcolo
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    
    if (isOpen) {
      // 1. Chiudiamo il menu e liberiamo IMMEDIATAMENTE il body per permettere lo scroll
      setIsOpen(false)
      resetBodyStyles()

      // 2. Aspettiamo un attimo che il DOM si aggiorni prima di calcolare e scorrere
      setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const header = document.querySelector("header")
          const navHeight = header ? header.offsetHeight : 76

          const rect = targetElement.getBoundingClientRect()
          const targetPosition = window.scrollY + rect.top - navHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }, 50) // 50ms sono sufficienti per il refresh del layout senza scatti visivi
    } else {
      // Logica Desktop standard (il body è già libero)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const header = document.querySelector("header")
        const navHeight = header ? header.offsetHeight : 76

        const rect = targetElement.getBoundingClientRect()
        const targetPosition = window.scrollY + rect.top - navHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    }
  }

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
            className="text-xl font-bold text-primary cursor-pointer"
          >
            GPM
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors cursor-pointer ${activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                onClick={(e) => handleScrollToSection(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cv"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 shadow-sm hover:shadow-md cursor-pointer"
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

      {/* Mobile nav - TOTALMENTE BLOCCATO A SCHERMO */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-background overscroll-none h-screen w-screen flex flex-col justify-start items-center pt-16 px-6">

          {/* Pulsante X posizionato in alto a destra */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground hover:bg-secondary rounded-lg cursor-pointer z-[1000]"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="w-full max-w-sm flex flex-col items-center gap-8 mt-4">
            {/* Logo */}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-4xl font-extrabold tracking-wide text-primary cursor-pointer hover:opacity-80 transition mb-2"
            >
              GPM
            </Link>

            {/* Link di Navigazione Mobile */}
            <div className="flex flex-col items-center gap-6 w-full">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className={`text-xl font-medium transition-colors cursor-pointer ${activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottone CV */}
            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-[85%] rounded-lg bg-primary px-6 py-3 text-center text-lg font-medium text-primary-foreground shadow-sm cursor-pointer"
            >
              CV
            </Link>

            {/* Icone Social */}
            <div className="flex items-center justify-center gap-6 mt-2">
              <Link
                href="https://github.com/johnh-04/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                <Github className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/giovanni-pio-martello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                <Linkedin className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.instagram.com/gpmartello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
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