'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Search, User, Menu } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import Logo from '@/components/Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="bg-green-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-2xl font-bold">Super Sacolão</span>
          </Link>

          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                name="search"
                type="text"
                placeholder="Buscar produtos..."
                className="w-full px-4 py-2 text-white pl-10 border focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="/produtos"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === '/produtos'
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-500 hover:text-white'
              }`}
            >
              Produtos
            </Link>
            <Link
              href="/ofertas"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === '/ofertas'
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-500 hover:text-white'
              }`}
            >
              Ofertas
            </Link>
            <Link
              href="/conta"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === '/conta'
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-500 hover:text-white'
              }`}
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              href="/carrinho"
              className={`px-3 py-2 rounded-md transition-colors relative ${
                pathname === '/carrinho' || pathname === '/checkout'
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-500 hover:text-white'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-500">
            <div className="flex flex-col space-y-3">
              <Link
                href="/produtos"
                className={`px-3 py-2 rounded-md ${
                  pathname === '/produtos'
                    ? 'bg-green-700 text-white'
                    : 'hover:text-green-200'
                }`}
              >
                Produtos
              </Link>
              <Link
                href="/ofertas"
                className={`px-3 py-2 rounded-md ${
                  pathname === '/ofertas'
                    ? 'bg-green-700 text-white'
                    : 'hover:text-green-200'
                }`}
              >
                Ofertas
              </Link>
              <Link
                href="/conta"
                className={`px-3 py-2 rounded-md ${
                  pathname === '/conta'
                    ? 'bg-green-700 text-white'
                    : 'hover:text-green-200'
                }`}
              >
                Minha Conta
              </Link>
              <Link
                href="/carrinho"
                className={`px-3 py-2 rounded-md ${
                  pathname === '/carrinho' || pathname === '/checkout'
                    ? 'bg-green-700 text-white'
                    : 'hover:text-green-200'
                }`}
              >
                Carrinho ({totalItems})
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
