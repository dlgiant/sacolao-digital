'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/data'
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/lib/utils'

export default function FavoritosPage() {
  // Mock favorite products - in a real app, this would come from a context or API
  const [favoriteIds, setFavoriteIds] = useState<number[]>([
    1, 3, 5, 8, 10, 12, 15, 18, 20, 22, 24, 25,
  ])
  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  )
  const { addToCart } = useCart()

  const removeFavorite = (productId: number) => {
    setFavoriteIds((prev) => prev.filter((id) => id !== productId))
  }

  const addAllToCart = () => {
    favoriteProducts.forEach((product) => {
      addToCart(product)
    })
    alert('Todos os produtos foram adicionados ao carrinho!')
  }

  const totalValue = favoriteProducts.reduce((acc, product) => {
    const price = product.discount
      ? product.price * (1 - product.discount / 100)
      : product.price
    return acc + price
  }, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/conta"
        className="inline-flex items-center text-gray-200 hover:text-gray-100 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para Minha Conta
      </Link>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold">Meus Favoritos</h1>
        {favoriteProducts.length > 0 && (
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={addAllToCart}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <ShoppingCart className="h-4 w-4" />
              Adicionar todos ao carrinho
            </button>
            <button
              onClick={() => setFavoriteIds([])}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4" />
              Limpar lista
            </button>
          </div>
        )}
      </div>

      {favoriteProducts.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600">Total de produtos</p>
              <p className="text-2xl font-bold text-gray-900">
                {favoriteProducts.length}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Valor total</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(totalValue)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Economia em ofertas</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(
                  favoriteProducts.reduce((acc, product) => {
                    return (
                      acc +
                      (product.discount
                        ? (product.price * product.discount) / 100
                        : 0)
                    )
                  }, 0)
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="relative">
              <button
                onClick={() => removeFavorite(product.id)}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-red-50"
              >
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
              </button>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Nenhum produto favorito
          </h2>
          <p className="text-gray-600 mb-4">
            Adicione produtos aos seus favoritos para acompanhar os preços.
          </p>
          <Link
            href="/produtos"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Explorar produtos
          </Link>
        </div>
      )}
    </div>
  )
}
