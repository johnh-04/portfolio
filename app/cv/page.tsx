import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Curriculum Vitae</h1>

        {/* PDF Viewer */}
        <div className="bg-card shadow-lg mb-8 overflow-hidden">
          <iframe
            src="/cv.pdf#toolbar=0"
            className="w-full h-[800px] border-0"
            title="Giovanni Pio Martello CV"
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <a
            href="/cv.pdf"
            download="GiovanniPioMartello_CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            Download CV
          </a>
        </div>
      </div>
    </main>
  )
}
