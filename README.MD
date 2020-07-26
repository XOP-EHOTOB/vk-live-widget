# Модуль для работы с Live Widget для обновления виджета сообщества Вконтакте.

<p align="center">
<a href="https://www.npmjs.com/package/vk-live-widget"><img src="https://img.shields.io/npm/v/vk-live-widget.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vk-live-widget"><img src="https://img.shields.io/npm/dt/vk-live-widget.svg?style=flat-square" alt="NPM downloads"></a>
</p>

# Подключение

```js
const LiveWidget = require("vk-live-widget");

const updateWidget = new LiveWidget("Токен приложения"); // Необходимо получить в приложении Live Widgrt https://vk.com/app6232540 Добавляем приложение в сообщество => Далее необходимо открыть приложение => Перейти в редактор кода => Найти синюю кнопку с рисунком ключа => Тыкаем и получаем ключ для обновления виджета сообщества

// Как найти ключ: https://drive.google.com/file/d/1yW6oqsKri7bfUTl9DLhFEyOrWy1vj9tA/view?usp=sharing

updateWidget({
  title: "Заголовок виджета",
  title_url: "vk.com/xop_enotov", // Ссылка откроется при нажатии на заголовок
  title_counter: 1, // Колтчество заголовков
  head: [
    {
      text: "Заголовок 1",
    },
    {
      text: "Заголовок 2",
      align: "right",
    },
  ],
  body: [
    {
      icon_id: `vk.com/xop_enotov`, // Иконка с аватаркой пользователя
      text: `1 поле`,
      url: `vk.com/xop_enotov`, // Ссылка откроется при нажатии на текст
    },
    {
      text: `2 поле`,
    },
  ],
  more: "Играть", // Кнопка под виджетом
  more_url: "vk.com/xop_enotov", // Ссылка при инажатии на кнопку под виджетом
});
```

В этом случае мы получим таблицу с 1 строкой и 2 столбцами

# Пример использования для публикации топа пользователей грппы.

// Так будет выглядеть наш виджет: https://drive.google.com/file/d/13drrJOnG5txGR5L_4PWPDb1uwm80kwyL/view?usp=sharing

```js
const LiveWidget = require("vk-live-widget"); // Подключаем библиотеку

const updateWidget = new LiveWidget("Токен приложения"); // Авторезируемя с помощью токена приложения

let users = Users.find({}); // Получаем массив пользователей из вашей базы данных

users.sort(function (a, b) {
  if (b.win > a.win) return 1;
  if (b.win < a.win) return -1;
  return 0;
}); // Сортируем пользоваелей по параметру (К примеру количество побед в игре за день)

var script = {
  title: "Топ игроков", // Заголовок виджета
  title_url: "vk.com/football.coin", // Ссылка откроется при нажатии на заголовок
  title_counter: 1,
  head: [
    {
      text: "Игрок:", // Заголовок первой колонки
    },
    {
      text: "Выиграл:", // Заголовок второй колонки
      align: "right",
    },
  ],
  body: [], // наш будующий виджет
  more: "Играть", // Кнопка под виджетом
  more_url: "vk.me/football.coin", // Ссылка откроится при нажатии на кноку
}; // Создаем разметку будующего виджета

// Далее с помощью цикла заполняем тело нашего виджета

const widget = () => {
  // Функция будет обновлять тело нашего скрипта
  for (let g = 0; g < 10; g++) {
    script.body = []; // Очищаем тело виджета
    script.body.push([
      {
        // Первую колонку заполнинм данными пользователя
        icon_id: `id${users[g].id}`, // id пользователя из нашего массива с бд
        text: `${users[g].tag}`, // Имя пользователя
        url: `vk.com/id${tops[g].idvk}`, // Откроется профиль пользователя при нажатии
      },
      {
        text: `${tops[g].win.toFixed(0)}`, // Вторая колонка будет содержать количество побед пользователей
      },
    ]);
  }
};

setInterval(() => {
  widget(); // Обновляем наш скрипт
  updateWidget.update(script); // Загружаем наш скрипт для обновления виджета группы
}, 180000); //Обновляем аиджет каждые 3 мин.
```

# В результате получаем профит и стонкс

<a href="https://vk.com/xop_enotov"><img src="https://avatanplus.com/files/resources/original/59ec5c2dbb92e15f434812c8.png" alt="Подписаться"></a>
