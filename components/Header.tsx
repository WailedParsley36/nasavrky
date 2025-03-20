'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" className='mr-5' alt="Logo Nasavrky" width={50} height={50} />
          <span className="ml-2 text-xl font-bold text-primary">Stavební parcely Nasavrky</span>
        </Link>
        
        {/* Tlačítko pro mobilní menu */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktopová navigace */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition">Úvod</Link>
          <Link href="/parcely" className="text-gray-700 hover:text-primary transition">Parcely</Link>
          <Link href="/o-nasavrkach" className="text-gray-700 hover:text-primary transition">O Nasavrkách</Link>
          <Link href="/kontakt" className="text-gray-700 hover:text-primary transition">Kontakt</Link>
        </nav>
      </div>
      
      {/* Mobilní navigace */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow-inner">
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-gray-700 hover:text-primary transition py-1">Úvod</Link>
            <Link href="/parcely" className="text-gray-700 hover:text-primary transition py-1">Parcely</Link>
            <Link href="/o-nasavrkach" className="text-gray-700 hover:text-primary transition py-1">O Nasavrkách</Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-primary transition py-1">Kontakt</Link>
          </div>
        </nav>
      )}
    </header>
  );
}