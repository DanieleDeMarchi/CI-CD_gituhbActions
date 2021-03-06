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

describe("Students", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
		 // Test to get single student record
		 it("should get a single student record", (done) => {
			 const id = 1;
			 chai.request(app)
			 .get(`/${id}`)
			 .end((err, res) => {
				 res.should.have.status(200);
				 res.body.should.be.a('object');
				 done();
			 });
		 });
		 
		 // Test to get single student record
		 it("should not get a single student record", (done) => {
			 const id = 5;
			 chai.request(app)
			 .get(`/${id}`)
			 .end((err, res) => {
				 res.should.have.status(404);
				 done();
			 });
		 });
    });
});