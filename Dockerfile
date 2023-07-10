
# Utilisez une image de base appropriée pour votre application Oracle JET
FROM node:14
# Définir le répertoire de travail dans le conteneur
WORKDIR /app
# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install -g @oracle/ojet-cli@14.1.0

# Copiez tout le code source de l'application dans le conteneur
COPY . /app

# Restore application & Build appliaction.
RUN ojet restore && ojet build

# Définir le volume pour les fichiers de l'application
VOLUME ["/app"]

# Exposez le port sur lequel votre application Oracle JET s'exécute
EXPOSE 8000

# Commande de démarrage de l'application Oracle JET
CMD ["ojet", "serve"]