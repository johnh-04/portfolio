import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  Cpu,
  Cog,
  Brain,
  Layers,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "Python", "PHP", "Java", "C", "MATLAB", "SQL"]
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "Node.js", "Express", "REST APIs", "WebSockets", "CRUD", "Client-Server Architecture"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PL/SQL"]
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Linux", "Git", "Docker", "Simulink", "Packet Tracer", "Multisim"]
  },
  {
    title: "Robotics & IoT",
    icon: Cpu,
    skills: ["Arduino", "Embedded Systems", "IoT"]
  },
  {
    title: "Engineering Foundations",
    icon: Cog,
    skills: ["Control Systems & Automation", "Signal Processing", "LTI systems", "Digital Communication systems"]
  }
]

const interests = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Layers, label: "Space Technologies" },
  { icon: Zap, label: "Embedded Systems" },
  { icon: Cpu, label: "Quantum Computing" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Skills</h2>
        <h3 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Tech Stack</h3>

        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h4 className="mb-4 text-lg font-semibold text-foreground">Current Interests</h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest) => (
            <div 
              key={interest.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <interest.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{interest.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
