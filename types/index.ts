export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  unit: 'kg' | 'un' | 'dz' | 'pacote' | 'bandeja'
  stock: number
  discount?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export interface CartItem {
  product: Product
  quantity: number
}