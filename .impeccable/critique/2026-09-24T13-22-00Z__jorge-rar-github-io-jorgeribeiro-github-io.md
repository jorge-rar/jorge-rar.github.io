---
max_score: 32
p1_count: 2
total_score: 22
p0_count: 0
na_heuristics: 7,10
target: site pessoal publicado
target_identity: "url:https://jorge-rar.github.io/jorgeribeiro.github.io"
timestamp: 2026-09-24T13-22-00Z
slug: jorge-rar-github-io-jorgeribeiro-github-io
---
# Crítica de design — site pessoal de Jorge Ribeiro

**Modo:** Experience / Persuade — portfólio pessoal cujo visitante precisa perceber rapidamente quem és, o que sabes fazer e como contactar-te.

## Design Health Score

| # | Heurística | Pontuação | Observação |
|---|---|---:|---|
| 1 | Visibilidade do estado do sistema | 3/4 | A função profissional muda automaticamente; não é um estado essencial e pode distrair. |
| 2 | Correspondência com o mundo real | 2/4 | O tema industrial é pertinente, mas as métricas do painel não têm contexto que permita interpretá-las. |
| 3 | Controlo e liberdade | 3/4 | Há navegação por âncoras, menu móvel e fecho com Escape; o visitante não consegue pausar o texto animado. |
| 4 | Consistência e padrões | 3/4 | A linguagem de painel industrial é coerente, embora algumas etiquetas decorativas concorram com a informação principal. |
| 5 | Prevenção de erros | 3/4 | Poucas ações arriscadas; os links dos CV abrem nova janela sem `rel="noopener"`. |
| 6 | Reconhecimento em vez de memorização | 3/4 | A navegação é explícita, mas os resultados e a cronologia profissional exigem inferência. |
| 7 | Flexibilidade e eficiência | n/a | Não é central num portfólio pessoal. |
| 8 | Estética e design minimalista | 2/4 | O primeiro ecrã acumula nome, função rotativa, CTAs, métricas e diagrama. |
| 9 | Recuperação de erros | 3/4 | Existem poucos fluxos suscetíveis a erro; a navegação pode ser fechada por Escape. |
| 10 | Ajuda e documentação | n/a | Não se aplica de forma material a este portfólio. |
| **Total** |  | **22/32** | **Aceitável; há uma base visual reconhecível, mas falta prova concreta do trabalho.** |

## Veredicto de especificidade

A identidade industrial — paleta escura, grelha, diagrama de linha de produção e indicadores — distingue o site de um currículo genérico. Porém, parte dessa identidade funciona hoje como decoração de “dashboard tecnológico”: falta ligar o diagrama a projetos reais e a resultados verificáveis. A maior oportunidade é transformar o conceito visual já existente em prova da tua experiência.

