/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('apartments', [
      {
        id: 1,
        rooms: 2,
        name: 'Apartment 1',
        price: 123,
        description: 'description',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id: 2,
        rooms: 1,
        name: 'Apartment 2',
        price: 321,
        description: 'description',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id: 3,
        rooms: 4,
        name: 'Apartment 3',
        price: 1234,
        description: 'description',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id: 4,
        rooms: 3,
        name: 'Apartment 4',
        price: 1231,
        description: 'description',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('apartments', null, {})
  }
}
