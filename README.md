# SpecFlow

> Para as ideias que você ainda não está pronto pra construir — mas já quer documentar.

Sabe aquele sideproject que vive na sua cabeça? Aquele que você tem uma visão clara de como deveria funcionar, mas não tem tempo (nem energia) pra sentar e pensar em tudo de uma vez?

O SpecFlow nasceu disso. A ideia é simples: ao invés de deixar a coisa apodrecer num bloco de notas ou — pior — só na memória, você vai registrando os pedaços à medida que surgem. Uma ideia de fluxo aqui, uma decisão de stack ali, uma regra de negócio que você não quer esquecer. Sem pressão pra ter o projeto completo antes de começar a documentar.

Quando o momento de construir chegar, você não vai começar do zero. Vai ter um contexto rico, estruturado, pronto — e se for usar IA pra ajudar no código, esse contexto vira um Markdown que você cola direto no prompt.

---

## A filosofia por trás

A maioria das ferramentas de documentação te força a pensar de forma linear e completa. O SpecFlow funciona ao contrário: você documenta *a conta-gotas*, em pequenos aspectos, sem precisar ter o todo na cabeça.

Cada card é um pedaço autônomo de pensamento — pode ser um requisito funcional, uma decisão técnica, uma regra de negócio, uma ideia de UX. Você cria quando a ideia aparece, edita quando ela amadurece, apaga quando descarta. Com o tempo, esses fragmentos formam um documento coeso.

E a qualidade do que uma IA gera é diretamente proporcional ao contexto que você dá a ela. Um Markdown bem estruturado, com stack declarada, dependências mapeadas e regras de implementação claras, produz resultados muito melhores que um prompt escrito às pressas na hora do aperto.

---

## 🚀 [Abrir o SpecFlow → pauloalfeu.github.io/SpecFlow](https://pauloalfeu.github.io/SpecFlow/)

---

## Como funciona na prática

Surgiu uma ideia → cria um card. A ideia evoluiu → edita. Saiu do escopo → apaga. Quando quiser implementar → exporta o Markdown, cola na IA, recebe código alinhado com tudo que você já pensou.

Cada card pode ter título, descrição livre, regras de implementação, notas e referências, prioridade (alta/média/baixa), tags de categoria e dependências de outros cards. Você pode organizar tudo por projetos — cada um com nome, descrição e stack declarada.

---

## O que tem dentro

**Cards** — a unidade básica. Título, descrição, regras de implementação, notas, prioridade, tags, projeto(s) e dependências entre cards com referências cruzadas no export.

**Projetos** — agrupe cards por projeto, com descrição e stack declarada (ex: `Next.js, Supabase, Tailwind`). A stack vai pro topo do Markdown como contexto global pra IA.

**Tags** — 23 categorias nativas cobrindo os casos mais comuns (`MVP` · `Req. Funcional` · `Back-end` · `API` · `Auth` · `Banco de Dados` · `UI` · `UX` · `Infra` · `Deploy` · `Testes` · `Segurança` · `Performance` · `Mobile` e mais), além de tags personalizadas com cor à sua escolha.

**Exportação Markdown** — gera um documento com índice automático, agrupamento por categoria, referências cruzadas e contexto do projeto no topo. Copia ou baixa como `.md`.

**Backup portável** — exporte tudo como `.json` e importe em outro dispositivo. Aceita múltiplos arquivos de uma vez e mescla sem duplicatas.

**Mobile-friendly** — sidebar vira menu drawer no celular. Pode instalar como PWA e usar offline.

---

## Dados e privacidade

Tudo fica no `localStorage` do seu navegador. Sem servidor, sem conta, sem nuvem. O app funciona offline depois da primeira visita.

Por isso os dados são por dispositivo — use o backup `.json` pra levar de um lugar pro outro.

> Limpar os dados do browser apaga tudo. Faça backup com frequência.

---

## Instalar como app (PWA)

No Chrome ou Safari mobile, ao abrir o link aparece a opção de adicionar à tela inicial. O app abre em tela cheia, sem barra do navegador, como se fosse nativo.

---

## Atalhos

| Tecla | Ação |
|-------|------|
| `N` | Novo card |
| `Esc` | Fecha o modal |

---

> **Nota técnica:** um `index.html` + `manifest.json` + `sw.js` + dois ícones. HTML, CSS e JS vanilla. Sem framework, sem build, sem dependência local nenhuma.
