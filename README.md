# SpecFlow

> Pare de jogar contexto vago pra IA e torcer pro melhor.

SpecFlow é uma ferramenta para quem usa IA pra gerar código e cansou de reexplicar o projeto do zero toda vez. Você documenta as especificações em cards, organiza por projeto e tag, e na hora de codar exporta tudo num Markdown estruturado — pronto pra colar no ChatGPT, Claude, Gemini ou o que vier.

Sem backend. Sem conta. Sem instalação. Funciona direto no browser e pode ser instalado como PWA no celular.

---

## A lógica é simples

1. Teve uma ideia ou decisão técnica → cria um card
2. A coisa evoluiu → edita
3. Saiu do escopo → apaga
4. Hora de codar → exporta o Markdown, cola na IA, recebe código alinhado com as suas specs

A qualidade do que a IA gera é proporcional ao contexto que você dá. O SpecFlow existe pra esse contexto ser bom.

---

## 🚀 [Abrir o SpecFlow → pauloalfeu.github.io/SpecFlow](https://pauloalfeu.github.io/SpecFlow/)

---

## O que tem dentro

**Cards** com título, descrição, regras de implementação, notas, prioridade (alta/média/baixa), tags, projetos e dependências entre cards.

**23 tags nativas** cobrindo os casos mais comuns: `MVP` · `Req. Funcional` · `Req. Não-Funcional` · `Front-end` · `Back-end` · `API` · `Banco de Dados` · `Auth` · `Regra de Negócio` · `UI` · `UX` · `Infra` · `Deploy` · `Testes` · `Segurança` · `Performance` · `Mobile` · `Integrações` · `Dados` · `Tecnologia` · `Dev Experience` · `Documentação` · `Misc` — mais tags personalizadas com cor à sua escolha.

**Projetos** com nome, descrição e stack declarada (ex: `Django 4.2, PostgreSQL, React`). A stack vai direto pro topo do Markdown exportado como contexto pra IA.

**Filtros** por projeto, tag, texto livre e ordenação. A sidebar no desktop vira um menu drawer no mobile.

**Exportação Markdown** com índice automático, agrupamento por categoria, referências cruzadas de dependências e toggle de datas. Copia direto ou baixa como `.md`.

**Backup portável** — exporte seus dados como `.json` e importe em qualquer outro dispositivo. Pode importar múltiplos arquivos de uma vez; o app mescla tudo sem duplicatas (compara por ID e por título).

---

## Dados e offline

Tudo fica no `localStorage` do navegador — sem nuvem, sem servidor. O app funciona 100% offline depois da primeira visita (graças ao Service Worker). Por isso os dados são por dispositivo: use o backup `.json` pra carregar de um lugar pro outro.

> Limpar os dados do browser apaga tudo. Faça backup antes.

---

## Instalação como PWA

No Chrome ou Safari mobile, ao acessar o link aparece a opção "Adicionar à tela inicial". O app abre em tela cheia, sem barra do navegador, como se fosse nativo.

---

## Atalhos

| Tecla | Ação |
|-------|------|
| `N` | Novo card |
| `Esc` | Fecha o modal |

---

> **Nota técnica:** arquivo único `index.html` + `manifest.json` + `sw.js` + dois ícones. HTML, CSS e JS vanilla. Sem framework, sem build, sem dependências locais.
