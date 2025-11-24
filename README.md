# BASE - AI генерация видео и изображений

Сервис для генерации видео и изображений с помощью AI.

## Установка

```bash
npm install
```

## Запуск

```bash
npm start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000)

## Технологии

- React 18
- Tailwind CSS 3
- Create React App

## Структура проекта

```
src/
  components/
    Header.js          # Верхняя навигация с логотипом
    TabNavigation.js   # Вкладки навигации
    Section.js         # Секция с заголовком и фильтрами
    ImageGrid.js       # Сетка изображений (masonry layout)
  App.js               # Главный компонент
  index.js             # Точка входа
  index.css            # Глобальные стили и шрифты
```

## Шрифты

- **Inter Medium** - загружается с Google Fonts
- **Form Bold** - находится в `/public/Form-Bold.otf`

## Цветовая схема

- `--text-main`: #e8e8e8
- `--text-placeholder`: #6f7070
- `--accent`: #ffbb00
- `--border`: #29292a
- `--bg-main`: #0e0e0e

