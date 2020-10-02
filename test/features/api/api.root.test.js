const supertest = require('supertest')

const app = require('@/src/app') // Link to your server file

const app_instance = app.listen();
const api = supertest(app_instance);

afterAll(async done => {
    await app_instance.close(done)
});

describe("API Root endpoint", () => {
    it("Return status 200 when call /", async end => {
        const apiResponse = api.get('/');
        end();
    }); 
});