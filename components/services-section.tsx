import { Code, Layout, Smartphone, Zap, BookOpen, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Custom Websites",
    description: "From landing pages to full-stack systems, built with clean architecture and modern technologies."
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Scalable web applications with focus on performance, usability, and maintainability."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your site looks great on all devices and screen sizes."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fast-loading websites optimized for SEO and user experience."
  },
  {
    icon: BookOpen,
    title: "STEM Tutoring",
    description: "Private tutoring in mathematics, physics, computer science, and English language."
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Services</h2>
        <h3 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">What I Offer</h3>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          I build custom websites and web applications as a freelancer. From landing pages to full-stack systems, 
          I focus on clean architecture, performance, usability, and scalability.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="mb-2 text-base font-semibold text-foreground">{service.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex flex-col justify-center rounded-xl border-2 border-primary/30 bg-primary/5 p-5">
            <h4 className="mb-2 text-base font-semibold text-foreground">Have a project in mind?</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
