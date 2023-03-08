require('dotenv').config();

let appName = `Fleet Management API`;

const app = require('./app');
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`[${appName}]: http://localhost:${port}`));