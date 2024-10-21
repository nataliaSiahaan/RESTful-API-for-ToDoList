'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [ // Mengubah 'User' menjadi 'Users'
      {
        name: 'Natalia Smith',
        email: 'natalia@example.com',
        password: '$2y$12$NjIzN0EkdGFsd6pI8JhU2eB1Jv.vDsxgkjfsfL9dFj9ZZ8gKLW', // Password yang sudah di-hash
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oh Sehun',
        email: 'S3sehun@example.com',
        password: '$2y$12$abcSgf89LkjhfkZk0N2ht32lskfhfjlsk09LkjqF93sdjs7uWZ', // Password yang sudah di-hash
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kim Jae-young',
        email: 'Jae123@example.com',
        password: '$2y$12$abcSgf89LkjhfkZk0N2ht32lskfhfjlsk09LkjqF93sdjs7uWZ', // Password yang sudah di-hash
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {}); // Mengubah 'User' menjadi 'Users'
  }
};
