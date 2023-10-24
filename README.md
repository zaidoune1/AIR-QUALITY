# API REST de Qualité de l'Air

## Introduction

Ce projet consiste en la création d'une API REST en Node.js pour récupérer des informations sur la qualité de l'air en utilisant les coordonnées GPS de la ville la plus proche. Les données sont obtenues en utilisant l'API IQAir.

## Configuration

Pour commencer, suivez ces étapes de configuration :

1) Inscrivez-vous sur le site IQAir pour obtenir une clé API.
2) Testez la récupération de la qualité de l'air en utilisant l'endpoint v2/nearest_city de l'API IQAir. Vous pouvez utiliser des outils comme Postman, Insomnia ou CURL pour effectuer ces tests.

## Endpoints

## Récupération de la Qualité de l'Air

### GET /air-quality?latitude={latitude}&longitude={longitude}

Cet endpoint permet de récupérer des informations sur la qualité de l'air pour des coordonnées GPS spécifiques. Les paramètres latitude et longitude spécifient les coordonnées de la ville la plus proche.

## Réponse

L'endpoint renvoie un objet JSON contenant les informations sur la qualité de l'air :

![image](https://github.com/zaidoune1/AIR-QUALITY/assets/81720068/87beac2a-4001-48a2-a619-72f6ebe6e863)

## CRON Job

Nous avons mis en place un CRON job pour vérifier la qualité de l'air à Paris (latitude : 48.856613, longitude : 2.352222) toutes les minutes. Les données sont stockées en base de données, y compris la date et l'heure de chaque mesure..

## API la plus polluée à Paris

Nous avons également ajouté un endpoint pour récupérer la date et l'heure de la mesure la plus polluée à Paris en se basant sur les données collectées via le CRON.

## Base de Données

Nous utilisons MongoDB pour stocker les données de qualité de l'air. Le modèle de données est décrit dans le code.

## Installation et Exécution

Pour exécuter le projet localement, suivez ces étapes :

1) Clonez le dépôt depuis GitHub.
2) Installez les dépendances en utilisant npm install.
3) Créez un fichier .env à la racine du projet pour stocker votre clé API IQAir.
4) Exécutez l'application en utilisant npm start.



