'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
} from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

interface Order {
  id: string
  date: string
  status: OrderStatus
  total: number
  items: number
  paymentMethod: string
}

const orders: Order[] = [
  {
    id: 'ORD-2024-001',
    date: '2024-03-15',
    status: 'delivered',
    total: 85.5,
    items: 5,
    paymentMethod: 'PIX',
  },
  {
    id: 'ORD-2024-002',
    date: '2024-03-10',
    status: 'delivered',
    total: 120.0,
    items: 8,
    paymentMethod: 'Cartão de Crédito',
  },
  {
    id: 'ORD-2024-003',
    date: '2024-03-05',
    status: 'processing',
    total: 45.9,
    items: 3,
    paymentMethod: 'Boleto',
  },
]

const statusConfig = {
  pending: {
    label: 'Pendente',
    color: 'text-yellow-600 bg-yellow-100',
    icon: Clock,
  },
  processing: {
    label: 'Processando',
    color: 'text-blue-600 bg-blue-100',
    icon: Package,
  },
  shipped: {
    label: 'Enviado',
    color: 'text-purple-600 bg-purple-100',
    icon: Package,
  },
  delivered: {
    label: 'Entregue',
    color: 'text-green-600 bg-green-100',
    icon: CheckCircle,
  },
  cancelled: {
    label: 'Cancelado',
    color: 'text-red-600 bg-red-100',
    icon: XCircle,
  },
}

export default function PedidosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/conta"
        className="inline-flex items-center text-white hover:text-gray-100 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para Minha Conta
      </Link>

      <h1 className="text-3xl font-bold mb-8">Meus Pedidos</h1>

      <div className="grid gap-6">
        {orders.map((order) => {
          const config = statusConfig[order.status]
          const StatusIcon = config.icon

          return (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {order.id}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Realizado em{' '}
                    {new Date(order.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${config.color} mt-2 md:mt-0`}
                >
                  <StatusIcon className="h-4 w-4" />
                  <span className="text-sm font-medium">{config.label}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {formatCurrency(order.total)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Itens</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {order.items} produtos
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pagamento</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {order.paymentMethod}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <button className="flex items-center gap-2 text-green-600 hover:text-green-700">
                  <Eye className="h-4 w-4" />
                  Ver detalhes
                </button>
                {order.status === 'delivered' && (
                  <button className="text-blue-600 hover:text-blue-700">
                    Comprar novamente
                  </button>
                )}
                {order.status === 'processing' && (
                  <button className="text-red-600 hover:text-red-700">
                    Cancelar pedido
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Nenhum pedido encontrado
          </h2>
          <p className="text-gray-600 mb-4">
            Você ainda não realizou nenhum pedido.
          </p>
          <Link
            href="/produtos"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Começar a comprar
          </Link>
        </div>
      )}
    </div>
  )
}
