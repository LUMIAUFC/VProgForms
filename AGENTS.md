# AGENTS.md — Guia para Agentes de IA (VProgForms / iVProg4All)

## 1. Visão Geral do Projeto
O **VProgForms (iVProg4All)** é uma ferramenta web acessível de ensino de algoritmos e introdução à programação para pessoas cegas (via leitores de tela como o NVDA) e videntes, utilizando o **paradigma de programação visual por formulários**.

Em vez de exigir digitação livre de código ou manipulação exclusiva de blocos gráficos por *drag-and-drop*, o usuário constrói a árvore lógica do programa preenchendo formulários estruturados, navegáveis por teclado e atalhos (`Alt + tecla`), que são traduzidos internamente para a linguagem textual do **iVProg** e interpretados pelo motor `vcat`.

---

## 2. Stack Tecnológica e Arquitetura

* **Framework:** Angular 13.3 (`TypeScript ~4.6`)
* **Estilização e UI:** SCSS, Bootstrap 5.1, `@ng-bootstrap/ng-bootstrap` 12, `bootstrap-icons`, `@ng-select/ng-select`
* **Internacionalização (i18n):** `@ngx-translate/core` (`src/assets/i18n/pt.json` e `src/assets/i18n/en.json`)
* **Interpretador de Algoritmos:** `vcat` (`vcat/main.js` injetado via `angular.json`, exposto globalmente como `declare var vcat: any`)
* **Persistência Local:**
  * `localStorage`: armazena o estado atual dos blocos (`components`), idioma (`defaultLang`) e sessão de monitoramento.
  * `IndexedDB` via **Dexie.js** (`src/app/core/database/app-database.ts`): armazena sessões de gravação de atividades (`logs`) e histórico de execuções para exportação em `.txt`.

### Estrutura de Diretórios Principal (`src/app/`)
* `app.component.*`: Container principal, barra de navegação com *skip links*, gerenciamento da lista raiz de `components`, geração do código-fonte iVProg (`runCommands`), integração com `vcat` (`run`) e controle de gravação de logs.
* `components/`:
  * `command-button/`: Menu dropdown e tratador de atalhos (`Alt+1` a `Alt+5`) para inserção de novos blocos no escopo raiz ou aninhado (`mode="block"` vs `mode="inline"`).
  * `variable/`: Declaração e inicialização de variáveis (`INTEGER`, `DOUBLE`, `STRING`, `BOOLEAN`).
  * `operator/`: Atribuição e construção de expressões matemáticas/lógicas.
  * `write/`: Comando de saída (`escreva`).
  * `conditional/`: Estrutura de decisão (`se (...) { ... } senao { ... }`) com suporte a aninhamento recursivo de componentes.
  * `for/`: Estrutura de repetição (`repita_para <var> de <inicio> ate <fim> passo <sinal><valor> { ... }`) com suporte a aninhamento recursivo.
  * `terminal/`: Console acessível para leitura da saída de execução, modal de consentimento e exportação de relatório de atividade.
* `pipes/accessible-math.pipe.ts`: Pipe `accessibleMath` que converte operadores simbólicos (`<-`, `>=`, `*`, `/`, etc.) em HTML acessível (`<span aria-hidden="true">` para videntes + `<span class="sr-only">` para leitores de tela).
* `features/logs/`: Modelos (`Log`, `Execucao`) e serviços (`LogService`, `LogExportService`) para monitoramento de sessões de estudo/avaliação.
* `enums/types.enum.ts`: Enumeração `TypesEnum` (`VARIABLE`, `OPERATOR`, `WRITER`, `CONDITIONAL`, `FOR_CODITIONAL`).

---

## 3. Comandos de Desenvolvimento e Build

* **Servidor de desenvolvimento:** `npm start` (executa `ng serve`)
* **Build de produção:** `npm run build` (executa `ng build --base-href /VProgForms/`, gerando os artefatos no diretório `docs/`)
* **Build contínuo (watch):** `npm run watch`
* **Testes unitários:** `npm test` (executa `ng test` via Karma/Jasmine)

> **Atenção:** A pasta `docs/` contém o build estático para publicação (GitHub Pages). Sempre faça alterações nos arquivos dentro de `src/` e nunca edite diretamente os bundles compilados em `docs/`.

---

## 4. Diretrizes de Código e Boas Práticas (Regras Obrigatórias)

1. **Idioma:** Sempre responda e documente em **português**.
2. **Simplicidade e Foco:** Mantenha a solução simples, direta e restrita ao que foi solicitado. Evite *over-engineering* e *code smells*.
3. **Princípios SOLID:** Mantenha componentes e serviços com responsabilidade única e baixo acoplamento.
4. **Estilo de Programação:**
   * Prefira **programação declarativa** (`map`, `filter`, `reduce`, `some`, `every`, dicionários de configuração) à programação imperativa.
   * Prefira **funções puras** sempre que possível (especialmente para transformação de dados, geração de código, validação de árvore de componentes e formatação de strings).
   * Prefira `const` em vez de `let` e nunca utilize `var`.
   * Prefira *arrow functions* (`() => {}`).
5. **Planejamento:** Quando aplicável em tarefas complexas, utilize o MCP `sequential-thinking` para estruturar o raciocínio antes de alterar o código.

---

## 5. Diretrizes de Acessibilidade (Requisitos Críticos do Domínio)

Como o público-alvo inclui pessoas cegas utilizando leitores de tela (principalmente **NVDA** no Chrome/Brave), toda alteração de interface deve respeitar rigorosamente os seguintes critérios:

1. **Semântica e Rótulos (`aria-label` / `title`):**
   * Todo controle interativo (`<button>`, `<select>`, `<input>`) deve possuir um rótulo claro e contextualizado (ex.: em vez de apenas `"Limpar"` ou `"Remover comandos"`, informar *o que* está sendo limpo ou removido).
   * Ao atualizar textos na interface, sempre adicione as chaves correspondentes nos arquivos de tradução `src/assets/i18n/pt.json` e `src/assets/i18n/en.json`.
2. **Evitar Leitura Duplicada ou Silenciosa no NVDA:**
   * Símbolos puramente visuais ou dicas visuais de atalho (como `<kbd>Alt+1</kbd>` dentro de botões que já possuem `aria-keyshortcuts`) devem ter `aria-hidden="true"`.
   * Textos voltados exclusivamente para leitores de tela devem usar a classe `.sr-only`.
3. **Gerenciamento de Foco e Navegação por Teclado:**
   * Nenhuma funcionalidade pode depender exclusivamente do mouse (como *drag-and-drop* sem equivalente por botões/teclado).
   * Nunca gere atributos `id` duplicados no DOM, especialmente em componentes repetidos dentro de `*ngFor` ou aninhados recursivamente (`app-command-button`, `app-write`, `app-operator`, `app-conditional`, `app-for`).
   * Ao adicionar um novo comando ou alternar entre "Ler código" e "Editar código", o foco deve ser direcionado de forma previsível para o elemento recém-criado ou alternado.
4. **Feedback de Erros e Execução:**
   * Regiões de alerta (`#execution-alert`, `#terminalOutput`) devem anunciar claramente o resultado da execução ou o motivo exato pelo qual um bloco não pôde ser executado, evitando expor *stack traces* ou erros internos crus do motor `vcat`.
