const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Создание схемы для пользователя
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Хэширование пароля перед сохранением в базу данных
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();  // Если пароль не изменился
  this.password = await bcrypt.hash(this.password, 10);  // Хэширование пароля
  next();
});

// Метод для проверки пароля
userSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
