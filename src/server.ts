import app from './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;

const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}
// REVISAR MODIFICASION DEL PUERTO || process.env.PORT
app.listen(process.env.PORT || PORT, () => {
    console.log('Express server listening on port ' + PORT);
})
// https.createServer(httpsOptions, app).listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
// })
