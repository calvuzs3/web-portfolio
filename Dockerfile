FROM oven/bun:alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /src/app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Stage 2: Build the application
FROM base AS builder
WORKDIR /src/app
COPY /src/app/node_modules ./node_modules
COPY . .
RUN bun run build

# Stage 3: Production server
FROM base AS runner
WORKDIR /src/app
ENV NODE_ENV=production
COPY --from=builder /src/app/public ./public
# COPY --from=builder /src/app/.next/standalone ./
# COPY --from=builder /src/app/.next/static ./.next/static

EXPOSE 3000
CMD ["bun", "run", "start"]
