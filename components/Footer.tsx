import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Super Sacolão</h3>
            <p className="text-gray-400">
              Produtos frescos e de qualidade entregues na sua casa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-gray-400 hover:text-white"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/ofertas"
                  className="text-gray-400 hover:text-white"
                >
                  Ofertas
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-400 hover:text-white"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (73) 3283-1627
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contato@sacolao.digital
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Camacan, BA
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Seg-Sáb: 8h-20h
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Dom: 8h-17h
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Formas de Pagamento</h4>
            <p className="text-gray-400 mb-2">Aceitamos:</p>
            <ul className="text-gray-400 space-y-1">
              <li>• Pix</li>
              <li>• Cartão de Crédito</li>
              <li>• Cartão de Débito</li>
              <li>• Boleto</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Super Sacolão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
