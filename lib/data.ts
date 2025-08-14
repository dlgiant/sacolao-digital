import { Category, Product } from '@/types'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Frutas',
    slug: 'frutas',
    image: '/images/frutas.jpg',
    description: 'Frutas frescas e selecionadas'
  },
  {
    id: '2',
    name: 'Verduras',
    slug: 'verduras',
    image: '/images/verduras.jpg',
    description: 'Verduras orgânicas e convencionais'
  },
  {
    id: '3',
    name: 'Legumes',
    slug: 'legumes',
    image: '/images/legumes.jpg',
    description: 'Legumes frescos do dia'
  },
  {
    id: '4',
    name: 'Temperos',
    slug: 'temperos',
    image: '/images/temperos.jpg',
    description: 'Temperos e ervas frescas'
  },
  {
    id: '5',
    name: 'Ovos e Laticínios',
    slug: 'ovos-laticinios',
    image: '/images/laticinios.jpg',
    description: 'Ovos, leite e derivados'
  },
  {
    id: '6',
    name: 'Mercearia',
    slug: 'mercearia',
    image: '/images/mercearia.jpg',
    description: 'Produtos de mercearia em geral'
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Banana Prata',
    description: 'Banana prata madura e doce',
    price: 5.99,
    image: '/images/banana.jpg',
    category: 'frutas',
    unit: 'kg',
    stock: 100,
    discount: 10
  },
  {
    id: '2',
    name: 'Tomate Italiano',
    description: 'Tomate italiano fresco',
    price: 8.99,
    image: '/images/tomate.jpg',
    category: 'legumes',
    unit: 'kg',
    stock: 50
  },
  {
    id: '3',
    name: 'Alface Americana',
    description: 'Alface americana crocante',
    price: 3.50,
    image: '/images/alface.jpg',
    category: 'verduras',
    unit: 'un',
    stock: 30
  },
  {
    id: '4',
    name: 'Laranja Pera',
    description: 'Laranja pera doce e suculenta',
    price: 4.99,
    image: '/images/laranja.jpg',
    category: 'frutas',
    unit: 'kg',
    stock: 80
  },
  {
    id: '5',
    name: 'Cenoura',
    description: 'Cenoura fresca e crocante',
    price: 6.99,
    image: '/images/cenoura.jpg',
    category: 'legumes',
    unit: 'kg',
    stock: 60
  },
  {
    id: '6',
    name: 'Ovos Caipira',
    description: 'Ovos caipira frescos - Dúzia',
    price: 15.99,
    image: '/images/ovos.jpg',
    category: 'ovos-laticinios',
    unit: 'dz',
    stock: 40
  },
  {
    id: '7',
    name: 'Manjericão Fresco',
    description: 'Manjericão fresco em maço',
    price: 2.99,
    image: '/images/manjericao.jpg',
    category: 'temperos',
    unit: 'un',
    stock: 25
  },
  {
    id: '8',
    name: 'Batata Inglesa',
    description: 'Batata inglesa selecionada',
    price: 5.49,
    image: '/images/batata.jpg',
    category: 'legumes',
    unit: 'kg',
    stock: 90,
    discount: 15
  }
]