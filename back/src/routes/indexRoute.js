module.exports = function (app) {
  const index = require("../controllers/indexController");
  const jwtMiddleware = require("../../config/jwtMiddleware");

  // 라우터 정의
  // app.HTTP메서드(uri, 컨트롤러 콜백함수)
  // app.get("/dummy", index.example);

  // 학생 테이블 조회
  // app.get("/students/:studentIdx", index.readStudents);

  // 학생 생성
  // app.post("/students", index.createStudent);

  // 식당 목록 조회
  app.get("/restaurants", index.readRestaurants);

};
