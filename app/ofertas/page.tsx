'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/data'
import { Tag, TrendingDown, Clock, Flame } from 'lucide-react'

export default function OfertasPage() {
  const [sortBy, setSortBy] = useState<string>('discount-desc')
  
  // Filter only products with discounts
  const discountedProducts = products.filter(product => product.discount && product.discount > 0)
  
  const sortedProducts = [...discountedProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount-desc':
        return (b.discount || 0) - (a.discount || 0)
      case 'discount-asc':
        return (a.discount || 0) - (b.discount || 0)
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const totalSavings = discountedProducts.reduce((acc, product) => {
    return acc + (product.price * (product.discount || 0) / 100)
  }, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 items-center gap-3">
              <Flame className="h-10 w-10" />
              Ofertas Imperdíveis
            </h1>
            <p className="text-xl opacity-90">
              Economize em produtos frescos e selecionados!
            </p>
          </div>
        </div>
        <div className="mt-5 flex">
          <p className="text-3xl font-bold">{discountedProducts.length}</p>
          <p className="text-sm ml-5 mt-2 opacity-90">Produtos em oferta</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                Até {Math.max(...discountedProducts.map(p => p.discount || 0))}%
              </p>
              <p className="text-sm text-gray-600">Maior desconto</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">Hoje</p>
              <p className="text-sm text-gray-600">Ofertas válidas</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-2">
            <Tag className="h-8 w-8 text-red-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totalSavings.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">Total em descontos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Filtrar Ofertas</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-600"
              >
                <option value="discount-desc">Maior desconto</option>
                <option value="discount-asc">Menor desconto</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="name">Nome</option>
              </select>
            </div>

            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-sm font-semibold text-red-800 mb-1">
                🔥 Dica do dia
              </p>
              <p className="text-xs text-red-700">
                Compras acima de R$ 50 têm frete grátis!
              </p>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-100">
              {sortedProducts.length} ofertas encontradas
            </p>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Não há ofertas disponíveis no momento.
              </p>
              <p className="text-gray-400 mt-2">
                Volte em breve para conferir novas promoções!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}