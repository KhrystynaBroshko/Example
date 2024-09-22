const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Налаштування статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Основний маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Простий API маршрут для отримання рецепту
app.get('/api/recipe', (req, res) => {
    const recipe = {
        title: "Паста з Томатним Соусом",
        ingredients: [
            "200 г пасти (спагетті або пенне)",
            "400 г помідорів у власному соку",
            "1 цибулина",
            "2 зубчики часнику",
            "Оливкова олія",
            "Сіль, перець, базилік за смаком"
        ],
        instructions: [
            "Варіть пасту в підсоленій воді до готовності.",
            "Обсмажте цибулю і часник в оливковій олії до золотистого кольору.",
            "Додайте помідори і варіть на середньому вогні 10-15 хвилин.",
            "Змішайте пасту з соусом, додайте сіль, перець і базилік.",
            "Подавайте гарячою."
        ]
    };
    res.json(recipe);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
