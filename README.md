**Projeto: Catálogo Comunitário de Serviços Locais**

**1. Visão Geral** O Catálogo Comunitário de Serviços Locais é uma aplicação Full‑Stack voltada a conectar prestadores de serviços (autônomos, pequenas empresas) a consumidores em uma determinada região. O objetivo é facilitar a divulgação de serviços e a busca por profissionais qualificados, promovendo o desenvolvimento comunitário e o fomento da economia local.

**2. Objetivos**

* Dar visibilidade online a prestadores de serviços que ainda não possuem presença digital.
* Oferecer aos consumidores um meio prático de encontrar e avaliar serviços próximos.
* Criar uma plataforma intuitiva, responsiva e escalável.

**3. Usuários e Perfis**

* **Prestador**: realiza cadastro, gerencia seu perfil e seus serviços.
* **Consumidor**: busca serviços, avalia e comenta.
* **Administrador**: monitora cadastros, modera comentários e resolve conflitos.

**4. Requisitos Funcionais**

1. **Autenticação e Autorização**

   * Cadastro de usuário (e‑mail, senha, nome completo, telefone, localização).
   * Login seguro com JWT ou sessões.
   * Reset de senha via e‑mail.
   * Papéis: `prestador`, `consumidor`, `administrador`.

2. **Gerenciamento de Perfil**

   * Prestadores podem completar perfil com foto, descrição, categorias de atuação, faixas de preço e horário de atendimento.
   * Consumidores podem adicionar informações de contato e preferências de busca.

3. **CRUD de Serviços**

   * Criar, ler, atualizar e excluir ofertas de serviço (título, descrição, preço, imagens, categoria).
   * Upload de até 5 imagens por serviço.

4. **Busca e Filtros**

   * Busca por palavra-chave, categoria e localização (cidade/bairro).
   * Filtro por faixa de preço e avaliação.
   * Ordenação: mais próximos, melhor avaliados, mais recentes.

5. **Página de Detalhe de Serviço**

   * Exibe informações completas, galeria de imagens, mapa de localização e perfil do prestador.
   * Botão para contato direto (chat interno ou redirecionamento para WhatsApp/e‑mail).

6. **Avaliações e Comentários**

   * Consumidores podem avaliar de 1 a 5 estrelas e deixar comentários.
   * Sistema de moderação automático/básico (filtro de palavrões, denúncia de abuso).
   * Exibição do rating médio e número de avaliações.

7. **Chat ou Mensagens** (MVP opcional)

   * Chat em tempo real (Socket.io ou WebSockets).
   * Histórico de conversas acessível para ambos os usuários.

8. **Notificações**

   * E‑mail ou push (via browser) para novos comentários, mensagens ou reservas.

9. **Admin Dashboard**

   * Listagem de usuários, serviços e avaliações.
   * Ferramentas de moderação: banimento, edição e exclusão de conteúdos.

**5. Requisitos Não‑Funcionais**

* **Performance**: tempo de resposta < 200ms em consultas comuns.
* **Segurança**: criptografia de senhas (bcrypt), proteção contra XSS, CSRF e injeção de SQL.
* **Escalabilidade**: arquitetura em camadas, API RESTful e possibilidade de migrar para microserviços.
* **Disponibilidade**: deploy em plataformas cloud com auto‑scaling.
* **Responsividade**: suporte completo a dispositivos móveis.

**6. Arquitetura e Tecnologias Sugeridas**

* **Front‑end**: React + Tailwind CSS + React Router.
* **Back‑end**: Node.js + Express.
* **Banco de Dados**: PostgreSQL (hosted) ou MongoDB (NoSQL).
* **Autenticação**: JWT + Passport.js.
* **Armazenamento de Arquivos**: AWS S3 ou Cloudinary.
* **Mapas**: Mapbox ou Leaflet.js + OpenStreetMap.
* **Chat**: Socket.io.
* **Deploy**: Vercel (Front) + Heroku/Railway/AWS Elastic Beanstalk (API).

**7. API RESTful (rotas principais)**

| Método | Rota                       | Descrição                     |
| ------ | -------------------------- | ----------------------------- |
| POST   | /api/auth/register         | Cadastro de usuário           |
| POST   | /api/auth/login            | Login                         |
| GET    | /api/users/me              | Obter dados do usuário logado |
| PUT    | /api/users/me              | Atualizar perfil              |
| POST   | /api/services              | Criar serviço                 |
| GET    | /api/services              | Listar serviços (com filtros) |
| GET    | /api/services/\:id         | Detalhe de um serviço         |
| PUT    | /api/services/\:id         | Atualizar serviço             |
| DELETE | /api/services/\:id         | Deletar serviço               |
| POST   | /api/services/\:id/images  | Upload de imagens             |
| POST   | /api/services/\:id/reviews | Criar avaliação               |
| GET    | /api/services/\:id/reviews | Listar avaliações             |

**8. Sugestões de Design e UX**

* **Paleta de cores**: tons amigáveis (azuis suaves, verdes) para transmitir confiança.
* **Tipografia**: fonte sans-serif legível (e.g., Inter, Roboto).
* **Layout**: homepage com busca central, cards de serviços em grid responsivo.
* **Mapa interativo**: mostra pinos de localização com agrupamento em zoom.
* **Perfil de prestador**: destaque para avaliações e galeria de imagens.
* **Fluxo de conversão**: clear CTAs (botões "Contratar" ou "Entrar em contato").

**9. Pipeline de Desenvolvimento**

1. Configurar repositório Git separado.
2. Definir branches: `main`, `dev`, `feature/*`.
3. Configurar CI (GitHub Actions) com linting e testes básicos.
4. Iniciar front‑end e back‑end em paralelo com Docker Compose (MVP).
5. Implementar autenticação e CRUD básico.
6. Adicionar busca, filtros e upload de imagens.
7. Incluir sistema de avaliações e moderação.
8. Refatorar, otimizar performance e melhorar UX.
9. Deploy em ambiente de staging e depois em produção.

**10. Testes e Qualidade**

* **Back‑end**: Jest + Supertest para rotas e validações.
* **Front‑end**: React Testing Library + Cypress para fluxos críticos.
* **Análise estática**: ESLint + Prettier.

**11. Monitoramento e Manutenção**

* Logs estruturados (Winston ou similar).
* Health checks e monitoramento (New Relic, Sentry).
* Backup automático do banco de dados.

**12. Possíveis Extensões Futuras**

* Integração com pagamento online (Stripe, PayPal).
* Ranking gamificado para prestadores.
* Suporte para múltiplas línguas.
* PWA para offline básico.

---

Este documento serve como guia base para a implementação do MVP e a evolução do Catálogo Comunitário de Serviços Locais.
