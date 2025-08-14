'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
  Edit2,
  Save,
  X,
} from 'lucide-react'

export default function ContaPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    cpf: '123.456.789-00',
    birthDate: '1990-01-01',
    address: 'Rua das Flores, 123',
    complement: 'Apto 45',
    neighborhood: 'Centro',
    city: 'Camacan',
    cep: '45880-000',
  })

  const [editedData, setEditedData] = useState(userData)

  const handleEdit = () => {
    setIsEditing(true)
    setEditedData(userData)
  }

  const handleSave = () => {
    setUserData(editedData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedData(userData)
    setIsEditing(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    })
  }

  const menuItems = [
    { icon: Package, label: 'Meus Pedidos', href: '/conta/pedidos', count: 3 },
    { icon: Heart, label: 'Favoritos', href: '/conta/favoritos', count: 12 },
    { icon: MapPin, label: 'Endereços', href: '/conta/enderecos' },
    { icon: Settings, label: 'Configurações', href: '/conta/configuracoes' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Minha Conta</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {userData.name}
                </h2>
                <p className="text-sm text-gray-600">{userData.email}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.count && (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {item.count}
                      </span>
                    )}
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </Link>
              ))}

              <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors w-full text-left text-red-600">
                <LogOut className="h-5 w-5" />
                <span>Sair</span>
              </button>
            </nav>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">
              Programa de Fidelidade
            </h3>
            <p className="text-sm text-green-700 mb-4">
              Você tem <span className="font-bold">250 pontos</span>
            </p>
            <div className="w-full bg-green-200 rounded-full h-2 mb-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: '25%' }}
              ></div>
            </div>
            <p className="text-xs text-green-600">
              750 pontos para o próximo benefício
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Dados Pessoais
              </h2>
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 text-green-600 hover:text-green-700"
                >
                  <Edit2 className="h-4 w-4" />
                  Editar
                </button>
              ) : (
                <div className="absolute top-0 right-0 flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    <Save className="h-4 w-4" />
                    Salvar
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                  >
                    <X className="h-4 w-4" />
                    Cancelar
                  </button>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CPF
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="cpf"
                    value={editedData.cpf}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.cpf}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={editedData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Nascimento
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    name="birthDate"
                    value={editedData.birthDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">
                    {new Date(userData.birthDate).toLocaleDateString('pt-BR')}
                  </p>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
              Endereço Principal
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CEP
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="cep"
                    value={editedData.cep}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.cep}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade
                </label>
                {isEditing ? (
                  <select
                    name="city"
                    value={editedData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  >
                    <option value="Camacan">Camacan</option>
                    <option value="Pau-Brasil">Pau-Brasil</option>
                    <option value="São João do Panelinha">
                      São João do Panelinha
                    </option>
                    <option value="Santa Luzia">Santa Luzia</option>
                  </select>
                ) : (
                  <p className="text-gray-900 py-2">{userData.city}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editedData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.address}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Complemento
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="complement"
                    value={editedData.complement}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.complement}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bairro
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="neighborhood"
                    value={editedData.neighborhood}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{userData.neighborhood}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Package className="h-8 w-8 text-green-600 mb-3" />
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-sm text-gray-600">Pedidos realizados</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Heart className="h-8 w-8 text-red-600 mb-3" />
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">Produtos favoritos</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <MapPin className="h-8 w-8 text-blue-600 mb-3" />
              <p className="text-2xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-600">Endereços salvos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
