import express from 'express';
import router from './src/route';
const app = express();
app.use(express.json());
const port = 3000;

app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
  });
app.use('/api', router);

  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});