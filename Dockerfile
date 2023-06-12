# Utilisez une image de base appropriée pour votre application Oracle JET
FROM node

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install -g @oracle/ojet-cli

# Copiez tout le code source de l'application dans le conteneur
COPY . .

# restore appliaction.
RUN ojet restore

# Build appliaction.
RUN ojet build

# Exposez le port sur lequel votre application Oracle JET s'exécute
EXPOSE 8080

# Commande de démarrage de l'application Oracle JET
CMD ["ojet", "serve"]