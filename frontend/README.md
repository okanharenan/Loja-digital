# Digital Store — Front-end

Front-end em React (Vite) reproduzindo o design fornecido: Home, Listagem de Produtos (com filtros) e Página de Produto.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # build de produção (gera a pasta dist/)
npm run preview   # serve a build de produção localmente
```

## Estrutura

```
src/
  components/        # componentes reutilizáveis
    Header/
    Footer/
    Logo/
    Section/
    ProductListing/   # grid de ProductCard
    ProductCard/
    FilterGroup/      # grupo de checkbox/radio da sidebar de filtros
    ProductOptions/   # seletor de tamanho e cor
    BuyBox/           # preço + botão "Comprar" (subcomponentes Price e Cta)
    ProductDetails/   # galeria + bloco de informações do produto
  pages/
    HomePage/
    ProductListingPage/
    ProductViewPage/
  data/
    products.js       # dados mockados (produtos, coleções, filtros, slides)
  assets/
    home/              # fotos do carrossel do hero (8 slides)
    collections/        # imagens dos 3 cards de "Coleções em destaque"
    product/             # galeria (5 imagens grandes + 5 thumbnails) do produto em destaque
    products/             # ilustração SVG placeholder usada no grid genérico
  styles/tokens.css   # variáveis globais de design (cores, espaçamento, etc.)
```

## Rotas

- `/` — Home
- `/produtos` — Listagem de produtos com filtros (aceita `?q=termo` da busca do header)
- `/produto/:id` — Página de produto (atualmente todas exibem o produto mockado em destaque)

## Dados mockados

Todos os dados vêm de `src/data/products.js`. Para conectar a uma API real, troque os arrays/objetos exportados por chamadas (ex.: `fetch`, React Query) mantendo o mesmo formato — os componentes já recebem os dados via props e não dependem da origem.

## Imagens

- **Carrossel da Home** (`heroSlides`): 8 fotos reais com autoplay (5s) e dots clicáveis.
- **Coleções em destaque**: 3 imagens reais (já contêm o texto/badge embutido na própria foto).
- **Galeria de produto**: 5 imagens grandes (`produc-image-*`) + 5 thumbnails (`product-thumb-*`) reais.
- **Ícones de UI** (`src/assets/icons/`): logo (header/footer), redes sociais, carrinho, estrela de avaliação e setas de navegação — todos SVGs reais fornecidos, substituindo os ícones genéricos do lucide-react. O único ícone que ainda vem do lucide-react é a lupa de busca do header (não havia substituto fornecido).
- **Grid de produtos** (Home "Produtos em alta" e Listagem): ainda usando a ilustração placeholder `kswiss-v8.svg`. Pendente: receber as fotos reais de cada produto do grid (tênis/camisas variados) para substituir.

### Observações sobre os arquivos recebidos
Alguns arquivos enviados ficaram faltando no lote (`home-slide-7`, `produc-image-4`, `product-thumb-2`) — para não deixar buracos na galeria/carrossel, reaproveitei temporariamente outra imagem do mesmo conjunto nesses três espaços. Quando os arquivos corretos chegarem, é só substituir o arquivo dentro da pasta de assets correspondente (o nome do import já está preparado).

## Notas de fidelidade ao design

- O segundo grupo de seletor na página de produto foi rotulado "Cor" (paleta de cores), já que o mockup mostra um seletor de cores ali, mesmo com o label original repetindo "Tamanho".
