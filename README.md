## AssigmentsBackElodie-Rindra   
# Collabrateur :  
N° 1 ANDRIAMAHANINTSOA Elodie  
N° 48 RATSIMANDAVANA Rindratiana Holiniaina  

# Introduction : 
Ceci est une application, ou plutôt une plateforme, pour les professeurs et les étudiants.   
Elle permet aux professeurs d'envoyer des devoirs et aux étudiants de répondre à ces devoirs qui leur sont destinés.  

# Quelles sont les étapes à suivre pour la faire fonctionner sur votre machine?  
Cette partie est la partir BackEnd du projet .  
Develloper sur ExpressJs avec la base de donnée non relationnelle MongoDB .  
`<br>`
- Naviguez vers le répertoire où vous souhaitez cloner le dépôt
- Commencer par cloner le projet , voici la commande à exécuter dans le cmd :  
    `git clone https://github.com/Andriamah/AssignmentsBackElodie-Rindra.git`  
- Veuillez naviguer vers le projet par : 
    ` .. \AssignmentsBack\AssignmentsBackElodie-Rindra>cd ExpressBack`
    Maintenant que nous arrivons à la racine du projet, on va passer à quelque chose de plus sérieux.  
- Nous allons maintenant exécuter une commande essentielle pour préparer l'environnement de développement d'un projet Node.js en installant toutes les dépendances nécessaires : 
    `.. \AssignmentsBack\AssignmentsBackElodie-Rindra\ExpressBack>npm install`  
    Cela doit prendre un moment , cela permet d'exécuter et de développer l'application dans un environnement cohérent et fonctionnel.
- Maintenant, la commande centrale pour démarrer une application Node.js :
    `.. \AssignmentsBack\AssignmentsBackElodie-Rindra\ExpressBack>node app.js`  
    C'est quoi app.js ?  
    Ce fichier peut être vu comme le "coeur" de votre application Node.js, où la majorité de la configuration initiale et de l'initialisation se produit.  
    Elle se trouve dans la racine du projet.  
- En local, l'application démarre sur le port 3000, comme spécifié dans l' app.js.   
    `http://localhost:3000/`  
    Ainsi pour voir les webServices : il faut aller dans app.js et voir chaque webService definit.  
    exemple :   
            app.get('/assignments', assignmentController.getAssignments);  
            C'est à dire qu'il faut le lancer sur postman avec la methode GET :   
            `http://localhost:3000/assignments`  
            Cela retournera la liste globals des assignments .  

# Deploiement 
On a utilisé le gitHub de N° 1 ANDRIAMAHANINTSOA Elodie pour le deploiement du back.
= > ExpressJs Deployer sur Render.com
= > MongoBd Deployer sur MongoDB Atlas 



