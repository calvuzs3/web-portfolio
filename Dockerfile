# # Dockerfile per Next.js con Bun
# vim:foldmethod=marker

# Stage1:# Fase di build con Node.js  {{{
FROM node:20-alpine AS builder

WORKDIR /magic-portfolio

# Copia i file di configurazione delle dipendenze
COPY package.json package-lock.json* bun.lock* ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice sorgente
# Inclusa la directory src e altri file importanti
COPY src/ ./src/
COPY public/ ./public/
COPY next.config.mjs ./
COPY tsconfig.json ./
COPY postcss.config.js ./
COPY .env* ./
# Se hai altri file di configurazione aggiungi altri COPY qui 
# }}}

# Stage 2: Crea la build di produzione {{{
RUN npm run build

# Fase di produzione con Bun
FROM oven/bun:1 AS runner

WORKDIR /magic-portfolio

# Imposta variabili d'ambiente per la produzione
ENV NODE_ENV=production

# Copia il package.json e le dipendenze di produzione
COPY --from=builder /magic-portfolio/package.json ./
COPY --from=builder /magic-portfolio/node_modules ./node_modules

# Copia i file di build e i file statici
COPY --from=builder /magic-portfolio/.next ./.next
COPY --from=builder /magic-portfolio/public ./public

# Copia il file next.config.mjs e altri file di configurazione necessari
COPY --from=builder /magic-portfolio/next.config.mjs ./
COPY --from=builder /magic-portfolio/.env* ./
# }}}

# Final Stage: avvia l'applicazione {{{

# Esponi la porta che sarà usata dal reverse proxy
EXPOSE 3000

# Comando per avviare l'applicazione con Bun
CMD ["bun", "--bun", "node_modules/.bin/next", "start"]
# }}}
