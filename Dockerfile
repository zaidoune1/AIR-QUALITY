# Utilisez une image Node.js officielle comme point de départ
FROM node:14

# Créez un répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Commande pour exécuter l'application
CMD [ "npm", "start" ]