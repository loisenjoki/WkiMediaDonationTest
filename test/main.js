let chai  = require("chai");
let chaihttp  = require("chai-http");
let server = require("../routes/index.js");
const assert = require('assert');
var expect = chai.expect;
const {convertnum} = require('../public/index')
//assertion style
 chai.should();
 chai.use(chaihttp)


function asyncFunction() {
    return new Promise(resolve => {
        setTimeout(resolve, 10);
    });
}

 describe('Main test', () => {
     //get donors
     describe('Get donors', () => {
         it('should get all donors', async () => {
             await asyncFunction()
             chai.request(server)
                 .get('/alldonations')
                 .end((err, response) => {
                     response.should.have.status(200);
                     response.body.length.should.be.eql(15);
                     response.body.should.be.a('array');

                 });
         });
     })

     //post
     describe('create donors', () => {
         it('should create', () => {
             chai.request(server)
                 .post('/donations')
                 .end((err, response) => {
                     response.should.have.status(200);
                     response.should.contain('email');
                 });
         });
     })

     describe('test', () => {
         it('testing currency conversion',  () => {
             const result = convertnum(1.21,4);
             expect(result).to.be.eq(4.84);
             // assert.equal(result,4);
                 });
         });
 })
