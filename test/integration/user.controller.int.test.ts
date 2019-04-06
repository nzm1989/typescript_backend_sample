import app from "../../src/app";
import request from "supertest";

describe("Test user controller", () => {
    test("It should response the GET method", () => {
        return request(app).get("/user/getUserByID").query({id : "1"}).expect(200);
    });
});
