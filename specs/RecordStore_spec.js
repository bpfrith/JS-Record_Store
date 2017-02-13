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

  describe('Inventory', function(){
      beforeEach('Setup', function(){
        recordStore = new RecordStore('Marks Majical Musical Menagerie', 'We built this city on rock and roll');
      });

      it('should start empty', function(){
        assert.equal(0, recordStore.recordCount());
      });

      it('should be able to add records', function(){
        recordStore.addRecord(record);
        assert.equal(1, recordStore.recordCount());
      });

      it('should be able to list records', function(){
        recordStore.addRecord(record);
        assert.deepEqual(
          [{title: 'Tubular Bells', artist: 'Mike Oldfield', price: 5.00}],
          recordStore.listRecords());
      });

      it('should be able to list records', function(){
        recordStore.addRecord(record);
        recordStore.sellRecord(record);

        assert.equal(0, recordStore.recordCount());
        assert.equal(5.00, recordStore.balance);
      });

      it('should be able to report finances', function(){
        recordStore.addRecord(record);
        recordStore.addRecord(record);
        recordStore.sellRecord(record);

        var report = recordStore.financialReport();
        assert.deepEqual({
          balance: 5.00,
          inventoryValue: 5.00,
          totalValue: 10.00
        }, report);
      });
      
    });

});