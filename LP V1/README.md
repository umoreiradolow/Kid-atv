# Trilha das Letras - LP V1

## GitHub e Vercel

Envie o conteúdo desta pasta (LP V1) para a raiz do repositório. A configuração vercel.json já define instalação com npm ci, build com npm run build e publicação da pasta dist.

Se você enviar a pasta central inteira, configure Root Directory como LP/LP V1 na Vercel. Prefira enviar somente esta pasta: a base de conhecimento e os materiais do produto não fazem parte do site.

## Arquivos necessários

- src/: código React/TypeScript e estilos Tailwind.
- dist/imagens/ e dist/favicon.svg: recursos usados pelo site. Manter no Git, pois o build os utiliza diretamente.
- dist/index.html e dist/styles.css: página estática pronta; atualizados pelo build.
- package.json, package-lock.json e tsconfig.json: dependências e configuração de build.
- vercel.json: configuração de publicação.

## Edição local

Execute npm ci para reinstalar as dependências e npm run build após editar o conteúdo. Para visualizar, execute npm run preview e acesse http://localhost:4173.

A página não contém scripts no navegador. O botão de compra permanece desativado até configuração do checkout.

Referência da configuração: https://vercel.com/docs/project-configuration
