## README em construção

- Tecnologias usadas:
  - NextJS
  - TailwindCSS
  - Typescript
  - Husky
  - Lint-staged
  - Eslint
  - Prettier
  - Commitlint
  - Tawilwind variants



  OBS: Escolhar tomadas
  - Crie um adapter para as chamadas da api, mas dependendo da estrutura poderiamos ter um BFF para que o front possa receber apenas o que ele precisa
  - Montei as request com base no contrato da api que analise olhando a plataforma web
  - Não configurei para deletar as branches depois de serem mergeadas, para que seja possivel olhei minha estrutura.
  - Poderia separar uma branch de develop ou até mesmo fazer branch de release e separar pensando em grupo de tarefas que entregue valor para o lciente, mas pensando em otimizar o tempo do desafio optei por fazer os PR direto na main.
  - Poderia usar o lucide por exmeplo como lib de icons mas preferir fazer do zero para explorar mais do meu conhecimento e possam da uma olhada em como eu organizos pensando em um Design System proprio
  - Fiz pequenas alterações nos espaçamento para que pudessemos patronizar com base no DS que inicirei criar, estou alinhado com o desenvolvimento de pixel perfect mas optei em fazer essas mudanças para evidencias minhas preocupações com padrões de design e implementações de Design System.
  - Olhando a aplicação dei uma olhada no contrato da api e fiz algumas mudanças, por exemplo na listagem da home não vem os paramtros necessarios para a montagem de alguns itens da pagina, mas ao acessa uma rota interna do produto exemplo: (https://www.aiqfome.com/PR/maringa/wanda-salgados) é possivel encontrar o contrato dos itens renderizados mas com o padrão em portugues, então adaptei trazendo alguns parametros para listagem principal, isso reforça que caso não seja possivel trazer essas dados o ideal seria o front centralizar essasr regras em um bff
  - Para contextos menores e componentes usei o taiwind variants para deixar o codigo mais legivel e facil de entender.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
