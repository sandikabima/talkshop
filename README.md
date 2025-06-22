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
<!-- ### 1. Users 
- `userId`, `userName`, `email`, `password`, `role`, `refresh_token`
### 2. Cegories
-`categoryId`,`name`
### 3. Products
-`productId`, `name`, `description`, `price`, `imageUrl`, `categoryId`
### 4. ProductStocks
-`productStockId`, `productId`, `quantity`, `location`
### 5.  Carts
-`carId`, `userId`
### 6. CartItems
-`cartItemId`, `cartId`, `productId`, `quantity`    
### 7. Orders
-`orderId`, `userId`, `status`, `totalAmount`
### 8. OrderItems
-`orderItemId`, `orderId`, `productId`, `quantity`, `price` -->

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
