const express = require('express');
const app = express();
const connectToDatabase = require('./config/db');
const bodyParser = require('body-parser');
const AssignmentController = require('./routes/AssignmentController');
const ContenuController = require('./routes/ContenuController');
const ClasseController = require('./routes/ClasseController');
const PromotionController = require('./routes/promotionController');
const MatiereController = require('./routes/MatiereController');
const EleveController = require('./routes/EleveController');
const ProfController = require('./routes/ProfController');

connectToDatabase();

app.use(bodyParser.json()); 

// Middleware pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Router
app.get('/', (req, res) => {
  res.send('Ca marche!! Yess!!!');
});

/**
 * ================================================================
 */

const assignmentController = new AssignmentController();
app.get('/assignments', assignmentController.getAssignments);
app.get('/assignment/:id_matiere', assignmentController.getAssignmentByMatiere);
app.get('/assignment/:id_promotion', assignmentController.getAssignmentByPromotion);

app.put('/assignment/:id', assignmentController.updateAssignment);

app.post('/assignment',assignmentController.createAssignment);

/**
 * ================================================================
 */
const contenuController = new ContenuController();
app.get('/contenus',contenuController.getContenus);
app.get('/contenu/eleve/:id_eleve/assignment/:id_assignment' , contenuController.getContenuByEleveByAssignment);
app.get('/contenu/:id' , contenuController.getContenuById);
app.get('/contenu/assignment/:id_assignment' , contenuController.getContenuByAssignment);

app.put('/contenu/:id', contenuController.updateContenu);

app.patch('/contenu/:id',contenuController.updateContenuNote);

app.post('/contenu',contenuController.createContenu);

/**
 * ================================================================
 */

const classeController = new ClasseController();
app.get('/classes' , classeController.getClasses);

app.post('/classe',classeController.createClasses)

/**
 * ================================================================
 */

const promotionController = new PromotionController();
app.get('/promotions' , promotionController.getPromotions);

app.post('/promotion' , promotionController.createPromotion);

/**
 * ================================================================
 */

const matiereController = new MatiereController();
app.get('/matieres' , matiereController.getMatieres);

app.post('/matiere' , matiereController.createMatiere)

/**
 * ================================================================
 */

const eleveController = new EleveController();
app.get('/eleves' , eleveController.getEleves);
app.get('/eleve/:id' , eleveController.getEleveById)

app.post('/eleve', eleveController.createEleve);

/**
 * ================================================================
 */

const profController = new ProfController();
app.get('/profs',profController.getProfs);

app.post('/prof',profController.createProf);


const port = process.env.PORT || 3000 ;
app.set('port', port);

// Écouter sur le port spécifié
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
