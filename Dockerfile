# Dockerfile per Next.js con Bun

# Stage1: Usa l'immagine ufficiale di Bun come base {{{
FROM oven/bun:latest as builder

# Imposta la directory di lavoro
WORKDIR /

# Copia i file di configurazione delle dipendenze
COPY package.json bun.lock* ./

# Installa le dipendenze
RUN bun install --frozen-lockfile

# Copia il resto del codice sorgente
COPY . .ufficiale
# }}}

# Stage 2: Crea la build di produzione {{{
RUN bun run build

# Seconda fase per l'immagine di produzione, più leggera
FROM oven/bun:latest as runner

WORKDIR /

# Imposta variabili d'ambiente per la produzione
ENV NODE_ENV=production

# Copia solo i file necessari dalla fase di build
COPY --from=builder /public ./public
COPY --from=builder /.next/standalone ./
COPY --from=builder /.next/static ./.next/static
# }}}

# Final Stage: avvia l'applicazione {{{

# Esponi la porta che sarà usata dal reverse proxy
EXPOSE 3000

# Comando per avviare l'applicazione
USER bun
CMD ["bun", "run", "start"]
# }}}
