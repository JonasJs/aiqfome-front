# aiqfome-front

Clone do aiqfome desenvolvido com foco em boas práticas, performance e acessibilidade.

## 🛠 Tecnologias e Ferramentas

### Core
- **Next.js**: Framework React para SSR, otimização de imagens e roteamento
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade do código
- **TailwindCSS**: Framework CSS para estilização rápida
- **Tailwind Variants**: Gerenciamento de variantes de componentes de forma tipada

### Qualidade de Código
- **ESLint**: Análise estática para manter padrões de código
- **Prettier**: Formatação consistente do código
- **Husky**: Automação de git hooks
- **Lint-staged**: Otimização da execução de linters
- **Commitlint**: Padronização de mensagens de commit

### Testes e Documentação
- **Storybook**: Desenvolvimento e documentação de componentes

### Gerenciamento de Projeto
- **Jira**: Gerenciamento de tarefas e acompanhamento do projeto

## 🎯 Decisões Técnicas

### Arquitetura
- Separação entre resource (chamadas HTTP) e service (regras de negócio)
  - Resource: Responsável apenas pela comunicação com a API
  - Service: Concentra regras de negócio e transformação de dados
- Design System próprio para maior controle e personalização
- Estrutura de pastas por domínio para melhor organização do código

### API e Integração
- Adapter pattern nas chamadas de API
  - Facilita mudanças na integração
  - Permite implementação futura de BFF
- BFF (Backend for Frontend) planejado para:
  - Otimizar dados recebidos pelo front
  - Centralizar transformações de dados
  - Reduzir número de requisições

### Estilização e UX
- Tailwind Variants para:
  - Componentes com múltiplas variações
  - Código mais legível e manutenível
- Design System
  - Desenvolvimento de ícones próprios
  - Padronização de espaçamentos
  - Sistema de tokens consistente

### Controle de Versão
- PRs direto na main para agilizar o desenvolvimento
- Template de PR para padronização
  - Descrição estruturada
  - Checklist de qualidade
  - Integração com Jira
- Branches mantidas após merge para análise
- Planejamento futuro:
  - Branch develop para integrações
  - Branches de release para entregas

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar Storybook
npm run storybook
```

## 📝 Observações

- Adaptações no contrato da API baseadas na análise da plataforma web
- Foco em componentização e reusabilidade
- Design System próprio para maior consistência visual
- Decisões técnicas priorizando:
  - Manutenibilidade do código
  - Performance da aplicação
  - Experiência do usuário
