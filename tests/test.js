const config = require('../config.json')
const chai = require("chai");
const chaiHttp = require ("chai-http");
const app = require("../server")

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Version", ()=>{
	describe("GET /ver", ()=>{
		it("should get the api version", (done) => {
			chai.request(app)
				.get('/ver')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.version.should.be.eql(config.ver);
					done();
				 });
		});
	})
})
