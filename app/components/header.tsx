import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-fit  flex justify-between items-center px-6 py-4 z-50">
      {/* Logo or site title */}
      <div className="text-xl sm:text-2xl font-bold">
        Isaac Ndung&apos;u
      </div>

      {/* Navigation */}
      <nav className="hidden sm:flex gap-6 text-xl font-medium text-white">
        <Link href="#about" className="hover:text-[#dd4956] transition">About</Link>
        <Link href="#projects" className="hover:text-[#dd4956] transition">Projects</Link>
        <Link href="#contact" className="hover:text-[#dd4956] transition">Contact</Link>
      </nav>

      {/* Optional mobile menu button */}
      <button className="sm:hidden text-2xl" aria-label="Open Menu">
        ☰
      </button>
    </header>
  );
}
