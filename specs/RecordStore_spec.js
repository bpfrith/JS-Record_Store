var assert = require('assert');
var RecordStore = require('../RecordStore');
var Record = require('../Record');

describe('Record Store', function(){
  var recordStore = new RecordStore('Marks Majical Musical Menagerie', 'We built this city on rock and roll');
  var record = new Record('Tubular Bells', 'Mike Oldfield', 5.00);

  describe('Properties', function(){
    it('should have a name', function(){
      assert.equal('Marks Majical Musical Menagerie', recordStore.name);
    });

    it('should have a city', function(){
      assert.equal('We built this city on rock and roll', recordStore.city);
    });

    it('should have a balance', function(){
      assert.equal(0, recordStore.balance);
    });

  });

});