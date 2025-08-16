'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Product } from '@/types'
import { formatCurrency } from '@/lib/utils'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product,
  isFavorite?: boolean,
}

export default function ProductCard({ product, isFavorite = false }: ProductCardProps) {
  const { addToCart } = useCart()
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price

  const handleAddToCart = () => {
    addToCart(product, 1)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/produto/${product.id}`}>
        <div className="relative h-48 bg-gray-200">
          {product.discount && (
            <span className="absolute top-3 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold z-10">
              -{product.discount}%
            </span>
          )}
          {product.discount && (
            <span className={`
              text-gray-400 line-through text-sm absolute top-3 bg-red-200 px-2 py-1 rounded font-semibold z-10
              ${isFavorite ? 'right-14' : 'right-2'}
            `}>
              {formatCurrency(product.price)}
            </span>
          )}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            [Imagem do Produto]
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/produto/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 text-gray-700 hover:text-green-600">
            {product.name}
          </h3>
        </Link>
        <p style={{ height: '40px' }} className="text-gray-600 text-sm mb-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xl font-bold text-green-600">
              {formatCurrency(discountedPrice)}
              <span className="text-sm text-gray-500 font-normal">
                /{product.unit}
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Adicionar ao Carrinho</span>
        </button>
      </div>
    </div>
  )
}
