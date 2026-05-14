import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Curriculum Vitae</h1>

        {/* MOBILE FALLBACK: Visible only on small screens */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 text-center shadow-md md:hidden mb-8 min-h-[300px]">
          <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
            <FileText className="h-12 w-12" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Preview not available on mobile
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs mb-6">
            For the best reading experience, please download the PDF file directly to your device.
          </p>
          <a
            href="/cv.pdf"
            download="GiovanniPioMartello_CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        {/* DESKTOP VIEWER: Visible from tablet/PC onwards */}
        <div className="hidden md:block bg-card shadow-lg mb-8 overflow-hidden rounded-xl border border-border">
          <iframe
            src="/cv.pdf#toolbar=0"
            className="w-full h-[1000px] border-0"
            title="Giovanni Pio Martello CV"
          />
        </div>

        {/* Bottom Download Button (Desktop only) */}
        <div className="hidden md:flex justify-center">
          <a
            href="/cv.pdf"
            download="GiovanniPioMartello_CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </main>
  )
}