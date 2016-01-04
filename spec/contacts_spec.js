var contacts = require('../contacts/contacts.js');

describe('contacts', function(){
  it('lists contacts', function(done){
    contacts.all(function(contacts){
      expect( Array.isArray(contacts) ).toBe(true);
      done();
    });
  });
  it('finds user', function(done){
    contacts.find(2, function(contact){
      expect( contact.name ).toEqual('Phil Lamplugh');
      done();
    });
  });
});
