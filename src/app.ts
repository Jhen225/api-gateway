import express from 'express';
const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(express.json());

app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
