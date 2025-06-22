# TalkShop Backend
adalah backend e-commerce dengan fitur autentikasi, manajemen produk, dan integrasi chatbot.


## 🚀 Fitur Utama

- Autentikasi JWT (Login, Register, Refresh Token)
- CRUD Produk dan Stok
- Manajemen User (Admin & Customer)
- Chatbot Produk (OpenAI API)
- Upload gambar (Cloudinary)
- Validasi dengan Joi
- Database: PostgreSQL dengan Sequelize ORM

## 🗃️ Database Schema

![ERD Schema](https://raw.githubusercontent.com/sandikabima/talkshop/main/backend/docs/database-schema.png)

## 🌱 Migrations & Seeders Instructions
### ⚙️ 1. Setup Environment Variables

Buat file `.env` di folder `backend/` dan isi seperti ini:

```env
# Postgres DB Local
POSTGRES_DATABASE=talkshopv2
POSTGRES_USER= 
POSTGRES_PASSWORD=
POSTGRES_HOST= localhost
DB_DIALECT=postgres

# JWT Secret
JWT_SECRET=
REFRESH_SECRET=

# Node Env
NODE_ENV=development

# Cloudinary (for image upload)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 🛠️ 2. Menjalankan Aplikasi (Development)
buka terminal di folder backend/ & Jalankan :
- npm install
- npm run db:migrate
- npm run db:seed

start server
- npm run dev


# TalkShop Frontend       
Frontend aplikasi e-commerce dengan React + Vite + Shadcn UI + Redux Toolkit.

## 🚀 Tech Stack

- ⚛️ React + Vite
- 🧱 Shadcn/UI (Tailwind)
- 🗂️ Atomic Design Pattern + Component By fiture
- 🔐 Auth (JWT + Refresh Token)
- 📦 Redux Toolkit
- 🌐 Axios + Service Layer
- 🧪 Form Validation (Joi)

### ⚙️ 1. Setup Environment Variables

Buat file `.env` di folder `frontend/` dan isi seperti ini:

```env
VITE_API_URL = http://localhost:5000/api/v1
```

## 🔧 Instalasi & Jalankan

```bash
cd frontend
npm install
npm run dev

