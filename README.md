# Sacolão Digital - E-commerce de Hortifrúti

Site de e-commerce brasileiro para venda de frutas, verduras e legumes frescos com entrega rápida.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Vercel** - Hospedagem

## 🌟 Funcionalidades

- ✅ Catálogo de produtos com categorias (Frutas, Verduras, Legumes, etc.)
- ✅ Página de detalhes do produto
- ✅ Carrinho de compras com persistência local
- ✅ Sistema de checkout completo
- ✅ Formas de pagamento brasileiras (PIX, Cartão, Boleto)
- ✅ Design responsivo para mobile
- ✅ Filtros e busca de produtos
- ✅ Sistema de descontos e ofertas

## 🏃‍♂️ Como Executar Localmente

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Abrir no navegador
http://localhost:3000
```

## 📦 Deploy no Vercel

### Opção 1: Deploy via CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login no Vercel
vercel login

# Deploy
vercel --prod
```

### Opção 2: Deploy via GitHub

1. Faça push do código para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Importe o projeto
5. Configure as variáveis de ambiente (se necessário)
6. Clique em "Deploy"

## 🌐 Configuração do Domínio sacolao.digital

Após o deploy no Vercel:

1. **No Vercel Dashboard:**
   - Acesse seu projeto
   - Vá em "Settings" → "Domains"
   - Adicione o domínio `sacolao.digital`
   - Vercel fornecerá os registros DNS necessários

2. **No seu provedor de domínio:**
   - Configure os registros DNS conforme instruções do Vercel:
     - **Opção A (Recomendado):** Adicione um registro A apontando para `76.76.21.21`
     - **Opção B:** Use CNAME apontando para `cname.vercel-dns.com`

3. **Para www:**
   - Adicione também `www.sacolao.digital` no Vercel
   - Configure um registro CNAME de `www` para `cname.vercel-dns.com`

4. **Aguarde propagação DNS** (pode levar até 48h)

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env.local` se precisar adicionar configurações:

```env
# Exemplo para futuras integrações
NEXT_PUBLIC_API_URL=https://api.sacolao.digital
```

## 📱 Páginas Disponíveis

- `/` - Homepage com categorias e produtos em destaque
- `/produtos` - Listagem de todos os produtos com filtros
- `/produto/[id]` - Detalhes do produto
- `/carrinho` - Carrinho de compras
- `/checkout` - Finalização do pedido

## 🎨 Estrutura do Projeto

```
sacolao-digital/
├── app/                  # Páginas e rotas (App Router)
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Homepage
│   ├── produtos/        # Página de produtos
│   ├── produto/[id]/    # Detalhes do produto
│   ├── carrinho/        # Carrinho
│   └── checkout/        # Checkout
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho
│   ├── Footer.tsx       # Rodapé
│   ├── ProductCard.tsx  # Card de produto
│   └── CategoryCard.tsx # Card de categoria
├── contexts/            # Context API
│   └── CartContext.tsx  # Contexto do carrinho
├── lib/                 # Utilitários e dados
│   ├── data.ts         # Dados mockados
│   └── utils.ts        # Funções auxiliares
├── types/              # TypeScript types
│   └── index.ts        # Definições de tipos
└── public/             # Arquivos estáticos
```

## 🛠️ Próximos Passos

Para tornar o projeto pronto para produção:

1. **Integração com Backend:**
   - API para gerenciamento de produtos
   - Sistema de autenticação de usuários
   - Gestão de pedidos e estoque

2. **Pagamentos:**
   - Integração com gateway de pagamento (Mercado Pago, PagSeguro, etc.)
   - Geração de QR Code PIX real
   - Processamento de cartões

3. **Funcionalidades Adicionais:**
   - Sistema de avaliações
   - Lista de favoritos
   - Histórico de pedidos
   - Cupons de desconto
   - Programa de fidelidade

4. **SEO e Performance:**
   - Adicionar meta tags dinâmicas
   - Otimizar imagens com next/image
   - Implementar sitemap.xml
   - Analytics (Google Analytics, Vercel Analytics)

## 📞 Suporte

Para questões sobre o deploy ou configuração do domínio, consulte:
- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do Next.js](https://nextjs.org/docs)