import { MapPin, GraduationCap, Mail, Phone, Globe, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-section-alt px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">About</h2>
        <h3 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Something about me</h3>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <InfoItem icon={Calendar} label="Birthday" value="October 29, 2004" />
            <InfoItem icon={MapPin} label="Location" value="Mola di Bari (BA), Italy" />
            <InfoItem icon={Phone} label="Phone" value="+39 377 549 2347" />
          </div>
          <div className="space-y-3">
            <InfoItem icon={Mail} label="Email" value="vannimart74@gmail.com" />
            <InfoItem icon={GraduationCap} label="Education" value="BSc Computer Science & Automation Engineering (in progress)" />
            <InfoItem icon={Globe} label="Languages" value="Italian (Native), English (B2), French (Basic)" />
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-6 text-muted-foreground shadow-sm">
          <p className="leading-relaxed">
            Hi everyone, my name is Giovanni Pio, but everyone calls me Vanni. I&apos;m currently studying
            Computer Science and Automation Engineering at the Polytechnic of Bari. I graduated from
            high school in 2023 with honors (100/100 cum laude), where I had the chance to explore computer science,
            telecommunications, and networking in depth.
          </p>

          <p className="leading-relaxed">
            My technical foundation spans <span className="text-foreground font-medium">algorithms & data structures, object-oriented programming, distributed systems & concurrent computing, machine learning fundamentals, computer networks & cybersecurity, signal processing, and control systems & automation</span>. I&apos;ve applied these skills through projects including a Telegram bot, Arduino embedded systems, real-time PHP chat applications, and full-stack web solutions for private clients.
          </p>

          <p className="leading-relaxed">
            I&apos;m deeply passionate about <span className="text-foreground font-medium">AI-powered systems, space technologies & satellite systems, IoT & distributed intelligence, automation & intelligent control, and quantum computing</span>. Currently, I&apos;m focusing on <span className="text-foreground font-medium">bare metal programming for embedded systems and space data science</span> — particularly the data processing pipelines and on-edge signal processing involved in satellite applications.
          </p>

          <p className="leading-relaxed">
            Beyond development, I mentor high school and university students in STEM and English, helping them build strong technical foundations. My goal is to become a <span className="text-foreground font-medium">Satellite Communications (SatCom) Engineer</span>, contributing to next-generation space infrastructure and distributed intelligence systems.
          </p>

          <blockquote className="border-l-4 border-primary bg-primary/5 pl-4 py-3 italic text-foreground">
            &ldquo;If it is worth doing, it is worth doing right.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ 
  icon: Icon, 
  label, 
  value 
}: { 
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string 
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}
