import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">{/* Espacio vacío a la izquierda para centrar el logo */}</div>
        <div className="flex justify-center">
          <Image
            src="/images/bbk-bootcamps-logo.png"
            alt="BBK Bootcamps powered by The Bridge"
            width={280}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </div>
        <div className="flex-1 text-right">
          <p className="text-sm text-gray-600 dark:text-gray-400">Made by Rubens Ballester Lillo</p>
        </div>
      </div>
    </header>
  )
}
