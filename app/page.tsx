import { ChevronRight, Truck, Shield, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import { products, categories } from '@/lib/data'

export default function Home() {
  const featuredProducts = products.filter((p) => p.discount).slice(0, 4)

  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Produtos Frescos Direto para Sua Casa
            </h1>
            <p className="text-xl mb-8">
              Frutas, verduras e legumes selecionados com carinho. Entrega
              rápida e preços justos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/produtos"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Ver Produtos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/ofertas"
                className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center justify-center"
              >
                Ofertas do Dia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Truck className="h-10 w-10 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-700">Entrega Rápida</h3>
                <p className="text-gray-600 text-sm">Receba em até 2 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="h-10 w-10 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-700">
                  Qualidade Garantida
                </h3>
                <p className="text-gray-600 text-sm">
                  Produtos frescos e selecionados
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="h-10 w-10 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-700">
                  Atendimento 7 Dias
                </h3>
                <p className="text-gray-600 text-sm">
                  Segunda a Sábado, 8h às 20h
                </p>
                <p className="text-gray-600 text-sm">Domingo, 8h às 17h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Categorias</h2>
            <Link
              href="/categorias"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Ver todas
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-600">
              Ofertas Especiais
            </h2>
            <Link
              href="/ofertas"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Ver todas
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Produtos Populares</h2>
            <Link
              href="/produtos"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Cadastre-se e Receba Ofertas Exclusivas
          </h2>
          <p className="text-xl mb-8">
            Seja o primeiro a saber das nossas promoções e novidades
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <div className="flex-1 relative">
              <input
                type="tel"
                placeholder="Digite seu WhatsApp"
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
              />
            </div>
            <button className="bg-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
