import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb');

app.get('/', (req: Request, res: Response) => {
  // логика обработки запроса
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
