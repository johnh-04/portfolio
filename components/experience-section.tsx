import { ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Freelance Web Developer",
    organization: "Self-employed",
    period: "2025 — Present",
    description: "Building custom websites and web applications tailored to client needs. Focus on performance, usability, and clean implementation.",
    type: "work"
  },
  {
    title: "Private Tutor (STEM & English)",
    organization: "Self-employed",
    period: "2024 — Present",
    description: "Providing private tutoring in mathematics, physics, computer science, and English language to high school and university students.",
    type: "work"
  },
  {
    title: "BSc Computer Science & Automation Engineering",
    organization: "Polytechnic of Bari",
    period: "2023 — Present",
    description: "Pursuing a Bachelor's degree with focus on Automation, studying control systems, signal processing, and software engineering.",
    type: "education"
  },
  {
    title: "Qiskit Global Summer School 2025",
    organization: "IBM Quantum",
    period: "2025",
    description: "Participated in IBM's quantum computing summer school, earning a verified digital badge.",
    link: "https://www.credly.com/badges/8d28b7f1-c980-4ebf-becf-d8ad3a5012ce/public_url",
    type: "certification"
  },
  {
    title: "Generative AI",
    organization: "Google",
    period: "2023",
    description: "Completed Google Cloud's online course on generative AI, earning a verified digital badge.",
    link: "https://www.skills.google/public_profiles/e64dbe5f-418c-4ad0-a4a0-5c0390cb2d3e/badges/4872543",
    type: "certification"
  },
  {
    title: "High School Diploma",
    organization: "IISS Luigi dell'Erba",
    period: "2018 — 2023",
    description: "Computer Science & Telecommunications. Final grade: 100/100 with honors. Registered in National Register of Excellence — INDIRE.",
    type: "education"
  },
  {
    title: "ICDL - IT Security",
    organization: "AICA",
    period: "2023",
    description: "Earned the ICDL IT Security certification, demonstrating knowledge of cybersecurity principles and best practices.",
    link: "/ICDL_Certificato-IT-Security_CC.pdf",
    type: "certification"
  },
  {
    title: "Introduction to IoT",
    organization: "Cisco Networking Academy",
    period: "2023",
    description: "Completed Cisco's online course covering IoT fundamentals, earning a verified digital badge.",
    link: "https://www.credly.com/badges/fe6294e6-b0c5-4c20-8510-ee5cbf2c97a0/public_url",
    type: "certification"
  },
  {
    title: "NSE 1 & 2",
    organization: "Fortinet Training Institute",
    period: "2022",
    description: "Completed Fortinet's NSE 1 & 2 certifications.",
    link: "/NSE_1&2.pdf",
    type: "certification"
  },
  {
    title: "CyberChallenge participation",
    organization: "Cybersecurity National Laboratory",
    period: "2022",
    description: "Selected to participate in the national cybersecurity training program.",
    link: "/Attestato_partecipazione_CC.IT.pdf",
    type: "certification"
  },
  {
    title: "Cisco Cybersecurity Scholarship",
    organization: "Cisco Networking Academy",
    period: "2021",
    description: "Awarded a scholarship to complete Cisco's online cybersecurity course, covering fundamentals of network security and cyber threats.",
    link: "/Cisco_Cybersecurity_Scholarship.pdf",
    type: "certification"
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    period: "2020",
    description: "Completed Cisco's online course covering cybersecurity fundamentals, earning a verified digital badge.",
    link: "https://www.credly.com/badges/240a8f23-5b7f-47d0-af49-7b06e68d93a9/public_url",
    type: "certification"
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-section-alt px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Experience</h2>
        <h3 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Education & Career</h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-2rem)] w-[2px] bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                {/* Content card */}
                <div className={`ml-8 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {exp.period}
                    </span>
                    <h4 className="mb-1 text-lg font-semibold text-foreground">{exp.title}</h4>
                    <p className="mb-3 text-sm font-medium text-primary">{exp.organization}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        View credential
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
