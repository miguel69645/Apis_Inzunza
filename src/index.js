import app from './app';
import config from './config/config';

// Start the server
app.listen(app.get('port'));
console.log(`Server is running on: http://${config.HOST}:${app.get('port')}${config.URL_BASE}`
);