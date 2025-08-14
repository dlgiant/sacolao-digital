import Link from 'next/link'
import { Category } from '@/types'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categoria/${category.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="h-32 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
          <h3 className="text-white text-xl font-bold">{category.name}</h3>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm">{category.description}</p>
        </div>
      </div>
    </Link>
  )
}