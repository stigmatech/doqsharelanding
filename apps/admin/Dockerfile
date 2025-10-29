# Dockerfile pour le backend DoqShare Account
FROM node:20-alpine

# Installer pnpm
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json pnpm-lock.yaml ./
COPY ../../packages ./packages
COPY . .

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Construire l'application
RUN pnpm build

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["pnpm", "start"]
