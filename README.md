# biceps-solutions

Biceps Solutions - это веб-приложение для фитнес-центра, которое позволяет пользователям просматривать информацию о занятиях, тренерах и абонементах. Пользователи также могут регистрироваться, входить в систему и бронировать занятия.

## Стек технологий

React, TypeScript, Vite, Tailwind CSS, Supabase

## Основные функции

- Аутентификация пользователей (регистрация, вход)
- Просмотр списка занятий
- Просмотр информации о тренерах
- Просмотр информации о вариантах абонементов
- Бронирование занятий (для аутентифицированных пользователей)
- Просмотр своих бронирований
- Управление профилем пользователя

### Предварительные требования

- Node.js
- npm или yarn
- Supabase CLI
- Docker Desktop (для локального запуска Supabase)

### Установка

1.  Клонируйте репозиторий:
    ```bash
    git clone <URL репозитория>
    cd biceps-solutions
    ```
2.  Установите зависимости:
    ```bash
    npm install
    # или
    yarn install
    ```
3.  Настройте переменные окружения Supabase. Создайте файл `.env` в корне проекта и добавьте следующие переменные:
    ```env
    VITE_SUPABASE_URL=YOUR_SUPABASE_URL
    VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```
    Вы можете найти эти значения в настройках вашего проекта Supabase.

### Локальный запуск Supabase

1.  Убедитесь, что Docker Desktop запущен.
2.  Запустите локальный экземпляр Supabase:
    ```bash
    npx supabase start
    ```
    После успешного запуска CLI выведет локальные `API URL` и `anon key`. Используйте их в вашем файле `.env`.

### Запуск приложения

1.  Запустите приложение в режиме разработки:
    ```bash
    npm run dev
    # или
    yarn dev
    ```
2.  Откройте [http://localhost:5173](http://localhost:5173) (или другой порт, указанный Vite) в вашем браузере.