**Awwwards como referência:** a galeria Sites of the Year reúne trabalhos de várias categorias e anos, incluindo Lando Norris (SOTY 2025) e Chungi Folio (SOTY 2021); não são comparações diretas de conteúdo com um perfil profissional. O perfil de Synchronized Studio descreve o projeto de Michael Gatt como portfólio interativo. A ideia a aproveitar é uma assinatura visual que conta uma história, sem copiar a escala de efeitos de um site de campanha. [Galeria Sites of the Year](https://www.awwwards.com/websites/sites_of_the_year/) · [Perfil Synchronized Studio / Michael Gatt](https://www.awwwards.com/SynchronizedStudio/) · [Perfil OFF+BRAND / Lando Norris](https://www.awwwards.com/offbrand/)

## Impressão geral

A direção visual já tem personalidade e combina com engenharia industrial. Neste momento, a apresentação promete mais do que demonstra: os indicadores parecem dados operacionais reais, mas não estão explicados, e a secção de experiência descreve responsabilidades sem mostrar claramente datas, contributo próprio ou impacto. A melhoria com maior retorno é trocar parte da decoração e do texto genérico por dois ou três casos concretos.

## O que funciona

- **Conceito reconhecível:** a linha de produção e o painel técnico criam uma ligação imediata à área industrial.
- **Ação e navegação simples:** há navegação por secções e chamadas para contactar ou consultar o CV.
- **Boa base estrutural:** o HTML usa secções e títulos, o CSS inclui estilos de foco e uma regra `prefers-reduced-motion`, e o menu móvel expõe o estado expandido.

## Problemas prioritários

### [P1] Os indicadores do painel não têm proveniência

**Porquê:** “OEE 92.8%”, “Throughput 97.4%” e “Scrap Rate 1.6%”, associados a “PROJECT BETA / PRODUCTION LINE JR-99”, parecem resultados reais atribuíveis a ti. Se forem ilustrativos, podem reduzir a confiança; se forem reais, falta explicar o contexto e o teu papel.

**Correção:** identifica-os explicitamente como demonstração/conceito ou substitui-os por métricas reais, com período, contexto e contributo individual. Não publiques dados confidenciais.

**Comando Impeccable:** `$impeccable clarify` ou `$impeccable polish`.

### [P1] Falta evidência concreta da experiência

**Porquê:** o conteúdo de experiência usa formulações amplas como “supporting” e “hands-on experience”, sem uma leitura rápida de datas, entregáveis e resultados. Um recrutador pode compreender o tema, mas não avaliar o teu nível de responsabilidade.

**Correção:** apresenta 2–3 projetos em formato **desafio → ação tua → resultado**. Inclui datas, ferramentas e métricas verificáveis, ou descreve resultados qualitativos quando não houver números publicáveis. A linha lateral atualmente repete “EXPERIENCE” em vez de indicar uma data.

**Inspiração adaptada:** como num portfólio de autor, cada projeto pode ter uma narrativa curta. No teu caso, a animação de fluxo pode acompanhar um caso real: gargalo → intervenção → resultado, revelado durante o scroll. Uma imagem tua ou uma fotografia autorizada do ambiente de trabalho pode equilibrar o painel técnico com uma presença humana.

**Comando Impeccable:** `$impeccable shape` para planear a secção de projetos; `$impeccable polish` para afinar a página.

### [P2] O texto rotativo compete com a mensagem principal

**Porquê:** seis títulos profissionais são escritos e apagados continuamente. A animação acrescenta movimento constante, pode desviar a atenção da proposta principal e, pela combinação de duas regiões `aria-live`, pode ser repetida por leitores de ecrã. A regra CSS de movimento reduzido não parece interromper o temporizador JavaScript.

**Correção:** escolhe uma frase estável que identifique a tua área e o tipo de função procurada. Se mantiveres a animação, respeita `prefers-reduced-motion` também no JavaScript e evita anunciar cada carácter ou ciclo a leitores de ecrã.

**Comando Impeccable:** `$impeccable clarify`, seguido de `$impeccable polish`.

### [P2] A proposta profissional demora a ficar específica

**Porquê:** o texto Sobre repete temas como melhoria operacional e não explicita logo qual é o teu foco profissional ou o teu principal diferencial. Termos como OEE também podem ser pouco claros para quem não trabalha em produção.

**Correção:** abre com uma frase concreta que resuma especialidade, contexto e objetivo profissional. Expande siglas na primeira ocorrência e remove frases que repetem a mesma ideia.

**Comando Impeccable:** `$impeccable clarify`.

### [P2] A experiência móvel ainda precisa de verificação visual

**Porquê:** o CSS adapta o layout, mas não foi possível observar a página publicada em tamanhos de telemóvel. O nome grande, a função rotativa e três CTAs em coluna podem ocupar grande parte do primeiro ecrã e atrasar o acesso ao contacto ou ao CV.

**Correção:** verifica a página num telemóvel real ou numa pré-visualização responsiva. Mantém nome, proposta profissional e um CTA principal visíveis sem scroll excessivo; confirma também contraste, alvos táteis e zoom a 200%.

**Comando Impeccable:** `$impeccable adapt`.

## Sinais por persona

- **Jordan, visitante/recrutador de primeira visita:** consegue encontrar a navegação e o contacto, mas tem de inferir datas, senioridade e resultados; “OEE” não está explicado.
- **Casey, visitante em telemóvel:** a composição do primeiro ecrã pode consumir espaço antes do contacto e do CV. É uma hipótese baseada no CSS; precisa de confirmação visual num dispositivo.
- **Sam, visitante que usa leitor de ecrã/teclado:** o menu expõe estado e pode fechar com Escape, mas o texto rotativo dentro de regiões `aria-live` aninhadas pode produzir anúncios repetidos. Contraste e foco em viewport ampliado não foram medidos.

## Observações menores

- Os links do CV abrem separadores novos sem `rel="noopener"`.
- A coluna lateral da experiência repete a palavra “EXPERIENCE”; substituí-la pelas datas melhora a leitura cronológica.
- O rodapé parece depender do email como caminho de contacto; adicionar LinkedIn pode oferecer uma alternativa familiar.
- A inspeção do código sugere que a pré-visualização social (título/descrição/imagem Open Graph) pode ser melhorada; convém confirmar no HTML publicado antes de alterar.
- Os valores e o projeto fictício/apelidado precisam de contexto visível para que não sejam confundidos com resultados profissionais.

## Perguntas para orientar o próximo passo

1. Os KPIs e o “Project Beta” representam resultados reais, são dados anonimizados ou são apenas um elemento visual?
2. Qual projeto real demonstra melhor a tua capacidade para melhorar um processo industrial?
3. Queres que a primeira fase se concentre em **projetos e evidências**, em **posicionamento e texto**, ou em **experiência móvel e acessibilidade**?
