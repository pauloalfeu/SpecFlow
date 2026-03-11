# SpecFlow

> Cadastre, organize e exporte especificações de projetos como artefatos prontos para uso com IA geradora de código.

---

## O que é

SpecFlow é uma ferramenta pessoal de gestão de especificações técnicas, pensada para quem desenvolve projetos de software e quer documentar ideias, requisitos e decisões de forma incremental — sem fricção, sem servidor, sem banco de dados.

A ideia central é simples: você cadastra **cards de especificação** ao longo do desenvolvimento, polindo cada um conforme o projeto evolui, e quando precisar gerar código com uma IA (ChatGPT, Claude, Gemini, etc.), exporta tudo em um único arquivo **Markdown estruturado** — organizado, indexado e pronto para ser colado no contexto da IA.

---

## Intenção e filosofia

SpecFlow não é um gestor de tarefas, não é um wiki e não é um editor de documentos. É uma ferramenta de **pensamento estruturado para developers** que usam IA como copiloto de código.

A premissa é que a qualidade do código gerado por uma IA é diretamente proporcional à qualidade do contexto que você fornece. Um Markdown bem estruturado, com stack declarada, dependências entre componentes mapeadas e regras de implementação claras, produz resultados dramaticamente melhores do que um prompt vago.

O fluxo de uso típico é:

1. Você tem uma ideia ou decisão técnica → cria um card
2. A ideia evolui → edita o card
3. Decidiu que não faz parte do escopo → apaga
4. Hora de codar → exporta o Markdown, cola na IA, recebe código alinhado com as suas specs

O SpecFlow é a ponte entre "tenho uma ideia na cabeça" e "tenho um documento que a IA consegue usar".

---

## 🚀 [Acessar o SpecFlow → pauloalfeu.github.io/SpecFlow](https://pauloalfeu.github.io/SpecFlow/)

---

## Por que existe

Documentar um MVP do zero é tedioso. Mas passar um contexto vago para uma IA e esperar código preciso é frustrante. O SpecFlow resolve esse meio-termo: ele te força a pensar e registrar as especificações em pequenos pedaços reutilizáveis (os cards), e depois monta o documento completo automaticamente, na ordem certa, com o contexto certo.

---

## Funcionalidades

### Cards de especificação
Cada card tem os seguintes campos:

- **Título** — identificador curto e direto
- **Projeto(s)** — um card pode pertencer a múltiplos projetos simultaneamente
- **Tags / Categorias** — seleção múltipla entre 23 categorias nativas (veja abaixo) + tags personalizadas
- **Descrição Geral e Conteúdo** — o corpo da especificação, com suporte a Markdown
- **Regras de Implementação** — restrições, comportamentos esperados, checklist
- **Depende de** — vincula o card a outros cards dos quais ele depende; gera referências cruzadas no Markdown exportado
- **Prioridade** — Alta, Média ou Baixa
- **Notas / Referências** — links, contexto adicional, referências externas

### Tags nativas (23)
`Req. Funcional` · `Req. Não-Funcional` · `UI / Interface` · `UX / Experiência` · `Front-end` · `Back-end` · `Banco de Dados` · `API / Endpoint` · `Autenticação` · `Regra de Negócio` · `Tecnologia` · `MVP / Escopo` · `Infraestrutura` · `Testes / QA` · `Performance` · `Segurança` · `Mobile` · `Integrações` · `Dados / Analytics` · `Dev Experience` · `Deploy / CI/CD` · `Documentação` · `Misc / Outros`

### Tags personalizadas
Crie suas próprias tags com nome e cor escolhida. O sistema verifica duplicatas antes de criar. Tags personalizadas ficam disponíveis em todos os cards e são salvas junto com os dados.

### Projetos
Cada projeto pode ter:
- Nome
- Descrição geral
- Stack principal (ex: `Django 4.2, PostgreSQL, React, Celery`)

