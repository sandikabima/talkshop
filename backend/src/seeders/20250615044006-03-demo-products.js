'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Product", [
      {
        name: 'Kaos Polos Hitam',
        description: 'Kaos katun asli nyaman dipakai',
        price: 75000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-7_rc72ah.png',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaos Oversize Putih',
        description: 'Cocok untuk gaya kasual modern',
        price: 85000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-9_qmepye.png',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaos Oversize Orange',
        description: 'Cocok untuk gaya kasual modern',
        price: 85000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-2_msxgku.png',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaos Oversize Coklat',
        description: 'Cocok untuk gaya kasual modern',
        price: 85000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-8_nwl3vu.png',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kemeja Flanel Merah',
        description: 'Kemeja hangat dan stylish',
        price: 120000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-5_zsdhby.png',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celana Jeans Slimfit',
        description: 'Kemeja hangat dan stylish',
        price: 120000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-6_bkvrgp.png',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celana Chino Coklat',
        description: 'Chino comfy untuk acara santai',
        price: 140000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463944/img-10_znmzea.png',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celana Pendek Santai',
        description: 'Celana pendek pria bahan ringan',
        price: 60000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-1_mpkjjk.png',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celana Levis',
        description: 'Chino comfy untuk acara santai',
        price: 140000,
        imageUrl: 'https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-6_bkvrgp.png',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   name: 'Topi Snapback Hitam',
      //   description: 'Topi streetwear klasik',
      //   price: 50000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Topi Bucket Hat Abu',
      //   description: 'Cocok untuk nongkrong santai',
      //   price: 55000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Topi Baseball Navy',
      //   description: 'Sporty dan casual',
      //   price: 45000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Sneakers Putih Lowcut',
      //   description: 'Sepatu sneakers ringan',
      //   price: 220000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Sepatu Boots Kulit',
      //   description: 'Boots pria model klasik',
      //   price: 300000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Slip On Kasual',
      //   description: 'Slip on santai cocok indoor',
      //   price: 130000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Jam Tangan Digital',
      //   description: 'Fitur stopwatch dan waterproof',
      //   price: 180000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 5,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Gelang Kulit Pria',
      //   description: 'Gaya maskulin simple',
      //   price: 45000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 5,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Kacamata Hitam UV400',
      //   description: 'Proteksi sinar UV, cocok outdoor',
      //   price: 90000,
      //   imageUrl: 'https://example.com/smartphone.jpg',
      //   categoryId: 5,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Product", null, {});
  }
};
