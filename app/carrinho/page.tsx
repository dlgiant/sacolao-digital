'use client'

import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/lib/utils'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart()
  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
          <p className="text-gray-600 mb-8">
            Adicione produtos para começar suas compras
          </p>
          <Link
            href="/produtos"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Meu Carrinho</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Produtos ({items.length})
              </h2>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Limpar carrinho
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item) => {
                const discountedPrice = item.product.discount
                  ? item.product.price * (1 - item.product.discount / 100)
                  : item.product.price

                return (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-4 pb-4 border-b last:border-b-0"
                  >
                    <div className="h-20 w-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                      [Imagem]
                    </div>

                    <div className="flex-1">
                      <Link
                        href={`/produto/${item.product.id}`}
                        className="font-semibold hover:text-green-600 text-gray-600"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-600">
                        {formatCurrency(discountedPrice)}/{item.product.unit}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="h-4 w-4 text-gray-700" />
                      </button>
                      <span className="min-w-[40px] text-center text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="h-4 w-4 text-gray-700" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-gray-600">
                        {formatCurrency(discountedPrice * item.quantity)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Resumo do Pedido
            </h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Entrega</span>
                <span className="text-green-600">Grátis</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center"
            >
              Finalizar Compra
            </Link>

            <Link
              href="/produtos"
              className="w-full mt-3 text-green-600 py-2 text-center block hover:text-green-700"
            >
              Continuar comprando
            </Link>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-yellow-800">
              <strong>Entrega grátis</strong> para compras acima de R$ 50,00
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
