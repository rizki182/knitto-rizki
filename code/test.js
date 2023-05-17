const request = require("supertest");
const app = require("./server");


describe("POST /product", () => {
    describe("Without parameters", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).post("/product").send({
                
            });
            expect(response.statusCode).toBe(400);
        })
    })
    
    describe("Without name", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).post("/product").send({
                "price": 1000000
            });
            expect(response.statusCode).toBe(400);
        })
    })
    
    describe("Without price", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).post("/product").send({
                "name": "Product 1"
            });
            expect(response.statusCode).toBe(400);
        })
    })
    
    describe("Price is not number", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).post("/product").send({
                "price": "abcde"
            });
            expect(response.statusCode).toBe(400);
        })
    })
});

describe("PUT /product", () => {
    describe("Without parameters", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).put("/product/1").send({
                
            });
            expect(response.statusCode).toBe(400);
        })
    })
    
    describe("Without name", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).put("/product/1").send({
                "price": 1000000
            });
            expect(response.statusCode).toBe(400);
        })
    })
    
    describe("Without price", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).put("/product/1").send({
                "name": "Product 1"
            });
            expect(response.statusCode).toBe(400);
        })
    })
    
    describe("Price is not number", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).put("/product/1").send({
                "price": "abcde"
            });
            expect(response.statusCode).toBe(400);
        })
    })
})