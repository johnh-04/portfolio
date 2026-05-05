"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Loader2, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSuccess(true)
      e.currentTarget.reset()
    } catch {
      setError("Failed to send message. Please try again or contact me directly via email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-section-alt px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Contact</h2>
        <h3 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Get in Touch</h3>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          If you would like to discuss a project or just say hi, I&apos;m always down to chat.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="mb-3 text-lg font-semibold text-foreground">Contact Information</h4>
              <div className="space-y-3">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="vannimart74@gmail.com"
                  href="mailto:vannimart74@gmail.com"
                />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+39 377 549 2347"
                  href="tel:+393775492347"
                />
                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value="Mola di Bari (BA), Italy"
                />
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-semibold text-foreground">Social Links</h4>
              <div className="flex gap-3">
                <SocialLink href="https://github.com/johnh-04/" icon={Github} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/giovanni-pio-martello/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="https://www.instagram.com/gpmartello/" icon={Instagram} label="Instagram" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                <h4 className="mb-2 text-lg font-semibold text-foreground">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ 
  icon: Icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string 
}) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </Link>
    )
  }

  return content
}

function SocialLink({ 
  href, 
  icon: Icon, 
  label 
}: { 
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string 
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </Link>
  )
}
