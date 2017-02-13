var assert = require('assert');
var Customer = require('../RecordCollector');
var RecordStore = require('../RecordStore');
var Record = require('../Record');

describe('Customer', function(){
  describe('Properties', function(){
    var customer = new Customer('Ben');

    it('should have a name', function(){
      assert.equal('Ben', customer.name);
    });
  });

  describe('buy record', function(){
    var customer = new Customer('Ben');
    var record = new Record('The Record Collector', 'Lissie', 5.00);
    var recordStore = new RecordStore('Marks Majical Musical Menagerie', 'We built this city on rock and roll');

    it('should be able to purchace records', function(){
      customer.cash = 35.00;
      recordStore.addRecord(record);
      customer.buyRecord(recordStore, record);

      assert.equal(0, recordStore.recordCount());
      assert.equal(1, customer.recordCount());
      assert.equal(30.00, customer.cash);
      assert.equal(5.00, recordStore.balance);
    });

    it('should not be able to buy a records when does not have sufficient funds', function(){
      customer.cash = 0.00;
      recordStore.balance = 0;
      recordStore.inventory = [];
      customer.records = [];
      recordStore.addRecord(record);

      assert.equal('Not enough money to purchace record.', customer.buyRecord(recordStore, record));
      assert.equal(1, recordStore.recordCount());
      assert.equal(0, customer.recordCount());
      assert.equal(0.00, customer.cash);
      assert.equal(0.00, recordStore.balance);
    });

    it('able to sell records', function(){
      customer.cash = 0;
      recordStore.balance = 100.00;
      recordStore.inventory = [];
      recordStore.inventory = [];
      customer.records.push(record);

      customer.sellRecord(recordStore, record);

      assert.equal(0, customer.recordCount());
      assert.equal(1, recordStore.recordCount());
      assert.equal(5.00, customer.cash);
      assert.equal(95.00, recordStore.balance);
    });

    it('not be able to sell records if the store does not have enough money', function(){
      customer.cash = 0;
      recordStore.balance = 0.00;
      recordStore.inventory = [];
      customer.records.push(record);

      assert.equal('Store does not have enough money to sell record', customer.sellRecord(recordStore, record));
      assert.equal(1, customer.recordCount());
      assert.equal(0, recordStore.recordCount());
      assert.equal(0.00, customer.cash);
      assert.equal(0.00, recordStore.balance);
    });

  });

});