import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Imports Routes
import routesOrdersPWA from './api/pwa/orders/routes/index';
import routesLabelsPWA from './api/pwa/labels/routes/index';
import routesInstitutesPWA from './api/pwa/institutes/routes/index';
import routesProductsPWA from './api/pwa/products/routes/index';
import routesPersonsPWA from './api/pwa/persons/routes/index';

// Config para variables de entorno
import config from './config/config';

// Declaramos la variable app igualándola a express
const app = express();

// Establece la conexión a la BD
import { mongoose } from './config/database.config';

// Settings
app.set('port', config.PORT);

// Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Routes
const api = config.URL_BASE;
app.get(`${api}`, (req, res) => {
  res.send(`<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`);
});
app.get('/DrFIC', (req, res) => {
  res.send(`<h1>RESTful running in DrFIC</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`);
});

// Routes
routesOrdersPWA(app);
routesLabelsPWA(app);
routesInstitutesPWA(app);
routesProductsPWA(app);
routesPersonsPWA(app);

// Export App
export default app;