var assert = require('assert');
var Record = require('../Record');

describe('Record', function(){
  var record = new Record('Tubular Bells', 'Mike Oldfield', 5.00);

  it('should have a title', function(){
    assert.equal('Tubular Bells', record.title);
  });

  it('should have an artist', function(){
      assert.equal('Mike Oldfield', record.artist);
    });

  it('should have a price', function(){
      assert.equal(5.00, record.price);
    });

});