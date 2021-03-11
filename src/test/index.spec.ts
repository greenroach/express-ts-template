import request from "supertest";
import { app } from "../app";

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request(app).get("/")
            .expect(200);
    });

    it("should return Welcome to Express", (done) => {
        return request(app).get("/")
            .end(function(err, res) {
                expect(res.text).toContain("Welcome to Express");
                done();
            });
    });
});
