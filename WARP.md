# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Sacolão Digital** is a Brazilian e-commerce platform for fresh produce (fruits, vegetables, and legumes) with rapid delivery. Built with Next.js 15 and TypeScript, deployed on Vercel with Brazilian-specific payment methods and localization.

## Development Commands

### Core Commands
```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Deployment Commands
```bash
# Deploy to Vercel (production)
vercel --prod

# Deploy to preview
vercel

# Link local project to Vercel
vercel link
```

## Architecture & Technology Stack

### Technologies
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety with strict mode
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vercel** - Hosting platform (region: gru1 - São Paulo)

### Directory Structure
```
/app                 # Next.js App Router pages
  /carrinho         # Shopping cart page
  /checkout         # Checkout flow
  /conta            # User account pages
  /ofertas          # Deals/offers page
  /produto/[id]     # Dynamic product details
  /produtos         # Product listing with filters
  layout.tsx        # Root layout with CartProvider
  page.tsx          # Homepage

/components         # Reusable UI components
  CategoryCard.tsx  # Category display card
  Footer.tsx        # Site footer
  Header.tsx        # Navigation header with cart
  Logo.tsx          # Brand logo component
  ProductCard.tsx   # Product display card

/contexts           # React Context providers
  CartContext.tsx   # Shopping cart state management

/lib               # Utilities and data
  data.ts          # Mock product/category data
  utils.ts         # Helper functions (cn, formatCurrency)

/types             # TypeScript definitions
  index.ts         # Product, Category, CartItem interfaces
```

## Key Patterns & Data Models

### TypeScript Interfaces
```typescript
// Product model
interface Product {
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

// Cart item model
interface CartItem {
  product: Product
  quantity: number
}
```

### State Management
- **Cart State**: React Context API (`CartContext`) with localStorage persistence
- **Client Components**: Use `'use client'` directive for interactive features
- **Server Components**: Default for pages, data fetching

### Styling Patterns
- **Tailwind CSS**: Utility-first approach
- **cn() utility**: Merge class names with conflict resolution
- **Component variants**: Using `class-variance-authority`

### Path Aliases
- `@/*` maps to project root (configured in tsconfig.json)

## Important Configurations

### TypeScript Settings
- **Strict mode**: Enabled for type safety
- **Module resolution**: Bundler mode for Next.js
- **JSX**: Preserve for Next.js compilation
- **Path aliases**: `@/` prefix for imports

### Next.js Configuration
- **App Router**: Modern routing system
- **Turbopack**: Fast development builds (`--turbopack` flag)
- **Server Components**: Default, use `'use client'` for interactivity
- **Dynamic Routes**: `[id]` pattern for parameters

### Vercel Deployment
- **Region**: gru1 (São Paulo, Brazil)
- **Function Duration**: 10 seconds max
- **Framework**: Automatically detected as Next.js
- **Build Command**: `npm run build`

### Brazilian Localization
- **Currency**: BRL (Brazilian Real) via `formatCurrency()`
- **Locale**: pt-BR for number/date formatting
- **Payment Methods**: PIX, Credit Card, Boleto
- **Units**: kg, un (unidade), dz (dúzia), pacote, bandeja

## Common Development Tasks

### Adding a New Product Category
1. Update `/lib/data.ts` with new category data
2. Add category to Product interface if needed
3. Update filtering logic in `/app/produtos/page.tsx`

### Modifying Cart Behavior
1. Edit `/contexts/CartContext.tsx` for state logic
2. Update cart display in `/app/carrinho/page.tsx`
3. Adjust header cart indicator in `/components/Header.tsx`

### Creating New Pages
1. Create folder in `/app` directory
2. Add `page.tsx` file with default export
3. Use layout.tsx for shared layouts
4. Client components need `'use client'` directive

### Styling Components
1. Use Tailwind CSS classes directly
2. For conditional styles, use `cn()` utility:
   ```typescript
   cn("base-class", condition && "conditional-class")
   ```
3. Responsive design: `sm:`, `md:`, `lg:` prefixes

### Working with Mock Data
- Product/category data in `/lib/data.ts`
- Replace with API calls for production
- Maintain TypeScript interfaces in `/types/index.ts`

## URL Structure
- `/` - Homepage with featured products
- `/produtos` - All products with filters
- `/produto/[id]` - Individual product page
- `/carrinho` - Shopping cart
- `/checkout` - Purchase flow
- `/ofertas` - Special deals
- `/conta/*` - User account sections

## Testing Approach
Currently no test framework configured. When adding tests:
- Consider Jest + React Testing Library for unit tests
- Playwright for E2E testing
- Test cart functionality and checkout flow

## Environment Variables
Create `.env.local` for local development:
```env
# Future API integration
NEXT_PUBLIC_API_URL=https://api.sacolao.digital
```

## Performance Considerations
- Images: Use next/image for optimization
- Fonts: System fonts via Tailwind
- Code splitting: Automatic with App Router
- Static generation: Where possible for better performance
