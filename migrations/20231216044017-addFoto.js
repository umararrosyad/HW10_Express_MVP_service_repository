'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Movies', 'foto', {
      type: Sequelize.STRING, // Sesuaikan dengan tipe data yang sesuai
      allowNull: true, // Sesuaikan dengan kebutuhan aplikasi Anda
    });
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.removeColumn('Movies', 'foto');
  }
};
