import Quiz from "@/components/quiz"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Test de Ciberseguridad</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Evalúa tus conocimientos sobre conceptos y herramientas de ciberseguridad
          </p>
        </header>
        <Quiz />
      </div>
    </div>
  )
}
