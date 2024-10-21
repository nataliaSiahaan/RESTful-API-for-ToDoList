'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
      {
        title: 'Finish BE Task',
        description: 'Complete the Technical Project Assignment',
        status: true,
        UserId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Call mom',
        description: 'Talk about weekend plans',
        status: false,
        UserId: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Workout',
        description: 'Complete a 30-minute workout session',
        status: true,
        UserId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Learn New Test',
        description: 'learn new test material',
        status: false,
        UserId: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
