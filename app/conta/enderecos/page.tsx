'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  MapPin,
  Plus,
  Edit2,
  Trash2,
  Home,
  Building,
} from 'lucide-react'

interface Address {
  id: number
  type: 'home' | 'work' | 'other'
  label: string
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  isDefault: boolean
}

export default function EnderecosPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      type: 'home',
      label: 'Casa',
      cep: '45880-000',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apto 45',
      neighborhood: 'Centro',
      city: 'Camacan',
      isDefault: true,
    },
    {
      id: 2,
      type: 'work',
      label: 'Trabalho',
      cep: '45880-100',
      street: 'Av. Principal',
      number: '456',
      complement: 'Sala 10',
      neighborhood: 'Comercial',
      city: 'Camacan',
      isDefault: false,
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    type: 'home' as 'home' | 'work' | 'other',
    label: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: 'Camacan',
  })

  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este endereço?')) {
      setAddresses((prev) => prev.filter((addr) => addr.id !== id))
    }
  }

  const handleSetDefault = (id: number) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    )
  }

  const handleEdit = (address: Address) => {
    setEditingId(address.id)
    setFormData({
      type: address.type,
      label: address.label,
      cep: address.cep,
      street: address.street,
      number: address.number,
      complement: address.complement || '',
      neighborhood: address.neighborhood,
      city: address.city,
    })
    setShowAddForm(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingId ? { ...addr, ...formData } : addr
        )
      )
    } else {
      const newAddress: Address = {
        id: addresses.length + 1,
        ...formData,
        isDefault: addresses.length === 0,
      }
      setAddresses((prev) => [...prev, newAddress])
    }

    setShowAddForm(false)
    setEditingId(null)
    setFormData({
      type: 'home',
      label: '',
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: 'Camacan',
    })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'home':
        return <Home className="h-5 w-5" />
      case 'work':
        return <Building className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/conta"
        className="inline-flex items-center text-gray-200 hover:text-gray-100 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para Minha Conta
      </Link>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Meus Endereços</h1>
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            Adicionar endereço
          </button>
        )}
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? 'Editar Endereço' : 'Novo Endereço'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de endereço
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                >
                  <option value="home">Casa</option>
                  <option value="work">Trabalho</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Identificação *
                </label>
                <input
                  type="text"
                  name="label"
                  value={formData.label}
                  onChange={handleInputChange}
                  placeholder="Ex: Casa da praia"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CEP *
                </label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                  placeholder="00000-000"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                >
                  <option value="Camacan">Camacan</option>
                  <option value="Pau-Brasil">Pau-Brasil</option>
                  <option value="São João do Panelinha">
                    São João do Panelinha
                  </option>
                  <option value="Santa Luzia">Santa Luzia</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Endereço *
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                placeholder="Rua, Avenida, etc."
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número *
                </label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complement"
                  value={formData.complement}
                  onChange={handleInputChange}
                  placeholder="Apto, Sala, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bairro *
                </label>
                <input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                {editingId ? 'Salvar alterações' : 'Adicionar endereço'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false)
                  setEditingId(null)
                }}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-green-600">{getIcon(address.type)}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {address.label}
                  </h3>
                  {address.isDefault && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Padrão
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(address)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(address.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>
                {address.street}, {address.number}
              </p>
              {address.complement && <p>{address.complement}</p>}
              <p>{address.neighborhood}</p>
              <p>
                {address.city} - {address.cep}
              </p>
            </div>

            {!address.isDefault && (
              <button
                onClick={() => handleSetDefault(address.id)}
                className="mt-4 text-sm text-green-600 hover:text-green-700"
              >
                Definir como padrão
              </button>
            )}
          </div>
        ))}
      </div>

      {addresses.length === 0 && !showAddForm && (
        <div className="text-center py-12">
          <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Nenhum endereço cadastrado
          </h2>
          <p className="text-gray-600 mb-4">
            Adicione um endereço para facilitar suas entregas.
          </p>
        </div>
      )}
    </div>
  )
}
