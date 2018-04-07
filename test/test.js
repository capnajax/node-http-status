
const
    debug = require('debug')('test'),
    expect = require('chai').expect,
    protocols = require('../protocols'),
    statusCodes = require('../index');
 
describe('protocols', function() {
    it('HTCPCP-TEA should have all the early HTTP stati', function(done) {
        expect(Object.keys(protocols[protocols.constants.HTCPT].codes)).to.include('100');
        expect(Object.keys(protocols[protocols.constants.HTCPT].codes)).to.include('101');
        done();
    });
    it('HTCPCP-TEA should have its own status', function(done) {
        expect(Object.keys(protocols[protocols.constants.HTCPT].codes)).to.include('418');
        done();
    });
    it('HTTP/1.1 should list the latest version of a code', function(done) {
        expect(Object.keys(protocols[protocols.constants.HTTP11].codes)).to.include('206');
        expect(protocols[protocols.constants.HTTP11].codes[206]).to.equal(7538);
        done();
    });
    it('HTTP/1.1 should not list non-standard codes', function(done) {
        expect(Object.keys(protocols[protocols.constants.HTTP11].codes)).to.not.include('509');
        done();
    });
    it('WebDAV should list all HTTP codes, even those introduced after 2616', function(done) {
        expect(Object.keys(protocols[protocols.constants.WEBDAV].codes)).to.include('510');
        expect(protocols[protocols.constants.WEBDAV].codes[307]).to.be.equal(7231);
        expect(protocols[protocols.constants.WEBDAV].codes[206]).to.be.equal(7538);
        done();
    });
    it('All codes should be listed with the non-standard protocol', function(done) {
        expect(Object.keys(protocols[protocols.constants.NON_STANDARD].codes)).to.include('599');
        done();
    });
});
 
describe('status codes', function() {
    it('Should know the names of all status codes', function(done) {
        var unknownCodes = [];
        statusCodes.setDefaultProtocol(protocols.constants.NON_STANDARD);
        Object.keys(protocols[protocols.constants.NON_STANDARD].codes).forEach(code => {
            try {
                statusCodes.getStatusText(code);
            } catch(e) {
                unknownCodes.push(code);
            }
        });
        done(unknownCodes.length ? unknownCodes.join(' / ') : undefined);
    });
});
 
describe('status details', function() {
    it('should identify series of status codes', function(done) {
        expect(statusCodes.getStatusDetails(100).series).to.be.equal('1xx Information');
        expect(statusCodes.getStatusDetails(451).series).to.be.equal('4xx Client Error');
        expect(statusCodes.getStatusDetails(500).series).to.be.equal('5xx Server Error');
        done();
    }); 
    it('should throw exception getting details of unknown stati', function(done) {
        expect(() => {statusCodes.getStatusDetails(399);}).to.throw();
        expect(() => {statusCodes.getStatusDetails(104);}).to.throw();
        expect(() => {statusCodes.getStatusDetails(452);}).to.throw();
        done();
    });
    it('should identify RFC that defines status', function(done) {
        expect(statusCodes.getStatusDetails(599).rfc).to.be.equal(-1);
        expect(statusCodes.getStatusDetails(451).rfc).to.be.equal(7725);
        expect(statusCodes.getStatusDetails(500).rfc).to.be.equal(7231);
        done();
    });
});