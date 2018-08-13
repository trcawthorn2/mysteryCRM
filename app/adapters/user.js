import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    findAll: function(store, type, sinceToken, snapshotRecordArray){
        return new Ember.RSVP.Promise(function (resolve) {
            var data = JSON.parse(window.localStorage.getItem('users'));
            if(!data || data == "") {
                data = {users:[]};
            }
            resolve(data);
        });   
    },
    createRecord: function(store, type, snapshot){
        var record = this.serialize(snapshot);
        record.id = '' + Date.now();
        return new Ember.RSVP.Promise(function (resolve) {
            var data = JSON.parse(window.localStorage.getItem('users'));
            if(!data || data == "") {
                data = {users:[]};
            }
            data.users.push(record);
            window.localStorage.setItem('users', JSON.stringify(data));
            console.log(record);
            resolve({user:record});
        });  
    }
});
