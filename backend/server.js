const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');  // Подключаем маршруты

dotenv.config();  // Загружаем переменные окружения

const app = express();

// Мидлвар для парсинга JSON в теле запроса
app.use(express.json());

// Подключение маршрутов
app.use('/api/auth', authRoutes);

// Подключение к базе данных MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Запуск сервера
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
