'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Plus, Minus, ShoppingCart, Heart } from 'lucide-react'
import { products } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { useCart } from '@/contexts/CartContext'
import ProductCard from '@/components/ProductCard'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Link
            href="/produtos"
            className="text-green-200 hover:text-green-100"
          >
            Voltar para produtos
          </Link>
        </div>
      </div>
    )
  }

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    router.push('/carrinho')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/produtos"
        className="inline-flex items-center text-green-200 hover:text-green-100 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para produtos
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <div className="relative bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-lg font-semibold z-10">
                  -{product.discount}%
                </span>
              )}
              <p className="text-gray-400 text-xl">[Imagem do Produto]</p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-700">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              {product.discount && (
                <span className="text-gray-400 line-through text-lg mr-2">
                  {formatCurrency(product.price)}
                </span>
              )}
              <p className="text-3xl font-bold text-green-600">
                {formatCurrency(discountedPrice)}
                <span className="text-base text-gray-500 font-normal">
                  /{product.unit}
                </span>
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Estoque disponível: {product.stock} {product.unit}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Quantidade:</span>
                <div className="flex items-center border rounded-lg border-gray-400">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 rounded transition-colors ml-1"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4 text-gray-600 hover:text-gray-800" />
                  </button>
                  <span className="px-4 py-2 min-w-[60px] text-center text-gray-700">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 rounded transition-colors mr-1"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4 text-gray-600 hover:text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Adicionar ao Carrinho
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 border-t pt-8">
              <h3 className="font-semibold mb-4 text-gray-600">
                Informações do Produto
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Produto fresco e de alta qualidade</li>
                <li>• Selecionado cuidadosamente</li>
                <li>• Entrega em até 2 horas</li>
                <li>• Garantia de satisfação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
