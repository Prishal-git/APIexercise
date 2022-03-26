const request = require("supertest");
const app = require("../app");

describe("API Server", () => {
  let api;
  beforeAll(() => {
    api = app.listen(5050, () => {
      console.log("Test server running at port 5050");
    });
  });
  afterAll((done) => {
    api.close(done);
    console.log("Gracefully stopping test server");
  });
  it("responds to get / with a status 200", (done) => {
    request(api).get("/").expect(200, done);
  });

  it("responds to get /gebru with a status 200", (done) => {
    request(api).get("/gebru").expect(200, done);
  });

  it("retrieves a gebru student namd & birthday by id", (done) => {
    request(api)
      .get("/gebru/1")
      .expect(200)
      .expect({ id: 1, name: "Aaftab", dob: "04-12-1996", age: 25 }, done);
  });
});
