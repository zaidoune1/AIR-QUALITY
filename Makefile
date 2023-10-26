# Nom de l'image Docker que vous souhaitez créer
IMAGE_NAME = air-quality-api

# Nom du conteneur Docker que vous souhaitez exécuter
CONTAINER_NAME = air-quality-container

# Port que vous souhaitez utiliser pour votre application
PORT = 3000

# Cible pour construire l'image Docker
build:
    docker build -t $(IMAGE_NAME) .

# Cible pour exécuter le conteneur Docker
run:
    docker run -d -p $(PORT):$(PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Cible pour arrêter et supprimer le conteneur Docker
stop:
    docker stop $(CONTAINER_NAME)
    docker rm $(CONTAINER_NAME)

# Cible pour supprimer l'image Docker
clean:
    docker rmi $(IMAGE_NAME)