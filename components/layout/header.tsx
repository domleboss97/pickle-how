import { siteConfig } from "@/config/site"
import PickleIcon from "../icons/pickle-icon"

export async function Header() {
  return (
    <header className="sticky top-0 z-40 underline-offset-4 backdrop-blur-md md:static">
      <div className="container flex flex-row items-center space-x-3 py-2">
        <PickleIcon className="aspect-square size-12 transition-all group-hover:-rotate-90 group-hover:scale-105" />
        <h1 className="text-center text-2xl font-bold text-green-700">
          {siteConfig.name}
        </h1>
      </div>
    </header>
  )
}