A stack aparece no topo do Markdown exportado como contexto global para a IA. Um card pode pertencer a mais de um projeto, o que permite criar especificações genéricas reaproveitáveis (ex: "Autenticação com JWT") e associá-las a múltiplos projetos.

### Navegação e filtros
- Sidebar com acesso rápido a todos os cards ou por projeto
- Filtro por tags na barra superior (mostra apenas as tags presentes nos cards visíveis)
- Busca por texto em título, descrição e notas
- Ordenação por mais recente, mais antigo ou alfabética

### Exportação Markdown
O arquivo `.md` gerado é estruturado para maximizar a utilidade com IAs geradoras de código:

- **Seção de Contexto do Projeto** — nome, descrição e stack no topo
- **Índice automático** com âncoras e contagem de cards por seção
- **Agrupamento por tag primária** em ordem lógica (MVP → Regras de Negócio → RF → RNF → Front-end → Back-end → ...)
- **Ordenação por conectividade** — cards com mais tags em comum ficam próximos dentro de cada seção
- **Referências cruzadas** de dependências entre cards (`Depende de: [Nome do Card]`)
- **Toggle de datas** — inclua ou omita metadados de criação conforme necessidade
- **Filtro por projeto** — exporte só o que é relevante para um projeto específico
- **Copiar para área de transferência** ou **baixar como arquivo `.md`**

---

## Persistência

Todos os dados (cards, projetos, tags personalizadas) são salvos no `localStorage` do navegador. Não há backend, não há conta, não há nuvem. Isso significa:

- Funciona 100% offline após o carregamento inicial
- Ideal para hospedar no GitHub Pages sem nenhuma infraestrutura
- Os dados ficam no dispositivo/navegador onde foram criados

> **Atenção:** limpar os dados do navegador apaga tudo. Para backup, exporte o Markdown periodicamente.

---

## Atalhos de teclado

| Tecla | Ação |
|-------|------|
| `N` | Novo card (quando nenhum input está focado) |
| `Esc` | Fecha o modal aberto |

---

> **Disclaimer técnico:** o SpecFlow é intencionalmente um único arquivo `index.html` sem dependências locais, sem frameworks e sem build step — HTML, CSS e JavaScript vanilla, com fontes via Google Fonts e persistência via `localStorage`. Toda a lógica, interface e exportação vivem em menos de 2.500 linhas de código num arquivo só.


> Cadastre, organize e exporte especificações de projetos como artefatos prontos para uso com IA geradora de código.

---

## O que é

SpecFlow é uma ferramenta pessoal de gestão de especificações técnicas, pensada para quem desenvolve projetos de software e quer documentar ideias, requisitos e decisões de forma incremental — sem fricção, sem servidor, sem banco de dados.

A ideia central é simples: você cadastra **cards de especificação** ao longo do desenvolvimento, polindo cada um conforme o projeto evolui, e quando precisar gerar código com uma IA (ChatGPT, Claude, Gemini, etc.), exporta tudo em um único arquivo **Markdown estruturado** — organizado, indexado e pronto para ser colado no contexto da IA.

---

## Por que existe

Documentar um MVP do zero é tedioso. Mas passar um contexto vago para uma IA e esperar código preciso é frustrante. O SpecFlow resolve esse meio-termo: ele te força a pensar e registrar as especificações em pequenos pedaços reutilizáveis (os cards), e depois monta o documento completo automaticamente, na ordem certa, com o contexto certo.

O fluxo de uso típico é:

1. Você tem uma ideia ou decisão técnica → cria um card
2. A ideia evolui → edita o card
3. Decidiu que não faz parte do escopo → apaga
4. Hora de codar → exporta o Markdown, cola na IA, recebe código alinhado com as suas specs

---

## Funcionalidades

### Cards de especificação
Cada card tem os seguintes campos:

