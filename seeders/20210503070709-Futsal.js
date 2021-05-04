"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Futsals", [
      {
        stageType: "실내",
        name: "민제현 풋살장",
        location: "서울특별시 강남구 코드로 1길 스테이츠빌딩 1층",
        description: "1층에 위치한 가 실내 풋살장입니다.",
        fee: 200000,
        thumnail: "/images/inside_football1.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실내",
        name: "함민우 풋살장",
        location: "서울특별시 강남구 코드로 2길 스테이츠빌딩 2층",
        description: "2층에 위치한 나 실내 풋살장입니다.",
        fee: 270000,
        thumnail: "/images/inside_football2.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실외",
        name: "민제경 풋살장",
        location: "서울특별시 강남구 코드로 3길 850",
        description: "스테이츠 빌딩 옆에 위치한 다 실외 풋살장입니다.",
        fee: 230000,
        thumnail: "/images/outside_football1.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실외",
        name: "백현준 풋살장",
        location: "서울특별시 강남구 코드로 4길 870",
        description: "스테이츠 빌딩 옆에 위치한 라 실외 풋살장입니다.",
        fee: 310000,
        thumnail: "/images/outside_football2.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실외",
        name: "코드 풋살장",
        location: "서울특별시 강남구 코드로 5길 890",
        description: "스테이츠 빌딩 옆에 위치한 마 실외 풋살장입니다.",
        fee: 230000,
        thumnail: "/images/outside_football3.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Futsals", null, {});
  },
};
