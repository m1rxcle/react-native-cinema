# 🎬 React Cinema (React Native + Expo)

Мобильное приложение для просмотра фильмов, выбора сеансов и покупки билетов с авторизацией через OTP-код.

---

## 🚀 Tech Stack

- ⚛️ React Native (Expo)
- 🧭 Expo Router (file-based routing)
- 🗂 Zustand (state management)
- 🧪 Vitest (unit testing)
- 🧾 Zod (validation schemas)
- 🌐 Axios (API requests)
- 🎨 NativeWind (Tailwind for RN)
- 🔷 TypeScript

---

## 📱 Features

### 🔐 Auth

- Авторизация по номеру телефона
- Получение OTP-кода
- Подтверждение кода и получение токена
- Сохранение сессии пользователя

### 🎬 Movies

- Список фильмов
- Детальная страница фильма
- Информация о актёрах, жанрах, рейтингах

### 🎟 Tickets

- Выбор мест в зале
- Расчёт общей стоимости
- Формирование заказа

### 🧾 Orders

- Создание заказа
- Просмотр последнего заказа
- Статусы заказа

---

## 🧠 Architecture

Проект разделён на слои:
shared/
api/ # axios API layer
store/ # Zustand stores
utils/ # helper functions
schemas/ # Zod schemas
tests/ # unit tests

---

## 🧪 Testing

Используется **Vitest** для unit-тестирования:

### Что покрыто

- utils (formatters, parsers)
- zod schemas (validation logic)
- zustand stores (state logic)

---

### Запуск тестов

```bash
npm run test
```

---

## 🔐 Auth Flow

Phone → OTP request → Code verify → Token → Session

---

## 📦 State Management (Zustand)

Основные сторы:

useAuthStore — телефон и код OTP
useTicketsStore — выбранные билеты + сумма
useOrderStore — текущий заказ
usePlaceStore — выбранные места
useCheckoutStore — данные пользователя + карта
useTabBarStore — UI состояние таб-бара

---

## 🧾 API

Основные endpoints:

Auth
POST /api/auth/otp — отправка OTP
POST /api/users/signin — вход по коду
Users
GET /api/users/session — текущая сессия
PATCH /api/users/profile — обновление профиля

---

## 📁 Routing

Используется Expo Router:

app/
(auth)/
register.tsx
code.tsx
(tabs)/
profile.tsx
index.tsx

---

## ⚙️ CI (GitHub Actions)

Проект поддерживает автоматический запуск тестов через GitHub Actions:

запуск при push
запуск при PR
проверка тестов перед merge

---

## 📌 Notes

Все бизнес-логика покрыта unit-тестами
Используется strict TypeScript
Zustand используется без Redux boilerplate
API слой изолирован через axios

---

## 🏁 Status

🚧 Project in active development
🎯 Focus: architecture, testing, clean state management

---
