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
        name: "가 풋살장",
        location: "서울특별시 강남구 코드로 1길 스테이츠빌딩 1층",
        description:
          "LED조명 설치로 야간에도 대낮처럼 경기 가능, 정규사이즈 풋살장 운영 (5대5 가능), 넓은 주차장 (10대 이상 주차가능), 풋살(축구)공, 풋살화, 팀조끼, 양말, 타월, 공기주입기 등 풋살용품 대여가능, 깨끗한 화장실 (남/여 화장실 분리)",
        fee: 200000,
        thumnail: "/images/inside_football1.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실내",
        name: "나 풋살장",
        location: "서울특별시 강남구 코드로 2길 스테이츠빌딩 2층",
        description:
          "LED조명 설치로 야간에도 대낮처럼 경기 가능, 정규사이즈보다 큰 1개의 풋살장 운영 (6대6 가능), 넓은 주차장 (20대 이상 주차가능), 풋살(축구)공, 풋살화, 팀조끼, 양말, 타월, 공기주입기 등 풋살용품 대여가능, 실내 휴게실 운영, 깨끗한 화장실 (남/여 화장실 분리)",
        fee: 250000,
        thumnail: "/images/inside_football2.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실외",
        name: "다 풋살장",
        location: "서울특별시 강남구 코드로 3길 850",
        description:
          "LED조명 설치로 야간에도 대낮처럼 경기 가능, 정규사이즈보다 큰 3개의 풋살장 운영 (7대7 가능), 넓은 주차장 (30대 이상 주차가능), 풋살(축구)공, 풋살화, 팀조끼, 양말, 타월, 공기주입기 등 풋살용품 대여가능, 거품없는 가격의 매점운영 (물, 음료수, 라면, 과자 등), 야외 휴게실 운영, 깨끗한 화장실 (남/여 화장실 분리)",
        fee: 300000,
        thumnail: "/images/outside_football1.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실외",
        name: "라 풋살장",
        location: "서울특별시 강남구 코드로 4길 870",
        description:
          "LED조명 설치로 야간에도 대낮처럼 경기 가능, 정규사이즈보다 큰 4개의 풋살장 운영 (8대8 가능), 넓은 주차장 (40대 이상 주차가능), 풋살(축구)공, 풋살화, 팀조끼, 양말, 타월, 공기주입기 등 풋살용품 대여가능, 거품없는 가격의 매점운영 (물, 음료수, 라면, 과자 등), 야외 휴게실 운영, 깨끗한 화장실 (남/여 화장실 분리)",
        fee: 400000,
        thumnail: "/images/outside_football2.jpeg",
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stageType: "실외",
        name: "마 풋살장",
        location: "서울특별시 강남구 코드로 5길 890",
        description:
          "LED조명 설치로 야간에도 대낮처럼 경기 가능, 정규사이즈보다 큰 5개의 풋살장 운영 (10대10 가능), 넓은 주차장 (50대 이상 주차가능), 풋살(축구)공, 풋살화, 팀조끼, 양말, 타월, 공기주입기 등 풋살용품 대여가능, 거품없는 가격의 매점운영 (물, 음료수, 라면, 과자 등), 야외 휴게실 운영, 깨끗한 화장실 (남/여 화장실 분리)",
        fee: 450000,
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