- **Título** — identificador curto e direto
- **Projeto(s)** — um card pode pertencer a múltiplos projetos simultaneamente
- **Tags / Categorias** — seleção múltipla entre 23 categorias nativas (veja abaixo) + tags personalizadas
- **Descrição Geral e Conteúdo** — o corpo da especificação, com suporte a Markdown
- **Regras de Implementação** — restrições, comportamentos esperados, checklist
- **Depende de** — vincula o card a outros cards dos quais ele depende; gera referências cruzadas no Markdown exportado
- **Prioridade** — Alta, Média ou Baixa
- **Notas / Referências** — links, contexto adicional, referências externas

### Tags nativas (23)
`Req. Funcional` · `Req. Não-Funcional` · `UI / Interface` · `UX / Experiência` · `Front-end` · `Back-end` · `Banco de Dados` · `API / Endpoint` · `Autenticação` · `Regra de Negócio` · `Tecnologia` · `MVP / Escopo` · `Infraestrutura` · `Testes / QA` · `Performance` · `Segurança` · `Mobile` · `Integrações` · `Dados / Analytics` · `Dev Experience` · `Deploy / CI/CD` · `Documentação` · `Misc / Outros`

### Tags personalizadas
Crie suas próprias tags com nome e cor escolhida. O sistema verifica duplicatas antes de criar. Tags personalizadas ficam disponíveis em todos os cards e são salvas junto com os dados.

### Projetos
Cada projeto pode ter:
- Nome
- Descrição geral
- Stack principal (ex: `Django 4.2, PostgreSQL, React, Celery`)

A stack aparece no topo do Markdown exportado como contexto global para a IA. Um card pode pertencer a mais de um projeto, o que permite criar especificações genéricas reaproveitáveis (ex: "Autenticação com JWT") e associá-las a múltiplos projetos.

### Navegação e filtros
- Sidebar com acesso rápido a todos os cards ou por projeto
- Filtro por tags na barra superior (mostra apenas as tags presentes nos cards visíveis)
- Busca por texto em título, descrição e notas
- Ordenação por mais recente, mais antigo ou alfabética

### Exportação Markdown
O arquivo `.md` gerado é estruturado para maximizar a utilidade com IAs geradoras de código:

- **Seção de Contexto do Projeto** — nome, descrição e stack no topo
- **Índice automático** com âncoras e contagem de cards por seção
- **Agrupamento por tag primária** em ordem lógica (MVP → Regras de Negócio → RF → RNF → Front-end → Back-end → ...)
- **Ordenação por conectividade** — cards com mais tags em comum ficam próximos dentro de cada seção
- **Referências cruzadas** de dependências entre cards (`Depende de: [Nome do Card]`)
- **Toggle de datas** — inclua ou omita metadados de criação conforme necessidade
- **Filtro por projeto** — exporte só o que é relevante para um projeto específico
- **Copiar para área de transferência** ou **baixar como arquivo `.md`**

---

## Persistência

Todos os dados (cards, projetos, tags personalizadas) são salvos no `localStorage` do navegador. Não há backend, não há conta, não há nuvem. Isso significa:

- Funciona 100% offline após o carregamento inicial
- Ideal para hospedar no GitHub Pages sem nenhuma infraestrutura
- Os dados ficam no dispositivo/navegador onde foram criados

> **Atenção:** limpar os dados do navegador apaga tudo. Para backup, exporte o Markdown periodicamente ou salve o `localStorage` manualmente se necessário.

---

## Como usar

### GitHub Pages (recomendado)

1. Faça um fork deste repositório ou crie um novo
2. Suba o arquivo `index.html` na raiz
3. Vá em **Settings → Pages** e ative para a branch `main`
4. Acesse pelo link gerado pelo GitHub Pages

### Local

Basta abrir o `index.html` diretamente no navegador. Nenhuma dependência, nenhum build.

---

## Atalhos de teclado

| Tecla | Ação |
|-------|------|
| `N` | Novo card (quando nenhum input está focado) |
| `Esc` | Fecha o modal aberto |
