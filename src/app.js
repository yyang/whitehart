import express from 'express';
import bodyParser from 'body-parser';

// Initialize App
const app = express();
const config = {
  port: 3000
};

// Parser and brute
app.use(bodyParser.json()); // for parsing application/json

app.get('*', (req, res) => res.send(404));

app.listen(config.port || 3000, () => {
  console.log('Whitehart listening on port ' + config.port);
});
